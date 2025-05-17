/* eslint-disable no-constant-condition */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** コラボユーザー */
export interface CollabUser {
  userId: string;
  userName: string;
  avatar?: string;
}

/** バッチ結果 */
export interface BatchResult {
  succeeded: string[];
  failed: string[];
}

export class CollabManager {
  private collabUsersCache = new Map<
    string,
    { ts: number; users: CollabUser[] }
  >();
  private invitableCache = new Map<
    string,
    { ts: number; users: CollabUser[]; nextPage?: number }
  >();

  constructor(private api: MirrativApi) {}

  /** 最大3回リトライ＋簡易バックオフ */
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
        await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
      }
    }
    throw lastErr;
  }

  // ── コラボ中ユーザー取得（キャッシュ付き） ──────────────────────────

  /** キャッシュ有効時間: 5秒 */
  public async fetchCollaborators(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<CollabUser[]> {
    const key = liveId;
    const cached = this.collabUsersCache.get(key);
    if (cached && Date.now() - cached.ts < 5000) {
      return cached.users;
    }

    const resp = await this.withRetry(() =>
      this.api.collabCollaborating_usersFull(
        { live_id: liveId },
        undefined,
        opts
      )
    );

    const users: CollabUser[] = (resp.users ?? []).map((u: any) => ({
      userId: String(u.user_id),
      userName: String(u.user_name),
      avatar: u.avatar_url,
    }));

    this.collabUsersCache.set(key, { ts: Date.now(), users });
    return users;
  }

  public clearCollaboratorsCache(liveId?: string): void {
    if (liveId) this.collabUsersCache.delete(liveId);
    else this.collabUsersCache.clear();
  }

  // ── 招待可能ユーザー全取得（ページング＋キャッシュ） ────────────────────

  /** すべてのページをフェッチしてマージ */
  public async fetchAllInvitable(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<CollabUser[]> {
    let page = 1;
    const all: CollabUser[] = [];

    while (true) {
      const key = `${liveId}:${page}`;
      const cached = this.invitableCache.get(key);
      let users: CollabUser[];
      let nextPage: number | undefined;

      if (cached && Date.now() - cached.ts < 5000) {
        users = cached.users;
        nextPage = cached.nextPage;
      } else {
        const resp = await this.withRetry(() =>
          this.api.collabInvitable_usersFull(
            { live_id: liveId, page },
            undefined,
            opts
          )
        );
        users = (resp.users ?? []).map((u: any) => ({
          userId: String(u.user_id),
          userName: String(u.user_name),
          avatar: u.avatar_url,
        }));
        nextPage =
          resp.paging?.current_page !== page || (resp.users?.length ?? 0) > 0
            ? page + 1
            : undefined;

        this.invitableCache.set(key, { ts: Date.now(), users, nextPage });
      }

      if (users.length === 0) break;
      all.push(...users);

      if (!nextPage) break;
      page = nextPage;
    }

    return all;
  }

  public clearInvitableCache(): void {
    this.invitableCache.clear();
  }

  // ── バッチ招待 ────────────────────────────────────────────────

  /**
   * 複数ユーザーをまとめて招待し、成功／失敗を返す
   */
  public async batchInvite(
    liveId: string,
    userIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      userIds.map((uid) =>
        this.withRetry(() =>
          this.api.collabInvite(
            { live_id: liveId, invite_user_id: uid },
            undefined,
            opts
          )
        )
          .then(() => ({ id: uid, ok: true }))
          .catch(() => ({ id: uid, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  // ── コラボ開始／終了 ──────────────────────────────────────────

  /** コラボ開始 */
  public async startCollab(
    params: Record<string, string>,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    await this.withRetry(() => this.api.collabStart(params, undefined, opts));
  }

  /** コラボ終了 */
  public async closeCollab(
    params: Record<string, string>,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    await this.withRetry(() => this.api.collabClose(params, undefined, opts));
    // 終了後はキャッシュクリア
    if (params.live_id) this.clearCollaboratorsCache(params.live_id);
  }

  // ── ピア送信バッチ ──────────────────────────────────────────

  public async batchSendToPeer(
    messages: Array<Record<string, string>>,
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      messages.map((body, idx) =>
        this.withRetry(() => this.api.collabSend_to_peer(body, undefined, opts))
          .then(() => ({ id: String(idx), ok: true }))
          .catch(() => ({ id: String(idx), ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }
}
