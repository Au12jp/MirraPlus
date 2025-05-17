/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** カタログバナーのドメインモデル */
export interface Banner {
  adContentUrl?: string;
  imageUrl?: string;
  description?: string;
  linkUrl?: string;
  subtitle?: string;
  title?: string;
}

/** フォロー中のライブのドメインモデル */
export interface FollowItem {
  liveId: string;
  title?: string;
  ownerName?: string;
  thumbnailUrl?: string;
  startedAt?: number;
}

/** ライブ一覧のドメインモデル */
export interface CatalogLive {
  liveId: string;
  title?: string;
  ownerName?: string;
  thumbnailUrl?: string;
  isLive?: boolean;
}

/** タブ情報のドメインモデル */
export interface Tab {
  tabId: string;
  name: string;
  pageId: string;
}

/**
 * CatalogManager: catalog 系 API のバッチ／キャッシュ／ページング／ポーリング処理
 */
export class CatalogManager {
  private bannersCache = new Map<number, Banner[]>();
  private followCache: FollowItem[] | null = null;
  private livesCache = new Map<number, CatalogLive[]>();
  private tabsCache: Tab[] | null = null;

  constructor(private api: MirrativApi) {}

  // ── 共通ユーティリティ ─────────────────────────────────

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

  private arraysEqual<T>(a: T[], b: T[]): boolean {
    if (a.length !== b.length) return false;
    const sa = [...a].sort(),
      sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
  }

  // ── Banners ─────────────────────────────────────────────

  /** 指定 tab_id のバナー一覧をキャッシュ付きで取得 */
  public async fetchBanners(
    tabId: number,
    opts?: AxiosRequestConfig
  ): Promise<Banner[]> {
    if (this.bannersCache.has(tabId)) {
      return this.bannersCache.get(tabId)!;
    }
    const resp = await this.withRetry(() =>
      this.api.catalogBannersFull({ tab_id: tabId }, undefined, opts)
    );
    const list = (resp.banners ?? []).map(this.toBanner);
    this.bannersCache.set(tabId, list);
    return list;
  }

  /** 複数 tab_id のバナーをまとめて取得 */
  public async fetchBannersForTabs(
    tabIds: number[],
    opts?: AxiosRequestConfig
  ): Promise<Record<number, Banner[]>> {
    const entries = await Promise.all(
      tabIds.map((id) =>
        this.fetchBanners(id, opts)
          .then((b) => [id, b] as const)
          .catch(() => [id, []] as const)
      )
    );
    return Object.fromEntries(entries);
  }

  /** バナーキャッシュクリア */
  public invalidateBanners(tabId?: number): void {
    if (tabId != null) this.bannersCache.delete(tabId);
    else this.bannersCache.clear();
  }

  /** バナーの変化をポーリングで監視 */
  public watchBanners(
    tabId: number,
    intervalMs: number,
    onChange: (banners: Banner[]) => void
  ): { stop: () => void } {
    let prev: Banner[] = [];
    const timer = setInterval(async () => {
      const current = await this.fetchBanners(tabId);
      if (!this.arraysEqual(prev, current)) {
        prev = current;
        onChange(current);
      }
    }, intervalMs);
    return { stop: () => clearInterval(timer) };
  }

  // ── Follow ──────────────────────────────────────────────

  /** フォロー中のライブ一覧をキャッシュ付きで取得（カーソル不要） */
  public async fetchFollowItems(
    opts?: AxiosRequestConfig
  ): Promise<FollowItem[]> {
    if (this.followCache) return this.followCache;
    const resp = await this.withRetry(() =>
      this.api.catalogFollowFull({}, undefined, opts)
    );
    const list = (resp.list ?? []).map(this.toFollowItem);
    this.followCache = list;
    return list;
  }

  /** フォローキャッシュクリア */
  public invalidateFollowCache(): void {
    this.followCache = null;
  }

