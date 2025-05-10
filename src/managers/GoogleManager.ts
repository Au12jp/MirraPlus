import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * google 関連 API をまとめたマネージャー（4 件）
 */
export class GoogleManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### POST /googleConnect
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { id_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleConnectStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.googleConnect({ id_token?: string; });
   * console.log(res);
   * ```
   */
  async googleConnect(
    body: { id_token?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.googleConnect(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /googleConnect (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { id_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleConnectResponse & { mrid?: string }>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.googleConnectFull({ id_token?: string; });
   * console.log(res);
   * ```
   */
  async googleConnectFull(
    body: { id_token?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; } & { mrid?: string | undefined; }> {
    return this.api.googleConnectFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /googleDisconnect
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleDisconnectStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.googleDisconnect(Record<string, any>);
   * console.log(res);
   * ```
   */
  async googleDisconnect(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.googleDisconnect(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /googleDisconnect (full response)
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GoogleDisconnectResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.googleDisconnectFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  async googleDisconnectFull(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.googleDisconnectFull(body, extraHeaders, axiosOpts);
  }
}