import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 単一のアバターパーツ */
export interface AvatarItem {
  id: number;
  name?: string;
  iconUrl?: string;
  rarity?: number;
}

/** 現在選択中のアバター */
export interface CurrentAvatar {
  background?: AvatarItem;
  bottoms?: AvatarItem;
}

/** カタログ配信されている全パーツ */
export interface AvatarParts {
  backgrounds: AvatarItem[];
  bodies: AvatarItem[];
}

/** クローゼット情報 */
export interface ClosetInfo {
  closetId: number;
  name?: string;
  updatedAt: number;
}

/** バッチ処理結果 */
export interface BatchResult {
  succeeded: number[];
  failed: number[];
}

export class ClosetManager {
  private currentAvatarCache = new Map<number, CurrentAvatar>();
  private partsCache: AvatarParts | null = null;
  private closetsCache: ClosetInfo[] | null = null;

  constructor(private api: MirrativApi) {}

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

  // ── 現在のアバター取得 ─────────────────────────────────

  public async fetchCurrentAvatar(
    userId: number,
    opts?: AxiosRequestConfig
  ): Promise<CurrentAvatar> {
    const cached = this.currentAvatarCache.get(userId);
    if (cached) return cached;

    const resp = await this.withRetry(() =>
      this.api.closetAvatarFull({ user_id: userId }, undefined, opts)
    );
    const a = resp.avatar ?? {};

    const mk = (raw: any): AvatarItem => ({
      id: raw.id ?? 0,
      name: raw.name,
      iconUrl: raw.icon_url,
      rarity: raw.rarity,
    });

    const current: CurrentAvatar = {
      background: a.background && mk(a.background),
      bottoms: a.bottoms && mk(a.bottoms),
    };

    this.currentAvatarCache.set(userId, current);
    return current;
  }

  public invalidateCurrentAvatar(userId?: number): void {
    if (userId != null) this.currentAvatarCache.delete(userId);
    else this.currentAvatarCache.clear();
  }

  // ── パーツカタログ取得 ─────────────────────────────────

  public async fetchAvatarParts(
    opts?: AxiosRequestConfig
  ): Promise<AvatarParts> {
    if (this.partsCache) return this.partsCache;

    const resp = await this.withRetry(() =>
      this.api.closetAvatar_partsFull({}, undefined, opts)
    );

    const mk = (raw: any): AvatarItem => ({
      id: raw.id ?? 0,
      name: raw.name,
      iconUrl: raw.icon_url,
      rarity: raw.rarity,
    });

    this.partsCache = {
      backgrounds: (resp.backgrounds ?? []).map(mk),
      bodies: (resp.bodies ?? []).map(mk),
    };

    return this.partsCache;
  }

  public invalidatePartsCache(): void {
    this.partsCache = null;
  }

  // ── クローゼット一覧取得 ─────────────────────────────────

  public async fetchClosets(opts?: AxiosRequestConfig): Promise<ClosetInfo[]> {
    if (this.closetsCache) return this.closetsCache;

    const resp = await this.withRetry(() =>
      this.api.closetClosetsFull({}, undefined, opts)
    );

    this.closetsCache = (resp.closets ?? []).map((c) => ({
      closetId: Number(c.closet_id ?? 0),
      name: String(c.name),
      updatedAt: Number(c.updated_at ?? 0),
    }));

    return this.closetsCache;
  }

  public invalidateClosetsCache(): void {
    this.closetsCache = null;
  }

  // ── 更新・バッチ ───────────────────────────────────────

  public async updateCurrentAvatar(
    userId: number,
    payload: Record<string, string>,
    opts?: AxiosRequestConfig
  ): Promise<CurrentAvatar> {
    await this.withRetry(() =>
      this.api.closetUpdate_closet_avatarFull(payload, undefined, opts)
    );
    this.invalidateCurrentAvatar(userId);
    return this.fetchCurrentAvatar(userId, opts);
  }

  public async batchUpdateClosetImages(
    updates: Array<{
      body: { i?: string; C?: string; k?: string; Tu?: string };
    }>,
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      updates.map((u) =>
        this.withRetry(() =>
          this.api.closetUpdate_closet_imagesFull(u.body, undefined, opts)
        )
          .then((r) => ({ id: Number(r.closet?.closet_id ?? -1), ok: true }))
          .catch(() => ({ id: -1, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok && r.id >= 0).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }
}
