import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * reward 関連 API をまとめたマネージャー（8 件）
 */
export class RewardManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /reward_adAvailable_reward_ad_ids
   * 
   * @param query - { mode?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adAvailable_reward_ad_idsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adAvailable_reward_ad_ids({ mode?: number | undefined });
   * console.log(res);
   * ```
   */
  async reward_adAvailable_reward_ad_ids(
    query?: { mode?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.reward_adAvailable_reward_ad_ids(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /reward_adAvailable_reward_ad_ids (full response)
   * 
   * @param query - { mode?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adAvailable_reward_ad_idsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adAvailable_reward_ad_idsFull({ mode?: number | undefined });
   * console.log(res);
   * ```
   */
  async reward_adAvailable_reward_ad_idsFull(
    query?: { mode?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ thumbnail_image_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; reward_ad_ids?: number[] | undefined; }> {
    return this.api.reward_adAvailable_reward_ad_idsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /reward_adCheck_available_device
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCheck_available_deviceStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adCheck_available_device({});
   * console.log(res);
   * ```
   */
  async reward_adCheck_available_device(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.reward_adCheck_available_device(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /reward_adCheck_available_device (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCheck_available_deviceResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adCheck_available_deviceFull({});
   * console.log(res);
   * ```
   */
  async reward_adCheck_available_deviceFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.reward_adCheck_available_deviceFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /reward_adComplete
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { reward_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCompleteStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.reward_adComplete({ reward_id?: string; });
   * console.log(res);
   * ```
   */
  async reward_adComplete(
    body: { reward_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.reward_adComplete(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /reward_adComplete (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { reward_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adCompleteResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adCompleteFull({ reward_id?: string; });
   * console.log(res);
   * ```
   */
  async reward_adCompleteFull(
    body: { reward_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ reward_id?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; title?: string | undefined; icon_image_url?: string | undefined; description?: string | undefined; }> {
    return this.api.reward_adCompleteFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /reward_adOfferwalls
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adOfferwallsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adOfferwalls({});
   * console.log(res);
   * ```
   */
  async reward_adOfferwalls(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.reward_adOfferwalls(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /reward_adOfferwalls (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Reward_adOfferwallsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.reward_adOfferwallsFull({});
   * console.log(res);
   * ```
   */
  async reward_adOfferwallsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ offerwalls?: { label?: string | undefined; short_label?: string | undefined; url?: string | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.reward_adOfferwallsFull(query, extraHeaders, axiosOpts);
  }
}