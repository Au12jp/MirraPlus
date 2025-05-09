import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * feature 関連 API をまとめたマネージャー（2 件）
 */
export class FeatureManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### POST /featureRegister_device_token
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { device_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<FeatureRegister_device_tokenStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.featureRegister_device_token({ device_token?: string; });
   * console.log(res);
   * ```
   */
  async featureRegister_device_token(
    body: { device_token?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.featureRegister_device_token(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /featureRegister_device_token (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { device_token?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<FeatureRegister_device_tokenResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.featureRegister_device_tokenFull({ device_token?: string; });
   * console.log(res);
   * ```
   */
  async featureRegister_device_tokenFull(
    body: { device_token?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.featureRegister_device_tokenFull(body, extraHeaders, axiosOpts);
  }
}