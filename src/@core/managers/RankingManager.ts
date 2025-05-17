/* eslint-disable no-constant-condition */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 焦点可能なイベント情報 */
interface FocusableEvent {
  eventId: string;
  title?: string;
  period?: string;
  imageUrl?: string;
  isFocus: boolean;
}

/** ユーザーランキング詳細 */
interface UserRanking {
  eventId: number;
  totalPoint?: number;
  rank?: number;
  rankText?: string;
}

/** 共通ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
}

/** リトライヘルパー */
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

export class RankingManager {
  constructor(private api: MirrativApi) {}

  /**
   * 現在フォーカス可能なイベントをすべて取得
   */
  public async fetchAllFocusable(
    opts?: AxiosRequestConfig
  ): Promise<FocusableEvent[]> {
    const res = await withRetry(() =>
      this.api.rankingFocusableFull({}, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st?.ok !== 1) throw new Error(st?.error || "Failed to fetch focusable");
    return (res.rankings ?? []).map((r) => ({
      eventId: String(r.event_id),
      title: r.title,
      period: r.period,
      imageUrl: r.image_url,
      isFocus: Boolean(r.is_focus),
    }));
  }

  /**
   * 指定イベントがフォーカス可能リストに現れるまでポーリング
   */
  public async waitForEventFocusable(
    eventId: string,
    intervalMs = 3000,
    timeoutMs = 60000,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    const start = Date.now();
    while (true) {
      const list = await this.fetchAllFocusable(opts);
      if (list.some((e) => e.eventId === eventId)) return;
      if (Date.now() - start > timeoutMs) {
        throw new Error(`Event ${eventId} did not become focusable in time`);
      }
      await new Promise((r) => setTimeout(r, intervalMs));
    }
  }

  /**
   * 指定ライブID のユーザーランキング一覧を取得
   */
  public async fetchUserRankings(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<UserRanking[]> {
    const res = await withRetry(() =>
      this.api.rankingUser_detailFull({ live_id: liveId }, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st?.ok !== 1)
      throw new Error(st?.error || "Failed to fetch user detail");
    return (res.rankings ?? []).map((r) => ({
      eventId: r.event_id ?? NaN,
      totalPoint: r.total_point,
      rank: r.rank,
      rankText: r.rank_text,
    }));
  }

  /**
   * 複数ライブID のユーザーランキングを並列取得
   */
  public async batchFetchUserRankings(
    liveIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<Record<string, UserRanking[]>> {
    const entries = await Promise.all(
      liveIds.map((id) =>
        withRetry(() => this.fetchUserRankings(id, opts))
          .then((list) => [id, list] as const)
          .catch(() => [id, []] as const)
      )
    );
    return Object.fromEntries(entries);
  }

  /**
   * 指定イベントのユーザー内順位を返す
   */
  public async getEventRankForLive(
    liveId: string,
    eventId: number,
    opts?: AxiosRequestConfig
  ): Promise<{ rank?: number; totalPoint?: number }> {
    const rankings = await this.fetchUserRankings(liveId, opts);
    const ev = rankings.find((r) => r.eventId === eventId);
    return { rank: ev?.rank, totalPoint: ev?.totalPoint };
  }
}
