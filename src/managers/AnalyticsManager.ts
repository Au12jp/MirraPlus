import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * analytics 関連 API をまとめたマネージャー（2 件）
 */
export class AnalyticsManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### POST /analyticsLog
   * *Content-Type**: `application/json`
   * 
   * @param body - { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[] リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AnalyticsLogStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.analyticsLog({ action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[]);
   * console.log(res);
   * ```
   */
  async analyticsLog(
    body: { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[],
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.analyticsLog(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /analyticsLog (full response)
   * *Content-Type**: `application/json`
   * 
   * @param body - { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[] リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AnalyticsLogResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.analyticsLogFull({ action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[]);
   * console.log(res);
   * ```
   */
  async analyticsLogFull(
    body: { action_type?: string; target_id?: string; payload?: { target_detail?: { event_type?: string; event_id?: string; }; }; }[],
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.analyticsLogFull(body, extraHeaders, axiosOpts);
  }
}