import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 共通ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
}

/** ミッション項目 */
interface MissionItem {
  id: number;
  title?: string;
  status: number;
  progress?: { current: number; max: number };
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

export class MissionManager {
  constructor(private api: MirrativApi) {}

  /**
   * デイリーミッションの詳細を取得
   */
  public async fetchDailyMissions(
    opts?: AxiosRequestConfig
  ): Promise<MissionItem[]> {
    const res = await withRetry(() =>
      this.api.missionDailyFull({}, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st == null || st.ok !== 1) {
      throw new Error(st?.error || "Failed to fetch daily missions");
    }
    return (res.category_first?.missions ?? []).map((m) => ({
      id: m.id ?? NaN,
      title: m.title ?? undefined,
      status: m.status ?? 0,
      progress: m.progress_status
        ? {
            current: m.progress_status.current ?? 0,
            max: m.progress_status.max ?? 0,
          }
        : undefined,
    }));
  }

  /**
   * ウィークリーミッションの詳細を取得
   */
  public async fetchWeeklyMissions(
    opts?: AxiosRequestConfig
  ): Promise<MissionItem[]> {
    const res = await withRetry(() =>
      this.api.missionWeeklyFull({}, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st == null || st.ok !== 1) {
      throw new Error(st?.error || "Failed to fetch weekly missions");
    }
    const items: MissionItem[] = [];
    for (const cat of [res.category_first, res.category_second]) {
      for (const m of cat?.missions ?? []) {
        items.push({
          id: m.id ?? NaN,
          title: m.title ?? undefined,
          status: m.status ?? 0,
          progress: m.progress_status
            ? {
                current: m.progress_status.current ?? 0,
                max: m.progress_status.max ?? 0,
              }
            : undefined,
        });
      }
    }
    return items;
  }

  /**
   * チュートリアルミッションのステータスを取得
   */
  public async fetchTutorialStatus(
    opts?: AxiosRequestConfig
  ): Promise<{
    enabled: boolean;
    unreceivedCount: number;
  }> {
    const res = await withRetry(() =>
      this.api.missionTutorial_statusFull({}, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st == null || st.ok !== 1) {
      throw new Error(st?.error || "Failed to fetch tutorial status");
    }
    return {
      enabled: Boolean(res.enable_mission),
      unreceivedCount: res.unreceived_mission_num ?? 0,
    };
  }

  /**
   * 現在のログインボーナスを受領
   */
  public async claimCurrentLoginBonus(
    opts?: AxiosRequestConfig
  ): Promise<boolean> {
    const res = await withRetry(() =>
      this.api.missionCurrent_login_bonusFull({}, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st == null || st.ok !== 1 || !res.login_bonus_id) {
      throw new Error(st?.error || "Failed to fetch login bonus");
    }

    const recv = await withRetry(() =>
      this.api.missionReceive_login_bonus_reward(
        { login_bonus_id: res.login_bonus_id },
        undefined,
        opts
      )
    );
    return recv.ok === 1;
  }

  /**
   * ミッション全体の状況をまとめて取得
   */
  public async getAllMissionStatus(opts?: AxiosRequestConfig) {
    const [daily, weekly, tutorial] = await Promise.all([
      this.fetchDailyMissions(opts),
      this.fetchWeeklyMissions(opts),
      this.fetchTutorialStatus(opts),
    ]);
    return { daily, weekly, tutorial };
  }
}
