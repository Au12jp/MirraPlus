import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** コインボックスの状態 */
export interface CoinBoxStatus {
  boxAvailabilityStatus?: number; // 0: unavailable, 1: available など
  openCount?: number;
  openCountByStreamer?: number;
  commentThreshold?: number;
  watchingTimeThreshold?: number;
  lpUrl?: string;
}

/** coin 関連 API をまとめたマネージャー */
export class CoinManager {
  private statusCache = new Map<string, { ts: number; data: CoinBoxStatus }>();

  constructor(private api: MirrativApi) {}

  /** ネットワークリクエストを最大3回までリトライ */
  private async withRetry<T>(
    fn: () => Promise<T>,
    retries = 3,
    delayMs = 500
  ): Promise<T> {
    let lastErr: unknown;
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (e) {
        lastErr = e;
        await new Promise((r) => setTimeout(r, delayMs));
      }
    }
    throw lastErr;
  }

  /**
   * キャッシュを考慮しつつコインボックスのステータスを取得
   * キャッシュ有効期間: 5秒
   */
  public async fetchStatus(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<CoinBoxStatus> {
    const key = liveId || "__default";
    const cached = this.statusCache.get(key);
    if (cached && Date.now() - cached.ts < 5000) {
      return cached.data;
    }

    const resp = await this.withRetry(() =>
      this.api.coin_boxStatusFull({ live_id: liveId }, undefined, opts)
    );

    const status: CoinBoxStatus = {
      boxAvailabilityStatus: resp.box_status?.box_availability_status,
      openCount: resp.box_status?.open_count,
      openCountByStreamer: resp.box_status?.open_count_by_streamer,
      commentThreshold: resp.comment_threshold,
      watchingTimeThreshold: resp.watching_time_threshold,
      lpUrl: resp.lp_url,
    };

    this.statusCache.set(key, { ts: Date.now(), data: status });
    return status;
  }

  /** キャッシュをクリア */
  public clearCache(liveId?: string): void {
    if (liveId) this.statusCache.delete(liveId);
    else this.statusCache.clear();
  }

  /**
   * 箱が「開けられる」状態かどうかを判定
   * （boxAvailabilityStatus === 1 なら available とみなす）
   */
  public async isBoxAvailable(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<boolean> {
    const s = await this.fetchStatus(liveId, opts);
    return s.boxAvailabilityStatus === 1;
  }

  /**
   * 一定間隔でポーリングし、箱が開けられるまで待機
   * @param intervalMs ポーリング間隔（ミリ秒）
   * @param timeoutMs   タイムアウト（ミリ秒）
   */
  public async waitForAvailability(
    liveId: string,
    intervalMs = 2000,
    timeoutMs = 60000,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      if (await this.isBoxAvailable(liveId, opts)) {
        return;
      }
      await new Promise((r) => setTimeout(r, intervalMs));
    }
    throw new Error(
      "タイムアウト: コインボックスのオープン可能状態を確認できませんでした。"
    );
  }

  /**
   * ステータス取得（簡易版）
   */
  public async getStatus(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<{ ok?: number; error?: string; error_code?: number }> {
    return this.api.coin_boxStatus({ live_id: liveId }, undefined, opts);
  }
}
