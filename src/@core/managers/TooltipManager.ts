import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * tooltip 関連 API をまとめたマネージャー（2 件）
 */
export class TooltipManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /tooltip/start_live_button
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<TooltipStart_live_buttonStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.tooltipStart_live_button({});
   * console.log(res);
   * ```
   */
  async tooltipStart_live_button(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.tooltipStart_live_button(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /tooltip/start_live_button (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<TooltipStart_live_buttonResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.tooltipStart_live_buttonFull({});
   * console.log(res);
   * ```
   */
  async tooltipStart_live_buttonFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ tooltip?: Record<string, unknown> | null | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.tooltipStart_live_buttonFull(query, extraHeaders, axiosOpts);
  }
}