import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** プッシュ通知設定 */
export interface PushSettings {
  isEnabledCampaigns: boolean;
  isEnabledChats: boolean;
  isEnabledLives: boolean;
  isEnabledNews: boolean;
  isEnabledPresentBoxes: boolean;
  isEnabledYours: boolean;
}

/** API ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
  error_code?: number;
}

/** 全レスポンス型（MirrativApi が返すまま） */
type RawPushSettingsResponse = Awaited<
  ReturnType<MirrativApi["getNotificationPush_settings_v3Full"]>
>;

/** GET 系 API をまとめたマネージャー */
export class GetManager {
  constructor(private api: MirrativApi) {}

  /** 最大 3 回までリトライ＋指数バックオフ */
  private async withRetry<T>(
    fn: () => Promise<T>,
    retries = 3,
    baseDelayMs = 200
  ): Promise<T> {
    let lastErr: unknown;
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (e) {
        lastErr = e;
        await new Promise((r) => setTimeout(r, baseDelayMs * (i + 1)));
      }
    }
    throw lastErr;
  }

  /**
   * プッシュ通知設定を取得します
   * - 内部ではフルレスポンス API を呼び出し
   * - `ok !== 1` のときは例外を投げます
   */
  public async fetchPushSettings(
    opts?: AxiosRequestConfig
  ): Promise<PushSettings> {
    const raw = await this.withRetry(() =>
      this.api.getNotificationPush_settings_v3Full({}, undefined, opts)
    );

    const status: ApiStatus | undefined = raw.status;
    if (!status || status.ok !== 1) {
      throw new Error(status?.error ?? "Failed to fetch push settings");
    }

    return {
      isEnabledCampaigns: !!raw.is_enabled_campaigns,
      isEnabledChats: !!raw.is_enabled_chats,
      isEnabledLives: !!raw.is_enabled_lives,
      isEnabledNews: !!raw.is_enabled_news,
      isEnabledPresentBoxes: !!raw.is_enabled_present_boxes,
      isEnabledYours: !!raw.is_enabled_yours,
    };
  }

  /**
   * フルレスポンスをそのまま取得したいときに
   */
  public async fetchPushSettingsFull(
    opts?: AxiosRequestConfig
  ): Promise<RawPushSettingsResponse> {
    return this.withRetry(() =>
      this.api.getNotificationPush_settings_v3Full({}, undefined, opts)
    );
  }
}
