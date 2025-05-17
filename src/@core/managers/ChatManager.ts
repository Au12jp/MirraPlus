/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** チャットスレッド情報 */
export interface ChatThread {
  threadId: string;
  title?: string;
  unreadCount: number;
  isVisible: boolean;
  lastPostedAt?: string;
}

/** チャットメッセージ */
export interface ChatMessage {
  messageId: string;
  threadId: string;
  userId?: string;
  text: string;
  createdAt: string;
  avatarUrl?: string;
  userName?: string;
}

/** バッチ処理結果 */
export interface BatchResult {
  succeeded: string[];
  failed: string[];
}

/**
 * chat 関連のあらゆるバッチ／キャッシュ／ポーリング機能を統合したマネージャークラス
 */
export class ChatManager {
  private threadCache = new Map<string, ChatThread>();
  private messagesCache = new Map<string, ChatMessage[]>();
  private lastMessageIdCache = new Map<string, string>();

  constructor(private api: MirrativApi) {}

  // ── 共通ユーティリティ ────────────────────────────

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

  // ── ジョイン／同意／サンキュー（一括） ──────────────────

  /** 複数ユーザーを一括で join */
  public async batchJoin(userIds: string[]): Promise<BatchResult> {
    const results = await Promise.all(
      userIds.map((id) =>
        this.withRetry(() => this.api.chatJoin({ user_id: id }))
          .then(() => ({ id, ok: true }))
          .catch(() => ({ id, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  /** チャット利用規約への同意を一括 */
  public async batchAgree(flags: string[]): Promise<BatchResult> {
    const results = await Promise.all(
      flags.map((flag) =>
        this.withRetry(() => this.api.chatAgree({ is_agreed: flag }))
          .then(() => ({ flag, ok: true }))
          .catch(() => ({ flag, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.flag),
      failed: results.filter((r) => !r.ok).map((r) => r.flag),
    };
  }

  /** 複数ユーザーにサンクスを一括送信 */
  public async batchPostThanks(
    entries: Array<{ live_id: string; user_id: string }>
  ): Promise<BatchResult> {
    const results = await Promise.all(
      entries.map(({ live_id, user_id }) =>
        this.withRetry(() => this.api.chatPost_thanks({ live_id, user_id }))
          .then(() => ({ key: `${live_id}:${user_id}`, ok: true }))
          .catch(() => ({ key: `${live_id}:${user_id}`, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.key),
      failed: results.filter((r) => !r.ok).map((r) => r.key),
    };
  }

  // ── スレッド一覧・詳細取得 ────────────────────────────

  /** 全ページのスレッド一覧を取得 */
  public async fetchAllThreads(
    maxPages = 5,
    opts?: AxiosRequestConfig
  ): Promise<ChatThread[]> {
    const all: ChatThread[] = [];
    for (let page = 1; page <= maxPages; page++) {
      const resp = await this.withRetry(() =>
        this.api.chatThreadsFull({ page }, undefined, opts)
      );
      if (!resp.threads || resp.threads.length === 0) break;
      all.push(...resp.threads.map(this.toChatThread));
    }
    return all;
  }

  /** スレッド詳細（メタ情報）をキャッシュ付きで取得 */
  public async fetchThread(
    threadId: string,
    opts?: AxiosRequestConfig
  ): Promise<ChatThread> {
    if (this.threadCache.has(threadId)) {
      return this.threadCache.get(threadId)!;
    }
    const resp = await this.withRetry(() =>
      this.api.chatThreadFull({ user_id: Number(threadId) }, undefined, opts)
    );
    const model = this.toChatThread({
      ...resp.thread,
      last_posted_at: resp.messages?.[0]?.created_at,
    });
    this.threadCache.set(threadId, model);
    return model;
  }

  /** 複数スレッド詳細を並列取得 */
  public async batchFetchThreads(
    threadIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<Record<string, ChatThread | null>> {
    const entries = await Promise.all(
      threadIds.map((id) =>
        this.fetchThread(id, opts)
          .then((t) => [id, t] as const)
          .catch(() => [id, null] as const)
      )
    );
    return Object.fromEntries(entries);
  }

  // ── メッセージ取得・送信・既読 ────────────────────────────

  /** スレッド内のすべてのメッセージを取得（キャッシュ付き） */
  public async fetchAllMessages(
    threadId: string,
    opts?: AxiosRequestConfig
  ): Promise<ChatMessage[]> {
    if (this.messagesCache.has(threadId)) {
      return this.messagesCache.get(threadId)!;
    }
    const resp = await this.withRetry(() =>
      this.api.chatThreadFull({ user_id: Number(threadId) }, undefined, opts)
    );
    const messages = (resp.messages ?? []).map(this.toChatMessage);
    this.messagesCache.set(threadId, messages);
    this.lastMessageIdCache.set(
      threadId,
      messages[messages.length - 1]?.messageId ?? ""
    );
    return messages;
  }

  /** 新着だけ取得してキャッシュ更新 */
  public async fetchNewMessages(
    threadId: string,
    opts?: AxiosRequestConfig
  ): Promise<ChatMessage[]> {
    const sinceId = this.lastMessageIdCache.get(threadId);
    // まずキャッシュ済みの全メッセージを取得
    const all = await this.fetchAllMessages(threadId, opts);

    // ① chatReadFull → chatThreadFull に変更
    const resp = await this.withRetry(() =>
      this.api.chatThreadFull(
        { user_id: Number(threadId) },
        /* extraHeaders */ undefined,
        opts
      )
    );

    // ② sinceId より後のものだけフィルタリング
    const msgs: ChatMessage[] = (resp.messages ?? []).map(this.toChatMessage);
    const newMsgs = sinceId
      ? msgs.filter((m) => Number(m.messageId) > Number(sinceId))
      : msgs;

    // キャッシュを更新
    const updated = [...all, ...newMsgs];
    this.messagesCache.set(threadId, updated);
    this.lastMessageIdCache.set(
      threadId,
      newMsgs.length ? newMsgs[newMsgs.length - 1].messageId : sinceId!
    );

    return newMsgs;
  }

  /** テキストを送信 */
  public async postText(
    threadId: string,
    text: string,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    await this.withRetry(() =>
      this.api.chatPost_text({ text, user_id: threadId }, undefined, opts)
    );
  }

  /** バッチ既読：複数スレッドで既読起票 */
  public async batchMarkRead(
    entries: Array<{ threadId: string; lastMessageId: string }>
  ): Promise<BatchResult> {
    const results = await Promise.all(
      entries.map(({ threadId, lastMessageId }) =>
        this.withRetry(() =>
          this.api.chatRead({
            last_message_id: lastMessageId,
            user_id: threadId,
          })
        )
          .then(() => ({ key: threadId, ok: true }))
          .catch(() => ({ key: threadId, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.key),
      failed: results.filter((r) => !r.ok).map((r) => r.key),
    };
  }

  // ── ポーリング ────────────────────────────────────────

  /**
   * 新着メッセージを定期ポーリングし、コールバックで通知
   */
  public startMessagePolling(
    threadId: string,
    intervalMs: number,
    onNew: (msgs: ChatMessage[]) => void
  ): { stop: () => void } {
    let lastId = this.lastMessageIdCache.get(threadId) ?? "";
    const timer = setInterval(async () => {
      const newMsgs = await this.fetchNewMessages(threadId);
      if (newMsgs.length) {
        lastId = newMsgs[newMsgs.length - 1].messageId;
        onNew(newMsgs);
      }
    }, intervalMs);
    return { stop: () => clearInterval(timer) };
  }

  /**
   * スレッド一覧を定期ポーリングし、変化時にコールバック
   */
  public startThreadsPolling(
    intervalMs: number,
    onChange: (threads: ChatThread[]) => void
  ): { stop: () => void } {
    let prev: ChatThread[] = [];
    const timer = setInterval(async () => {
      const current = await this.fetchAllThreads();
      if (!this.arraysEqual(prev, current)) {
        prev = current;
        onChange(current);
      }
    }, intervalMs);
    return { stop: () => clearInterval(timer) };
  }

  // ── 変換ユーティリティ ─────────────────────────────────

  private toChatThread(raw: any): ChatThread {
    return {
      threadId: raw.user_id?.toString() ?? "",
      title: raw.title,
      unreadCount: Number(raw.unread_num ?? 0),
      isVisible: raw.is_visible === 1,
      lastPostedAt: raw.last_posted_at,
    };
  }

  private toChatMessage(raw: any): ChatMessage {
    return {
      messageId: raw.id ?? "",
      threadId: raw.user_id?.toString() ?? "",
      userId: raw.user_id,
      text: raw.text?.body ?? "",
      createdAt: raw.created_at ?? "",
      avatarUrl: raw.text?.avatar_image_url,
      userName: raw.text?.user_name,
    };
  }
}
