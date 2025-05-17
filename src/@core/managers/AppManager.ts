/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 自分のアプリ情報 */
export interface MyApp {
  id: number;
  app_id: string;
  title: string;
  icon_url: string;
  is_my_app: boolean;
}

/** 推奨アプリ情報 */
export interface RecommendedApp {
  app_id: string;
  title: string;
  icon_url: string;
  skip_enabled: boolean;
}

/** バナー情報 */
export interface AppealBanner {
  id: string;
  imageUrl: string;
  linkUrl: string;
}

/** バッチ更新結果 */
export interface BatchUpdateResult {
  added: string[];
  removed: string[];
}

/**
 * あらゆる “アプリ関連バッチ／同期／検索／ポーリング” 処理をまとめたマネージャークラス
 */
export class AppManager {
  private detailCache = new Map<string, MyApp>();
  private recommendedCache: RecommendedApp[] | null = null;

  constructor(private api: MirrativApi) {}

  // ── 共通ユーティリティ ──────────────────────────────────────

  private async withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
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

  private arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) return false;
    const sa = [...a].sort(),
      sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
  }

  // ── My Apps ─────────────────────────────────────────────────

  /** 全ページの自分のアプリを取得 */
  public async fetchAllMyApps(
    userId: number,
    opts?: AxiosRequestConfig
  ): Promise<MyApp[]> {
    const result: MyApp[] = [];
    let page = 1;
    while (true) {
      const resp = await this.withRetry(() =>
        this.api.appMy_appFull({ user_id: userId, page }, undefined, opts)
      );
      if (!resp.apps || resp.apps.length === 0) break;
      result.push(...resp.apps.map(this.toMyApp));
      page++;
    }
    return result;
  }

  /** app_id で詳細取得＋キャッシュ */
  public async getAppUserDetail(appId: string): Promise<MyApp> {
    if (this.detailCache.has(appId)) {
      return this.detailCache.get(appId)!;
    }
    const resp = await this.withRetry(() =>
      this.api.appApp_user_detailFull({ app_id: appId })
    );
    const model = this.toMyAppDetail(resp);
    this.detailCache.set(appId, model);
    return model;
  }

  /** 現有と target の差分で一括追加／削除 */
  public async batchUpdateMyApps(
    userId: number,
    targetAppIds: string[]
  ): Promise<BatchUpdateResult> {
    const current = new Set(
      (await this.fetchAllMyApps(userId)).map((a) => a.app_id)
    );
    const toAdd = targetAppIds.filter((id) => !current.has(id));
    const toRemove = Array.from(current).filter(
      (id) => !targetAppIds.includes(id)
    );

    if (toAdd.length) {
      await this.withRetry(() =>
        this.api.appAdd_my_appFull({ app_ids: toAdd })
      );
    }
    if (toRemove.length) {
      await this.withRetry(() =>
        this.api.appDelete_my_appFull({ app_ids: toRemove })
      );
    }
    return { added: toAdd, removed: toRemove };
  }

  /** キャッシュクリア（特定 or 全体） */
  public invalidateDetailCache(appId?: string): void {
    appId ? this.detailCache.delete(appId) : this.detailCache.clear();
  }

  // ── Recommended Apps ────────────────────────────────────────

  /** 推奨アプリを取得してキャッシュ */
  public async fetchRecommendedApps(
    opts?: AxiosRequestConfig
  ): Promise<RecommendedApp[]> {
    if (this.recommendedCache) return this.recommendedCache;
    const resp = await this.withRetry(() =>
      this.api.appRecommend_appsFull({}, undefined, opts)
    );
    this.recommendedCache = (resp.apps ?? []).map(this.toRecommendedApp);
    return this.recommendedCache;
  }

  /** 推奨アプリのキーワード検索（全ページ） */
  public async searchAppsByKeyword(
    keyword: string,
    maxPages = 5,
    opts?: AxiosRequestConfig
  ): Promise<RecommendedApp[]> {
    const results: RecommendedApp[] = [];
    for (let page = 1; page <= maxPages; page++) {
      const resp = await this.withRetry(() =>
        this.api.appSearchFull({ recommend_by: keyword, page }, undefined, opts)
      );
      if (!resp.apps || resp.apps.length === 0) break;
      results.push(...resp.apps.map(this.toRecommendedApp));
    }
    return results;
  }

  /** 推奨アプリキャッシュクリア */
  public invalidateRecommendedCache(): void {
    this.recommendedCache = null;
  }

  // ── Appeal Banners ─────────────────────────────────────────

  /** 複数 ID のバナーを一括取得 */
  public async fetchAllAppealBanners(
    ids: string[],
    opts?: AxiosRequestConfig
  ): Promise<AppealBanner[]> {
    const all: AppealBanner[] = [];
    for (const id of ids) {
      const resp = await this.withRetry(() =>
        this.api.appAppeal_bannersFull({ app_id: id }, undefined, opts)
      );
      all.push(...(resp.banners ?? []).map(this.toAppealBanner));
    }
    return all;
  }

  // ── Onlive Apps ポーリング ─────────────────────────────────

  /**
   * オンライブアプリをポーリングし、変化時にコールバック
   */
  public startOnlivePolling(
    intervalMs: number,
    callback: (apps: MyApp[]) => void
  ): { stop: () => void } {
    let prevIds: string[] = [];
    const timer = setInterval(async () => {
      const resp = await this.withRetry(() => this.api.appOnlive_appsFull({}));
      const currIds = (resp.apps ?? []).map((a) => a.app_id ?? "");
      if (!this.arraysEqual(prevIds, currIds)) {
        prevIds = currIds;
        callback((resp.apps ?? []).map(this.toMyApp));
      }
    }, intervalMs);
    return { stop: () => clearInterval(timer) };
  }

  // ── 並列取得（失敗スキップ） ─────────────────────────────────

  /** 複数詳細を並列取得。失敗は null で返す */
  public async batchFetchDetails(
    ids: string[]
  ): Promise<Record<string, MyApp | null>> {
    const entries = await Promise.all(
      ids.map((id) =>
        this.getAppUserDetail(id)
          .then((d) => [id, d] as const)
          .catch(() => [id, null] as const)
      )
    );
    return Object.fromEntries(entries);
  }

  // ── AppUser Details バッチ ──────────────────────────────────

  /**
   * 複数の app_id について、appDelete_app_user_detail を並列実行
   * 成功した ID のみ返します
   */
  public async batchDeleteAppUserDetails(
    appIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<string[]> {
    const results = await Promise.all(
      appIds.map((id) =>
        this.withRetry(() =>
          this.api.appDelete_app_user_detail({ app_id: id }, undefined, opts)
        )
          .then(() => id)
          .catch(() => null)
      )
    );
    return results.filter((id): id is string => id !== null);
  }

  /**
   * 複数の detail 情報を appPost_app_user_detail で並列登録
   * 成功した ID のみ返します
   */
  public async batchPostAppUserDetails(
    details: Array<{
      app_id: string;
      confirmed?: string;
      type?: string;
      value?: string;
    }>,
    opts?: AxiosRequestConfig
  ): Promise<string[]> {
    const results = await Promise.all(
      details.map((d) =>
        this.withRetry(() =>
          this.api.appPost_app_user_detail(d, undefined, opts)
        )
          .then(() => d.app_id)
          .catch(() => null)
      )
    );
    return results.filter((id): id is string => id !== null);
  }

  // ── 他ユーザーの Apps ────────────────────────────────────────

  /** 任意ユーザーの全アプリを取得（カーソル／ページング対応） */
  public async fetchAllUserApps(
    userId: number,
    opts?: AxiosRequestConfig
  ): Promise<MyApp[]> {
    const result: MyApp[] = [];
    let cursor: string | null | undefined = undefined;

    do {
      const resp = await this.withRetry(() =>
        this.api.appUser_appsFull({ user_id: userId }, undefined, opts)
      );
      result.push(...(resp.apps ?? []).map(this.toMyApp));
      cursor = resp.next_cursor ?? null;
    } while (cursor);

    return result;
  }

  /**
   * 指定ユーザーの所持アプリと詳細情報を “目標セット” に合わせて同期
   */
  public async syncUserAppsWithDetails(
    userId: number,
    targetDetailMap: Record<
      string,
      { confirmed?: string; type?: string; value?: string }
    >,
    opts?: AxiosRequestConfig
  ): Promise<
    BatchUpdateResult & { detailPosted: string[]; detailDeleted: string[] }
  > {
    const current = new Set(
      (await this.fetchAllUserApps(userId, opts)).map((a) => a.app_id)
    );
    const target = new Set(Object.keys(targetDetailMap));

    const toAdd = Array.from(target).filter((id) => !current.has(id));
    const toRemove = Array.from(current).filter((id) => !target.has(id));

    if (toAdd.length) {
      await this.withRetry(() =>
        this.api.appAdd_my_appFull({ app_ids: toAdd })
      );
    }
    if (toRemove.length) {
      await this.withRetry(() =>
        this.api.appDelete_my_appFull({ app_ids: toRemove })
      );
    }

    const detailIds = Array.from(target);
    const detailDeleted = await this.batchDeleteAppUserDetails(detailIds, opts);
    const detailsArray = detailIds.map((id) => ({
      app_id: id,
      ...targetDetailMap[id],
    }));
    const detailPosted = await this.batchPostAppUserDetails(detailsArray, opts);

    return { added: toAdd, removed: toRemove, detailDeleted, detailPosted };
  }

  // ── ドメイン変換ユーティリティ ──────────────────────────────

  private toMyApp(raw: any): MyApp {
    return {
      id: raw.id ?? 0,
      app_id: raw.app_id ?? "",
      title: raw.title ?? "",
      icon_url: raw.icon_url ?? "",
      is_my_app: raw.is_my_app === 1,
    };
  }

  private toMyAppDetail(raw: any): MyApp {
    return {
      id: Number(raw.user_id ?? 0),
      app_id: raw.url ?? "",
      title: raw.name ?? "",
      icon_url: "",
      is_my_app: raw.status?.ok === 1,
    };
  }

  private toRecommendedApp(raw: any): RecommendedApp {
    return {
      app_id: raw.app_id ?? "",
      title: raw.title ?? "",
      icon_url: raw.icon_url ?? "",
      skip_enabled: raw.is_skip_enabled === true,
    };
  }

  private toAppealBanner(raw: any): AppealBanner {
    return {
      id: String(raw.id ?? ""),
      imageUrl: String(raw.icon_url ?? raw.image_url ?? ""),
      linkUrl: String(raw.link_url ?? ""),
    };
  }
}
