import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * event 関連 API をまとめたマネージャー（2 件）
 */
export class EventManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /event/notice
   * 
   * @param query - { type?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<EventNoticeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.eventNotice({ type?: number | undefined });
   * console.log(res);
   * ```
   */
  async eventNotice(
    query?: { type?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.eventNotice(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /event/notice (full response)
   * 
   * @param query - { type?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<EventNoticeResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.eventNoticeFull({ type?: number | undefined });
   * console.log(res);
   * ```
   */
  async eventNoticeFull(
    query?: { type?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ latest_gacha_started_at?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; display_timing?: { non_display?: number | undefined; next?: number | undefined; live_start?: number | undefined; } | undefined; banners?: { icon_url?: string | undefined; url?: string | undefined; button_text?: string | undefined; type?: number | undefined; title?: string | undefined; description?: string | undefined; is_focus?: boolean | undefined; }[] | undefined; }> {
    return this.api.eventNoticeFull(query, extraHeaders, axiosOpts);
  }
}