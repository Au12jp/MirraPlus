/* eslint-disable no-constant-condition */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 共通ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
}

/** バッチ実行結果 */
interface BatchResult {
  succeeded: string[];
  failed: string[];
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

export class ModeratorManager {
  constructor(private api: MirrativApi) {}

  // --- 既存の単純メソッド は省略 ---

  /**
   * 指定ライブの現行モデレーター一覧を取得
   */
  public async fetchLiveModerators(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<string[]> {
    const moderators: string[] = [];
    let page = 1;
    while (true) {
      const res = await withRetry(() =>
        this.api.liveOnline_usersFull(
          { live_id: liveId, page },
          undefined,
          opts
        )
      );
      const st = res.status as ApiStatus | undefined;
      if (st?.ok !== 1) {
        throw new Error(st?.error || "Failed to fetch online users");
      }
      const users = res.users ?? [];
      // is_moderator===1 の user_id を収集
      for (const u of users) {
        if (u.is_moderator === 1 && u.user_id) {
          moderators.push(String(u.user_id));
        }
      }
      // 次ページがなければ終了
      if (!res.next_page) break;
      page = Number((res.next_page as any).page_number) || page + 1;
    }
    return moderators;
  }

  /**
   * 複数ユーザーを一括でモデレーターに追加（並列／リトライ付き）
   */
  public async batchAddModerators(
    liveId: string,
    userIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      userIds.map((id) =>
        withRetry(() =>
          this.api.moderatorAdd(
            { live_id: liveId, user_id: id },
            undefined,
            opts
          )
        )
          .then((r) => ({ id, ok: r.ok === 1 }))
          .catch(() => ({ id, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  /**
   * 複数ユーザーのモデレーター権限を一括削除（並列／リトライ付き）
   */
  public async batchRemoveModerators(
    liveId: string,
    userIds: string[],
    opts?: AxiosRequestConfig
  ): Promise<BatchResult> {
    const results = await Promise.all(
      userIds.map((id) =>
        withRetry(() =>
          this.api.moderatorDelete(
            { live_id: liveId, user_id: id },
            undefined,
            opts
          )
        )
          .then((r) => ({ id, ok: r.ok === 1 }))
          .catch(() => ({ id, ok: false }))
      )
    );
    return {
      succeeded: results.filter((r) => r.ok).map((r) => r.id),
      failed: results.filter((r) => !r.ok).map((r) => r.id),
    };
  }

  /**
   * 「現在のモデレーター一覧」を「望ましい一覧」に同期（不足は追加、過剰は削除）
   */
  public async syncModerators(
    liveId: string,
    desired: string[],
    opts?: AxiosRequestConfig
  ): Promise<{ added: BatchResult; removed: BatchResult }> {
    // 1) 現行取得
    const current = await this.fetchLiveModerators(liveId, opts);

    // 2) 差分計算
    const toAdd = desired.filter((id) => !current.includes(id));
    const toRemove = current.filter((id) => !desired.includes(id));

    // 3) バッチ実行
    const [added, removed] = await Promise.all([
      this.batchAddModerators(liveId, toAdd, opts),
      this.batchRemoveModerators(liveId, toRemove, opts),
    ]);

    return { added, removed };
  }
}
