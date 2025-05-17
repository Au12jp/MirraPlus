/* eslint-disable no-constant-condition */
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 通知設定 */
export interface PushSettings {
  is_enabled_campaigns: boolean;
  is_enabled_chats: boolean;
  is_enabled_lives: boolean;
  is_enabled_news: boolean;
  is_enabled_present_boxes: boolean;
  is_enabled_yours: boolean;
}

/** 共通ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
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

export class PostManager {
  constructor(private api: MirrativApi) {}

  /**
   * 現在のプッシュ通知設定を取得
   */
  private async fetchPushSettings(
    opts?: AxiosRequestConfig
  ): Promise<PushSettings> {
    const res = await withRetry(() =>
      this.api.postNotificationPush_settings_v3Full({}, undefined, opts)
    );
    const st = res.status as ApiStatus | undefined;
    if (st?.ok !== 1)
      throw new Error(st?.error || "Failed to fetch push settings");
    return {
      is_enabled_campaigns: Boolean(res.is_enabled_campaigns),
      is_enabled_chats: Boolean(res.is_enabled_chats),
      is_enabled_lives: Boolean(res.is_enabled_lives),
      is_enabled_news: Boolean(res.is_enabled_news),
      is_enabled_present_boxes: Boolean(res.is_enabled_present_boxes),
      is_enabled_yours: Boolean(res.is_enabled_yours),
    };
  }

  /**
   * 個別にプッシュ通知設定を更新
   */
  private async updatePushSettingsBody(
    body: Partial<Record<keyof PushSettings, "0" | "1">>,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    const res = await withRetry(() =>
      this.api.postNotificationPush_settings_v3(body, undefined, opts)
    );
    if (res.ok !== 1)
      throw new Error(res.error || "Failed to update push setting");
  }

  /**
   * 指定の設定キーをトグル（反転）する
   */
  public async togglePushSetting(
    key: keyof PushSettings,
    opts?: AxiosRequestConfig
  ): Promise<PushSettings> {
    const current = await this.fetchPushSettings(opts);
    const newValue = !current[key];
    await this.updatePushSettingsBody({ [key]: newValue ? "1" : "0" }, opts);
    return this.fetchPushSettings(opts);
  }

  /**
   * 目標設定に同期（変更が必要なキーのみ更新）
   */
  public async syncPushSettings(
    target: Partial<PushSettings>,
    opts?: AxiosRequestConfig
  ): Promise<{
    updated: Array<keyof PushSettings>;
    skipped: Array<keyof PushSettings>;
  }> {
    const current = await this.fetchPushSettings(opts);
    const toUpdate: Partial<Record<keyof PushSettings, "0" | "1">> = {};
    const updated: Array<keyof PushSettings> = [];
    const skipped: Array<keyof PushSettings> = [];

    for (const key of Object.keys(target) as Array<keyof PushSettings>) {
      if (current[key] !== target[key]) {
        toUpdate[key] = target[key] ? "1" : "0";
        updated.push(key);
      } else {
        skipped.push(key);
      }
    }

    if (updated.length > 0) {
      await this.updatePushSettingsBody(toUpdate, opts);
    }
    return { updated, skipped };
  }

  /**
   * 特定キーが所望の状態になるまでポーリング
   */
  public async waitForSetting(
    key: keyof PushSettings,
    desired: boolean,
    intervalMs = 2000,
    timeoutMs = 60000,
    opts?: AxiosRequestConfig
  ): Promise<void> {
    const start = Date.now();
    while (true) {
      const settings = await this.fetchPushSettings(opts);
      if (settings[key] === desired) return;
      if (Date.now() - start > timeoutMs) {
        throw new Error(`Timeout waiting for ${key} to become ${desired}`);
      }
      await new Promise((r) => setTimeout(r, intervalMs));
    }
  }

  /**
   * 現在オンになっている設定の数を返す
   */
  public async countEnabledSettings(
    opts?: AxiosRequestConfig
  ): Promise<number> {
    const settings = await this.fetchPushSettings(opts);
    return Object.values(settings).filter(Boolean).length;
  }
}
