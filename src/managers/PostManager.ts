import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * post 関連 API をまとめたマネージャー（2 件）
 */
export class PostManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### POST /notificationPush_settings_v3
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PostNotificationPush_settings_v3Status> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.postNotificationPush_settings_v3({ is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; });
   * console.log(res);
   * ```
   */
  async postNotificationPush_settings_v3(
    body: { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.postNotificationPush_settings_v3(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /notificationPush_settings_v3 (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PostNotificationPush_settings_v3Response>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.postNotificationPush_settings_v3Full({ is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; });
   * console.log(res);
   * ```
   */
  async postNotificationPush_settings_v3Full(
    body: { is_enabled_campaigns?: string; is_enabled_chats?: string; is_enabled_lives?: string; is_enabled_news?: string; is_enabled_present_boxes?: string; is_enabled_yours?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_enabled_campaigns?: number | undefined; is_enabled_chats?: number | undefined; is_enabled_lives?: number | undefined; is_enabled_news?: number | undefined; is_enabled_present_boxes?: number | undefined; is_enabled_yours?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.postNotificationPush_settings_v3Full(body, extraHeaders, axiosOpts);
  }
}