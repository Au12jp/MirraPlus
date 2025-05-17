/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** ミッション報酬 */
export interface Prize {
  name: string;
  imageUrl: string;
  quantity: number;
}

/** 完了ミッション情報 */
export interface CompletedMission {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  current: number;
  max: number;
  prizes: Prize[];
}

/** キャンペーン詳細 */
export interface CampaignDetail {
  id: number;
  title: string;
  campaignIconUrl?: string;
  period?: string;
  appTitle?: string;
  notes?: string[];
}

/**
 * campaign 関連のあらゆるバッチ・キャッシュ・ポーリング処理をまとめた
 * マネージャークラス
 */
export class CampaignManager {
  private missionsCache = new Map<number, CompletedMission[]>();
  private detailCache = new Map<number, CampaignDetail>();

  constructor(private api: MirrativApi) {}

  // ── 共通ヘルパー ─────────────────────────────────────

  private async withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
    let last: unknown;
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (e) {
        last = e;
      }
    }
    throw last;
  }

  private arraysEqual(a: any[], b: any[]): boolean {
    if (a.length !== b.length) return false;
    const sa = [...a].sort(),
      sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
  }

  // ── Completed Missions ──────────────────────────────────

  /**
   * 指定 campaignId の完了ミッション一覧を取得してキャッシュ
   */
  public async fetchCompletedMissions(
    campaignId: number,
    opts?: AxiosRequestConfig
  ): Promise<CompletedMission[]> {
    if (this.missionsCache.has(campaignId)) {
      return this.missionsCache.get(campaignId)!;
    }
    const resp = await this.withRetry(() =>
      this.api.campaignCompleted_missionFull(
        { id: campaignId },
        undefined,
        opts
      )
    );
    const list = (resp.missions ?? []).map(this.toMission);
    this.missionsCache.set(campaignId, list);
    return list;
  }

  /** キャッシュをクリア（特定 or 全体） */
  public invalidateMissionsCache(campaignId?: number): void {
    if (campaignId != null) this.missionsCache.delete(campaignId);
    else this.missionsCache.clear();
  }

  /**
   * 複数 campaignId の完了ミッションを並列取得
   * 失敗した campaignId は空配列で返却
   */
  public async batchFetchCompletedMissions(
    campaignIds: number[],
    opts?: AxiosRequestConfig
  ): Promise<Record<number, CompletedMission[]>> {
    const entries = await Promise.all(
      campaignIds.map((id) =>
        this.fetchCompletedMissions(id, opts)
          .then((ms) => [id, ms] as const)
          .catch(() => [id, []] as const)
      )
    );
    return Object.fromEntries(entries);
  }

  /**
   * ローカルのミッション状態とサーバー側の差分を取得
   * 戻り値：キャンペーンごとの「新規完了」「未完了に戻った」
   */
  public async diffMissions(
    campaignId: number,
    local: Record<number, boolean>,
    opts?: AxiosRequestConfig
  ): Promise<{ newlyCompleted: number[]; newlyUncompleted: number[] }> {
    const remote = await this.fetchCompletedMissions(campaignId, opts);
    const remoteMap = new Map(remote.map((m) => [m.id, m.isCompleted]));
    const newlyCompleted = [] as number[];
    const newlyUncompleted = [] as number[];

    for (const [id, wasDone] of Object.entries(local)) {
      const nowDone = remoteMap.get(Number(id)) ?? false;
      if (!wasDone && nowDone) newlyCompleted.push(Number(id));
      if (wasDone && !nowDone) newlyUncompleted.push(Number(id));
    }
    return { newlyCompleted, newlyUncompleted };
  }

  // ── Campaign Detail ─────────────────────────────────────

  /**
   * 指定 campaignId の詳細情報を取得してキャッシュ
   */
  public async fetchCampaignDetail(
    campaignId: number,
    opts?: AxiosRequestConfig
  ): Promise<CampaignDetail> {
    if (this.detailCache.has(campaignId)) {
      return this.detailCache.get(campaignId)!;
    }
    const resp = await this.withRetry(() =>
      this.api.campaignDetailFull({ id: campaignId }, undefined, opts)
    );
    const model = this.toDetail(resp, campaignId);
    this.detailCache.set(campaignId, model);
    return model;
  }

  /** キャッシュをクリア（特定 or 全体） */
  public invalidateDetailCache(campaignId?: number): void {
    if (campaignId != null) this.detailCache.delete(campaignId);
    else this.detailCache.clear();
  }

  /**
   * 複数 campaignId の詳細情報を並列取得
   * 失敗したものは null で返却
   */
  public async batchFetchCampaignDetails(
    campaignIds: number[],
    opts?: AxiosRequestConfig
  ): Promise<Record<number, CampaignDetail | null>> {
    const entries = await Promise.all(
      campaignIds.map((id) =>
        this.fetchCampaignDetail(id, opts)
          .then((d) => [id, d] as const)
          .catch(() => [id, null] as const)
      )
    );
    return Object.fromEntries(entries);
  }

  // ── ポーリング ──────────────────────────────────────────

  /**
   * 完了ミッション一覧を定期ポーリングし、変化があればコールバック
   */
  public startMissionsPolling(
    campaignId: number,
    intervalMs: number,
    onChange: (missions: CompletedMission[]) => void
  ): { stop: () => void } {
    let prevIds: number[] = [];
    const timer = setInterval(async () => {
      const ms = await this.fetchCompletedMissions(campaignId);
      const currIds = ms.map((m) => m.id);
      if (!this.arraysEqual(prevIds, currIds)) {
        prevIds = currIds;
        onChange(ms);
      }
    }, intervalMs);
    return { stop: () => clearInterval(timer) };
  }

  /**
   * キャンペーン詳細を定期ポーリングし、変化があればコールバック
   */
  public startDetailPolling(
    campaignId: number,
    intervalMs: number,
    onChange: (detail: CampaignDetail) => void
  ): { stop: () => void } {
    let prevJson = "";
    const timer = setInterval(async () => {
      const detail = await this.fetchCampaignDetail(campaignId);
      const j = JSON.stringify(detail);
      if (j !== prevJson) {
        prevJson = j;
        onChange(detail);
      }
    }, intervalMs);
    return { stop: () => clearInterval(timer) };
  }

  // ── 変換ユーティリティ ───────────────────────────────────

  private toMission(raw: any): CompletedMission {
    return {
      id: raw.id ?? 0,
      title: raw.title ?? "",
      description: raw.description ?? "",
      isCompleted: raw.progress_status?.is_completed === 1,
      current: raw.progress_status?.current ?? 0,
      max: raw.progress_status?.max ?? 0,
      prizes: (raw.prizes ?? []).map((p: any) => ({
        name: p.prize_name ?? "",
        imageUrl: p.prize_image_url ?? "",
        quantity: Number(p.prize_num ?? 0),
      })),
    };
  }

  private toDetail(raw: any, campaignId: number): CampaignDetail {
    return {
      id: campaignId,
      title: raw.title ?? "",
      campaignIconUrl: raw.campaign_icon_url,
      period: raw.period,
      appTitle: raw.app?.title,
      notes: raw.notes ?? [],
    };
  }
}
