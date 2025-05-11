import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * shooter 関連 API をまとめたマネージャー（2 件）
 */
export class ShooterManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /shooter/matching
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ShooterMatchingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.shooterMatching({});
   * console.log(res);
   * ```
   */
  async shooterMatching(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.shooterMatching(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /shooter/matching (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ShooterMatchingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.shooterMatchingFull({});
   * console.log(res);
   * ```
   */
  async shooterMatchingFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_matching_enabled?: boolean | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; streamer_icon_urls?: Record<string, unknown>[] | undefined; streamer_num_text?: string | undefined; viewers?: Record<string, unknown>[] | undefined; }> {
    return this.api.shooterMatchingFull(query, extraHeaders, axiosOpts);
  }
}