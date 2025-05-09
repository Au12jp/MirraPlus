import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * page 関連 API をまとめたマネージャー（2 件）
 */
export class PageManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /pageLp
   * 
   * @param query - { path?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PageLpStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.pageLp({ path?: string | undefined });
   * console.log(res);
   * ```
   */
  async pageLp(
    query?: { path?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<never> {
    return this.api.pageLp(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /pageLp (full response)
   * 
   * @param query - { path?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<PageLpResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.pageLpFull({ path?: string | undefined });
   * console.log(res);
   * ```
   */
  async pageLpFull(
    query?: { path?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{}> {
    return this.api.pageLpFull(query, extraHeaders, axiosOpts);
  }
}