  /** 複数ライブに対して一括フォロー／アンフォロー */
  public async batchFollow(
    liveIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<string[]> {
    const results = await Promise.all(
      liveIds.map((id) =>
        this.withRetry(() =>
          this.api.catalogFollow({ live_id: id }, undefined, opts)
        )
          .then(() => id)
          .catch(() => null)
      )
    );
    return results.filter((id): id is string => id !== null);
  }

  // ── Lives ──────────────────────────────────────────────

  /** 指定 tab_id のライブ一覧をページング取得 */
  public async fetchLivesByTab(
    tabId: number,
    maxPages = 5,
    opts?: AxiosRequestConfig
  ): Promise<CatalogLive[]> {
    const result: CatalogLive[] = [];
    let cursor: string | null | undefined = undefined;

    for (let i = 0; i < maxPages; i++) {
      const resp = await this.withRetry(() =>
        this.api.catalogLivesFull({ tab_id: tabId, cursor }, undefined, opts)
      );
      if (!resp.lives || resp.lives.length === 0) break;
      result.push(...resp.lives.map(this.toCatalogLive));
      cursor = resp.next_cursor ?? null;
      if (!cursor) break;
    }
    return result;
  }

  /** 複数 tab_id のライブをまとめて取得 */
  public async fetchLivesForTabs(
    tabIds: number[],
    opts?: AxiosRequestConfig
  ): Promise<Record<number, CatalogLive[]>> {
    const entries = await Promise.all(
      tabIds.map((id) =>
        this.fetchLivesByTab(id, 3, opts)
          .then((l) => [id, l] as const)
          .catch(() => [id, []] as const)
      )
    );
    return Object.fromEntries(entries);
  }

  /** ライブ一覧をポーリングで監視 */
  public watchLives(
    tabId: number,
    intervalMs: number,
    onChange: (lives: CatalogLive[]) => void
  ): { stop: () => void } {
    let prev: CatalogLive[] = [];
    const timer = setInterval(async () => {
      const current = await this.fetchLivesByTab(tabId);
      if (!this.arraysEqual(prev, current)) {
        prev = current;
        onChange(current);
      }
    }, intervalMs);
    return { stop: () => clearInterval(timer) };
  }

  // ── Tabs ───────────────────────────────────────────────

  /** タブ一覧をキャッシュ付きで取得 */
  public async fetchTabs(opts?: AxiosRequestConfig): Promise<Tab[]> {
    if (this.tabsCache) return this.tabsCache;
    const resp = await this.withRetry(() =>
      this.api.catalogTabsFull({}, undefined, opts)
    );
    const list = (resp.tabs ?? []).map(this.toTab);
    this.tabsCache = list;
    return list;
  }

  /** タブキャッシュクリア */
  public invalidateTabs(): void {
    this.tabsCache = null;
  }

  // ── 変換ユーティリティ ─────────────────────────────────

  private toBanner(raw: any): Banner {
    return {
      adContentUrl: raw.ad_content_url,
      imageUrl: raw.banner_image_url,
      description: raw.description,
      linkUrl: raw.link_url,
      subtitle: raw.subtitle,
      title: raw.title,
    };
  }

  private toFollowItem(raw: any): FollowItem {
    return {
      liveId: raw.live_id ?? "",
      title: raw.title,
      ownerName: raw.owner?.name,
      thumbnailUrl: raw.image_url,
      startedAt: raw.started_at,
    };
  }

  private toCatalogLive(raw: any): CatalogLive {
    return {
      liveId: raw.live_id ?? "",
      title: raw.title,
      ownerName: raw.owner?.name,
      thumbnailUrl: raw.image_url,
      isLive: raw.is_live === true,
    };
  }

  private toTab(raw: any): Tab {
    return {
      tabId: raw.tab_id ?? "",
      name: raw.tab_name ?? "",
      pageId: raw.tab_page_id ?? "",
    };
  }
}
