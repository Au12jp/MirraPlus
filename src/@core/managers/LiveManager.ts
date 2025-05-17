/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

interface ApiStatus {
  ok?: number;
  error?: string;
  error_code?: number;
}

export interface BatchResult {
  succeeded: string[];
  failed: string[];
}

export interface LiveDetail {
  id: string;
  title?: string;
  description?: string;
  isLive: boolean;
  startedAt?: number;
  endedAt?: number;
  totalViewerNum?: number;
  ownerName?: string;
  shareUrl?: string;
  // giftCoins, stampNum はライブ詳細 API には含まれないので外しました
}

export interface CommentResult {
  success: boolean;
  error?: string;
}

async function withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

export class LiveManager {
  constructor(private api: MirrativApi) {}

  /**
   * 指定 live_id の詳細情報を取得
   */
  public async getLiveDetail(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<LiveDetail> {
    const res = await withRetry(() =>
      this.api.liveLiveFull({ live_id: liveId }, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st?.ok !== 1 || !res.live_id) {
      throw new Error(st?.error || "Failed to fetch live detail");
    }
    return {
      id: res.live_id,
      title: res.title,
      description: res.description,
      isLive: Boolean(res.is_live),
      startedAt: res.started_at,
      endedAt: res.ended_at,
      totalViewerNum: res.total_viewer_num,
      ownerName: res.owner?.name,
      shareUrl: res.share_url,
    };
  }

  /**
   * プレビュー状態が「配信中」になるまでポーリング
   */
  public async waitForLiveStart(
    liveId: string,
    intervalMs = 5000,
    timeoutMs = 300000,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const res = await withRetry(() =>
        this.api.livePreview_pollingFull({ live_id: liveId }, undefined, opts)
      );
      if (res.is_live === 1) return;
      await new Promise((r) => setTimeout(r, intervalMs));
    }
    throw new Error(`Live ${liveId} did not start within ${timeoutMs}ms`);
  }

  /**
   * 配信終了を検知するまでポーリング
   */
  public async waitForLiveEnd(
    liveId: string,
    intervalMs = 5000,
    timeoutMs = 3600000,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const res = await withRetry(() =>
        this.api.liveLive_pollingFull({ live_id: liveId }, undefined, opts)
      );
      if (res.is_live !== 1) return;
      await new Promise((r) => setTimeout(r, intervalMs));
    }
    throw new Error(`Live ${liveId} did not end within ${timeoutMs}ms`);
  }

  /**
   * バッチでプレビュー停止
   */
  public async batchEndPreviews(
    liveIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      liveIds.map((id) =>
        withRetry(() =>
          this.api.livePreview_endFull({ live_id: id }, undefined, opts)
        )
          .then((r) => ({ id, ok: (r.status?.ok ?? 0) === 1 }))
          .catch(() => ({ id, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  /**
   * 生コメントをサニタイズ → 即時投稿
   */
  public async sanitizeAndComment(
    liveId: string,
    rawComment: string,
    opts?: AxiosRequestConfig
  ): Promise<CommentResult> {
    try {
      const san = await withRetry(() =>
        this.api.liveSanitize_textFull({ text: rawComment }, undefined, opts)
      );
      if (san.status?.ok !== 1 || !san.sanitized_text) {
        throw new Error(san.status?.error || "Sanitize failed");
      }

      const post = await withRetry(() =>
        this.api.liveLive_commentFull(
          { live_id: liveId, comment: san.sanitized_text },
          undefined,
          opts
        )
      );
      if (!(post.status && post.status.ok === 1)) {
        throw new Error(post.status?.error || "Comment post failed");
      }

      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  }

  /**
   * 配信終了後の視聴者統計を取得
   */
  public async getViewerStats(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<{
    totalViewerNum: number;
    topGifters: Array<{ userId: string; coins: number }>;
  }> {
    const res = await withRetry(() =>
      this.api.liveBroadcast_resultFull({ live_id: liveId }, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st?.ok !== 1) {
      throw new Error(st?.error || "Failed to fetch broadcast result");
    }

    const total = Number(res.total_viewer_num ?? 0);
    const gifters: Array<{ userId: string; coins: number }> = [];
    for (const g of (res as any).top_gifters ?? []) {
      gifters.push({ userId: String(g.user_id), coins: Number(g.coins) });
    }

    return { totalViewerNum: total, topGifters: gifters };
  }
}
