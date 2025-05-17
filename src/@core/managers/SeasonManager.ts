/* eslint-disable no-constant-condition */
import { MirrativApi } from "../mirrativApi";

/**
 * season 関連 API をまとめたマネージャー（8 件 + 応用メソッド8件）
 */
export class SeasonManager {
  constructor(private api: MirrativApi) {}

  // --- 既存の8メソッド省略 ---
  // season_ratingStatus, season_ratingStatusFull,
  // season_yellStatus, season_yellStatusFull,
  // season_yellViewers, season_yellViewersFull,
  // season_ratingLive_result, season_ratingLive_resultFull

  /**
   * ユーザーの今シーズン概要を取得
   */
  public async getSeasonOverview(
    userId?: number
  ): Promise<{
    current: number;
    lastSeason: number;
    duration?: string;
    starSummary: Record<string, unknown> | null | undefined;
  }> {
    const res = await this.api.season_ratingStatusFull(
      { user_id: userId },
      undefined,
      undefined
    );
    if (res.status?.ok !== 1) {
      throw new Error(res.status?.error || "Failed to fetch season status");
    }
    return {
      current: res.season?.current ?? 0,
      lastSeason: res.last_season?.current ?? 0,
      duration: res.season?.season_duration,
      starSummary: res.star_summary,
    };
  }

  /**
   * 複数ストリーマーのイエール状況をまとめて取得
   */
  public async getYellStatusForStreamers(
    userId: number,
    streamerIds: number[]
  ): Promise<
    Array<{
      streamerId: number;
      yellLpUrl?: string;
      yellStatus: Record<string, unknown> | null | undefined;
    }>
  > {
    const tasks = streamerIds.map(async (sid) => {
      const res = await this.api.season_yellStatusFull(
        { user_id: userId, streamer_id: sid },
        undefined,
        undefined
      );
      if (res.status?.ok !== 1) {
        throw new Error(res.status?.error || `Failed for streamer ${sid}`);
      }
      return {
        streamerId: sid,
        yellLpUrl: res.yell_lp_url,
        yellStatus: res.yell_status,
      };
    });
    return Promise.all(tasks);
  }

  /**
   * イエールビューワーから上位N名を取得
   */
  public async getTopYellers(
    userId?: number,
    topN = 5
  ): Promise<
    Array<{
      name: string;
      userId: string;
      rank: number;
      level: number;
    }>
  > {
    const res = await this.api.season_yellViewersFull(
      { user_id: userId },
      undefined,
      undefined
    );
    if (res.status?.ok !== 1 || !Array.isArray(res.list)) {
      throw new Error(res.status?.error || "Failed to fetch yellers");
    }
    const all = res.list
      .flatMap((g) => g.users ?? [])
      .sort((a, b) => (a.yell_rank ?? Infinity) - (b.yell_rank ?? Infinity))
      .slice(0, topN);
    return all.map((u) => ({
      name: u.name ?? "",
      userId: u.user_id ?? "",
      rank: u.yell_rank ?? 0,
      level: u.yell_level ?? 0,
    }));
  }

  /**
   * 生放送IDを指定して、シーズン結果公開までポーリング
   */
  public async waitForSeasonResult(
    liveId: string,
    intervalMs = 60_000,
    timeoutMs = 3_600_000
  ): Promise<void> {
    const start = Date.now();
    while (true) {
      const res = await this.api.season_ratingLive_resultFull(
        { live_id: liveId },
        undefined,
        undefined
      );
      if (res.status?.ok !== 1) {
        throw new Error(res.status?.error || "Failed to poll live result");
      }
      // days_left と hours_left が両方 0 以下なら終了
      if ((res.days_left ?? 1) <= 0 && (res.hours_left ?? 1) <= 0) {
        return;
      }
      if (Date.now() - start > timeoutMs) {
        throw new Error(`Timeout waiting for live result of ${liveId}`);
      }
      await new Promise((r) => setTimeout(r, intervalMs));
    }
  }

  /**
   * ライブ結果からカテゴリごとの平均スコアを計算
   */
  public async calculateAverageScorePerCategory(
    liveId: string
  ): Promise<Record<string, number>> {
    const res = await this.api.season_ratingLive_resultFull(
      { live_id: liveId },
      undefined,
      undefined
    );
    if (res.status?.ok !== 1) {
      throw new Error(res.status?.error || "Failed to fetch live result");
    }
    const cats = [
      "broadcast",
      "comment",
      "follow",
      "gift",
      "view",
      "first_look",
      "yell",
      "others",
    ] as const;
    const avg: Record<string, number> = {};
    for (const cat of cats) {
      const obj = (res as any)[cat] as
        | { count?: number; acquired_score?: number }
        | undefined;
      if (obj?.count && obj.acquired_score !== undefined) {
        avg[cat] = obj.acquired_score / obj.count;
      } else {
        avg[cat] = 0;
      }
    }
    return avg;
  }

  /**
   * 今シーズンのイエール参加統計を取得
   */
  public async getYellParticipationStats(
    userId?: number
  ): Promise<{
    totalUsers: number;
    avgRank: number;
  }> {
    const res = await this.api.season_yellViewersFull(
      { user_id: userId },
      undefined,
      undefined
    );
    if (res.status?.ok !== 1 || !Array.isArray(res.list)) {
      throw new Error(res.status?.error || "Failed to fetch viewers");
    }
    const all = res.list.flatMap((g) => g.users ?? []);
    const ranks = all.map((u) => u.yell_rank ?? 0);
    const total = ranks.length;
    const avg = total ? ranks.reduce((a, b) => a + b, 0) / total : 0;
    return { totalUsers: total, avgRank: avg };
  }

  /**
   * 複数ユーザーのレーティングステータスを一括取得
   */
  public async batchFetchRatingStatuses(
    userIds: number[]
  ): Promise<
    Array<{
      userId: number;
      ok: boolean;
      error?: string;
    }>
  > {
    const tasks = userIds.map(async (uid) => {
      try {
        const res = await this.api.season_ratingStatus(
          { user_id: uid },
          undefined,
          undefined
        );
        return { userId: uid, ok: res.ok === 1, error: res.error };
      } catch (e: any) {
        return { userId: uid, ok: false, error: e.message };
      }
    });
    return Promise.all(tasks);
  }

  /**
   * イエールレベルごとにユーザーIDをグルーピング
   */
  public async groupStreamersByYellLevel(
    userId?: number
  ): Promise<Record<number, string[]>> {
    const res = await this.api.season_yellViewersFull(
      { user_id: userId },
      undefined,
      undefined
    );
    if (res.status?.ok !== 1 || !Array.isArray(res.list)) {
      throw new Error(res.status?.error || "Failed to fetch viewers");
    }
    const map: Record<number, string[]> = {};
    res.list
      .flatMap((g) => g.users ?? [])
      .forEach((u) => {
        const lvl = u.yell_level ?? 0;
        const id = u.user_id ?? "";
        if (!map[lvl]) map[lvl] = [];
        map[lvl].push(id);
      });
    return map;
  }
}
