import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * get 関連 API をまとめたマネージャー（2 件）
 */
export class GetManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /notificationPush_settings_v3
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GetNotificationPush_settings_v3Status> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.getNotificationPush_settings_v3({});
   * console.log(res);
   * ```
   */
  async getNotificationPush_settings_v3(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.getNotificationPush_settings_v3(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notificationPush_settings_v3 (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GetNotificationPush_settings_v3Response>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.getNotificationPush_settings_v3Full({});
   * console.log(res);
   * ```
   */
  async getNotificationPush_settings_v3Full(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_enabled_campaigns?: number | undefined; is_enabled_chats?: number | undefined; is_enabled_lives?: number | undefined; is_enabled_news?: number | undefined; is_enabled_present_boxes?: number | undefined; is_enabled_yours?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.getNotificationPush_settings_v3Full(query, extraHeaders, axiosOpts);
  }
}