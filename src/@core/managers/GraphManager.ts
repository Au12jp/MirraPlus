/* eslint-disable no-constant-condition */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 共通 API ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
}

/** ページネーション付きユーザー情報 */
export interface PaginatedUsers {
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
  users: Array<{
    userId: string;
    name?: string;
    profileImageUrl?: string;
    isFollowing?: boolean;
    isFollower?: boolean;
    badges?: Array<{ imageUrl?: string; smallImageUrl?: string }>;
    description?: string;
    shareUrl?: string;
    seasonRating?: { className?: string; iconUrl?: string };
    onLive?: { liveId?: string; title?: string; duration?: number };
  }>;
}

/** バッチ結果 */
export interface BatchResult {
  succeeded: number[];
  failed: number[];
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

export class GraphManager {
  constructor(private api: MirrativApi) {}

  /**
   * ブロック中ユーザー一覧をページネーション付きで取得
   */
  public async fetchBlockedUsers(
    page = 1,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedUsers> {
    const resp = await withRetry(() =>
      this.api.graphBlocked_usersFull({ page }, undefined, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1)
      throw new Error(status?.error || "Failed to fetch blocked users");

    return {
      currentPage: page,
      nextPage: resp.next_page ? page + 1 : null,
      previousPage: resp.previous_page ? page - 1 : null,
      users: (resp.blocked_users ?? []).map((u) => ({
        userId: String(u.user_id),
        name: u.name,
        profileImageUrl: u.profile_image_url,
        isFollowing: u.is_following === 1,
        isFollower: u.is_follower === 1,
        badges: (u.badges ?? []).map((b) => ({
          imageUrl: b.image_url,
          smallImageUrl: b.small_image_url,
        })),
        description: u.description,
        shareUrl: u.share_url,
        seasonRating: u.season_rating && {
          className: u.season_rating.class_name,
          iconUrl: u.season_rating.icon_url,
        },
        onLive: u.onlive
          ? {
              liveId: String((u.onlive as any).live_id),
              title: String((u.onlive as any).title),
              duration: Number((u.onlive as any).duration),
            }
          : undefined,
      })),
    };
  }

  /**
   * フォロワー一覧をページネーション付きで取得
   */
  public async fetchFollowers(
    userId: number,
    page = 1,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedUsers> {
    const resp = await withRetry(() =>
      this.api.graphFollowersFull({ user_id: userId, page }, undefined, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1)
      throw new Error(status?.error || "Failed to fetch followers");

    return {
      currentPage: page,
      nextPage: resp.next_page ? page + 1 : null,
      previousPage: resp.previous_page ? page - 1 : null,
      users: (resp.followers ?? []).map((u) => ({
        userId: String(u.user_id),
        name: u.name,
        profileImageUrl: u.profile_image_url,
        isFollowing: u.is_following === 1,
        isFollower: u.is_follower === 1,
        badges: (u.badges ?? []).map((b) => ({
          imageUrl: b.image_url,
          smallImageUrl: b.small_image_url,
        })),
        description: u.description,
        shareUrl: u.share_url,
        seasonRating: u.season_rating && {
          className: u.season_rating.class_name,
          iconUrl: u.season_rating.icon_url,
        },
        onLive: u.onlive
          ? {
              liveId: String((u.onlive as any).live_id),
              title: String((u.onlive as any).title),
              duration: Number((u.onlive as any).duration),
            }
          : undefined,
      })),
    };
  }

  /**
   * フォロー中ユーザー一覧をページネーション付きで取得
   */
  public async fetchFollowings(
    userId: number,
    page = 1,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedUsers> {
    const resp = await withRetry(() =>
      this.api.graphFollowingsFull({ user_id: userId, page }, undefined, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1)
      throw new Error(status?.error || "Failed to fetch followings");

    return {
      currentPage: page,
      nextPage: resp.next_page ? page + 1 : null,
      previousPage: resp.previous_page ? page - 1 : null,
      users: (resp.followings ?? []).map((u) => ({
        userId: String(u.user_id),
        name: u.name,
        profileImageUrl: u.profile_image_url,
        isFollowing: u.is_following === 1,
        isFollower: u.is_follower === 1,
        badges: (u.badges ?? []).map((b) => ({
          imageUrl: b.image_url,
          smallImageUrl: b.small_image_url,
        })),
        description: u.description,
        shareUrl: u.share_url,
        seasonRating: u.season_rating && {
          className: u.season_rating.class_name,
          iconUrl: u.season_rating.icon_url,
        },
        onLive: u.onlive
          ? {
              liveId: String((u.onlive as any).live_id),
              title: String((u.onlive as any).title),
              duration: Number((u.onlive as any).duration),
            }
          : undefined,
      })),
    };
  }

  /**
   * オススメユーザー一覧を取得
   */
  public async fetchRecommendedUsers(
    page = 1,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedUsers> {
    const resp = await withRetry(() =>
      this.api.graphRecommend_usersFull({ page }, undefined, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1)
      throw new Error(status?.error || "Failed to fetch recommended users");

    return {
      currentPage: page,
      nextPage: resp.users && resp.users.length > 0 ? page + 1 : null,
      previousPage: page > 1 ? page - 1 : null,
      users: (resp.users ?? []).map((u) => ({
        userId: String(u.user_id),
        name: u.name,
        profileImageUrl: u.profile_image_url,
        isFollowing: u.is_following === 1,
        isFollower: u.is_follower === 1,
        badges: [],
        description: u.description,
        shareUrl: u.share_url,
        seasonRating: u.season_rating && {
          className: u.season_rating.class_name,
          iconUrl: u.season_rating.icon_url,
        },
        onLive: u.onlive
          ? {
              liveId: String((u.onlive as any).live_id),
              title: String((u.onlive as any).title),
              duration: Number((u.onlive as any).duration),
            }
          : undefined,
      })),
    };
  }

  /**
   * ユーザー検索（ページネーション＋リトライ＋整形）
   */
  public async searchUsers(
    query: string,
    page = 1,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedUsers> {
    const resp = await withRetry(() =>
      this.api.graphSearchFull({ page }, { "X-Search-Query": query }, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1) throw new Error(status?.error || "Search failed");

    return {
      currentPage: page,
      nextPage: resp.users && resp.users.length > 0 ? page + 1 : null,
      previousPage: page > 1 ? page - 1 : null,
      users: (resp.users ?? []).map((u) => ({
        userId: String(u.user_id),
        name: u.name,
        profileImageUrl: u.profile_image_url,
        isFollowing: u.is_following === 1,
        isFollower: u.is_follower === 1,
        badges: [],
        description: u.description,
        shareUrl: u.share_url,
        seasonRating: u.season_rating && {
          className: u.season_rating.class_name,
          iconUrl: u.season_rating.icon_url,
        },
        onLive: u.onlive
          ? {
              liveId: String((u.onlive as any).live_id),
              title: String((u.onlive as any).title),
              duration: Number((u.onlive as any).duration),
            }
          : undefined,
      })),
    };
  }

  /**
   * 複数ライブの視聴者を一括フォローするバッチ処理
   */
  public async batchFollowLiveWatchers(
    liveIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      liveIds.map((id) =>
        this.api
          .graphFollow_live_watched_usersFull({ live_id: id }, undefined, opts)
          .then((r) => ({ id: Number(id), ok: r.status?.ok === 1 }))
          .catch(() => ({ id: Number(id), ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  /**
   * フォロー＆フォロワーの相互ユーザーを返す（mutuals）
   */
  public async fetchMutualFollowers(
    userId: number,
    opts?: AxiosRequestConfig
  ): Promise<string[]> {
    // 全ページ取得してセット intersection
    const fetchAll = async (
      fetcher: (p: number) => Promise<PaginatedUsers>
    ) => {
      let page = 1;
      let all: string[] = [];
      while (true) {
        const { users, nextPage } = await fetcher(page);
        all = all.concat(users.map((u) => u.userId));
        if (!nextPage) break;
        page = nextPage;
      }
      return new Set(all);
    };

    const [followers, followings] = await Promise.all([
      fetchAll((p) => this.fetchFollowers(userId, p, opts)),
      fetchAll((p) => this.fetchFollowings(userId, p, opts)),
    ]);
    return Array.from(
      new Set([...followers].filter((id) => followings.has(id)))
    );
  }

  /**
   * 推奨ユーザーを条件付きで一括フォロー
   */
  public async batchFollowRecommended(
    minBadgeCount: number,
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    // 1ページのみ対象、バッジ数 >= minBadgeCount のユーザーをフォロー
    const recs = await this.fetchRecommendedUsers(1, opts);
    const toFollow = recs.users
      .filter((u) => (u.badges?.length ?? 0) >= minBadgeCount)
      .map((u) => u.userId);

    const results = await Promise.all(
      toFollow.map((id) =>
        this.api
          .graphFollow({ user_id: id }, undefined, opts)
          .then((r) => ({ id: Number(id), ok: r.ok === 1 }))
          .catch(() => ({ id: Number(id), ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }
}
