/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
// import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from "../mirrativApi";

/** 共通 API ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
}

/** ページネーション付きグループユーザー情報 */
export interface PaginatedGroupUsers {
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
  users: Array<{
    userId: string;
    name?: string;
    profileImageUrl?: string;
  }>;
}

/** バッチ処理の結果 */
export interface BatchResult {
  succeeded: string[];
  failed: string[];
}

/** 内部用：リトライヘルパー */
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

/**
 * group 関連 API をまとめたマネージャー
 */
export class GroupManager {
  constructor(private api: MirrativApi) {}

  /**
   * 単一ページのグループメンバーを取得（ページネーション付き）
   */
  public async fetchGroupUsersPage(
    groupId: number,
    page = 1,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedGroupUsers> {
    const resp = await withRetry(() =>
      this.api.groupUsersFull({ group_id: groupId, page }, undefined, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1) {
      throw new Error(status?.error || "Failed to fetch group users");
    }
    return {
      currentPage: page,
      nextPage: resp.next_page ? page + 1 : null,
      previousPage: resp.previous_page ? page - 1 : null,
      users: (resp.users ?? []).map((u) => ({
        userId: String(u.user_id),
        name: u.name,
        profileImageUrl: u.profile_image_url,
      })),
    };
  }

  /**
   * グループの全メンバーを取得（全ページを自動でフェッチ）
   */
  public async fetchAllGroupUsers(
    groupId: number,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedGroupUsers["users"]> {
    const all: PaginatedGroupUsers["users"] = [];
    let page = 1;
    while (true) {
      const { users, nextPage } = await this.fetchGroupUsersPage(
        groupId,
        page,
        opts
      );
      all.push(...users);
      if (!nextPage) break;
      page = nextPage;
    }
    return all;
  }

  /**
   * グループへのユーザー招待をバッチで実行
   * — userIds を chunkSize ごとに分割して順次投げる
   */
  public async batchInviteUsers(
    groupId: number,
    userIds: string[],
    chunkSize = 50,
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const chunks: string[][] = [];
    for (let i = 0; i < userIds.length; i += chunkSize) {
      chunks.push(userIds.slice(i, i + chunkSize));
    }
    const results = await Promise.all(
      chunks.map((chunk) =>
        withRetry(() =>
          this.api.groupInvite_usersFull(
            { user_ids: chunk.join(",") },
            undefined,
            opts
          )
        )
          .then((res) => {
            const ok = res.status?.ok === 1;
            return chunk.map((id) => ({ id, ok }));
          })
          .catch(() => chunk.map((id) => ({ id, ok: false })))
      )
    );
    const flat = results.flat();
    return {
      succeeded: flat.filter((r) => r.ok).map((r) => r.id),
      failed: flat.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  /**
   * グループ設定を更新し、新しい状態を返却
   */
  public async editGroupAndFetch(
    params: Record<string, string>,
    opts?: AxiosRequestConfig
  ): Promise<{
    id: string;
    name: string;
    imageUrls: string[];
    memberCount: number;
  }> {
    const res = await withRetry(() =>
      this.api.groupEditFull(params, undefined, opts)
    );
    const status = res.status as ApiStatus | undefined;
    if (status?.ok !== 1 || !res.group) {
      throw new Error(status?.error || "Failed to edit group");
    }
    return {
      id: String(res.group.id),
      name: res.group.name || "",
      imageUrls: res.group.image_urls ?? [],
      memberCount: Number(res.group.user_num ?? 0),
    };
  }

  /**
   * 複数のグループから一括脱退
   */
  public async leaveMultipleGroups(
    groupIds: number[],
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      groupIds.map((id) =>
        withRetry(() =>
          this.api.groupLeaveFull({ group_id: String(id) }, undefined, opts)
        )
          .then((r) => ({ id: String(id), ok: r.status?.ok === 1 }))
          .catch(() => ({ id: String(id), ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  /**
   * 現在のメンバーリストと `desiredUserIds` を比較し、差分だけ招待・脱退を行う
   */
  public async syncGroupMembers(
    groupId: number,
    desiredUserIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<{
    invited: string[];
    removed: string[];
  }> {
    // 1) 現在のメンバー取得
    const current = await this.fetchAllGroupUsers(groupId, opts);
    const currentIds = new Set(current.map((u) => u.userId));

    // 2) 招待すべき & 削除すべきを算出
    const toInvite = desiredUserIds.filter((id) => !currentIds.has(id));
    const toRemove = Array.from(currentIds).filter(
      (id) => !desiredUserIds.includes(id)
    );

    // 3) 招待と脱退を並行実行
    const [inviteRes, removeRes] = await Promise.all([
      this.batchInviteUsers(groupId, toInvite, 50, opts),
      this.leaveMultipleGroups(
        toRemove.map((id) => Number(id)),
        opts
      ),
    ]);

    return {
      invited: inviteRes.succeeded,
      removed: removeRes.succeeded,
    };
  }
}
