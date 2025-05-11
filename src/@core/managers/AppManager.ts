import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * app 関連 API をまとめたマネージャー（22 件）
 */
export class AppManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### POST /appAdd_my_app
   * *Content-Type**: `application/json`
   * 
   * @param body - { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAdd_my_appStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appAdd_my_app({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  async appAdd_my_app(
    body: { app_ids?: string[]; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appAdd_my_app(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /appAdd_my_app (full response)
   * *Content-Type**: `application/json`
   * 
   * @param body - { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAdd_my_appResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appAdd_my_appFull({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  async appAdd_my_appFull(
    body: { app_ids?: string[]; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; my_app_num?: number | undefined; }> {
    return this.api.appAdd_my_appFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appApp_user_detail
   * 
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppApp_user_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appApp_user_detail({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async appApp_user_detail(
    query?: { app_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appApp_user_detail(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appApp_user_detail (full response)
   * 
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppApp_user_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appApp_user_detailFull({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async appApp_user_detailFull(
    query?: { app_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; url?: string | undefined; name?: string | undefined; user_id?: string | undefined; is_published_user_id?: number | undefined; is_published_url?: number | undefined; message?: string | undefined; }> {
    return this.api.appApp_user_detailFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appAppeal_banners
   * 
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAppeal_bannersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appAppeal_banners({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async appAppeal_banners(
    query?: { app_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.appAppeal_banners(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appAppeal_banners (full response)
   * 
   * @param query - { app_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppAppeal_bannersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appAppeal_bannersFull({ app_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async appAppeal_bannersFull(
    query?: { app_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ banners?: Record<string, unknown>[] | undefined; icon_url?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; title?: string | undefined; }> {
    return this.api.appAppeal_bannersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /appDelete_app_user_detail
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_app_user_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appDelete_app_user_detail({ app_id?: string; });
   * console.log(res);
   * ```
   */
  async appDelete_app_user_detail(
    body: { app_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appDelete_app_user_detail(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /appDelete_app_user_detail (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_app_user_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appDelete_app_user_detailFull({ app_id?: string; });
   * console.log(res);
   * ```
   */
  async appDelete_app_user_detailFull(
    body: { app_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.appDelete_app_user_detailFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /appDelete_my_app
   * *Content-Type**: `application/json`
   * 
   * @param body - { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_my_appStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appDelete_my_app({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  async appDelete_my_app(
    body: { app_ids?: string[]; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appDelete_my_app(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /appDelete_my_app (full response)
   * *Content-Type**: `application/json`
   * 
   * @param body - { app_ids?: string[]; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppDelete_my_appResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appDelete_my_appFull({ app_ids?: string[]; });
   * console.log(res);
   * ```
   */
  async appDelete_my_appFull(
    body: { app_ids?: string[]; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; my_app_num?: number | undefined; }> {
    return this.api.appDelete_my_appFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appMy_app
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppMy_appStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appMy_app({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async appMy_app(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appMy_app(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appMy_app (full response)
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppMy_appResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appMy_appFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async appMy_appFull(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_page?: string | undefined; apps?: { app_user_detail?: { name?: string | undefined; url?: string | undefined; user_id?: string | undefined; is_published_user_id?: number | undefined; message?: string | undefined; is_published_url?: number | undefined; } | undefined; is_my_app?: number | undefined; store_url?: string | undefined; icon_url?: string | undefined; is_holding_campaign?: number | undefined; is_app_user_id_hidden?: number | undefined; app_id?: string | undefined; request_app_user_id_registration?: boolean | undefined; is_category?: number | undefined; short_title?: string | undefined; id?: number | undefined; title?: string | undefined; push_enabled?: string | undefined; app_user_id_label?: string | undefined; }[] | undefined; }> {
    return this.api.appMy_appFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appOnlive_apps
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppOnlive_appsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appOnlive_apps({});
   * console.log(res);
   * ```
   */
  async appOnlive_apps(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appOnlive_apps(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appOnlive_apps (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppOnlive_appsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appOnlive_appsFull({});
   * console.log(res);
   * ```
   */
  async appOnlive_appsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; apps?: { icon_url?: string | undefined; store_url?: string | undefined; app_id?: string | undefined; is_app_user_id_hidden?: number | undefined; is_holding_campaign?: number | undefined; short_title?: string | undefined; is_category?: number | undefined; title?: string | undefined; id?: string | undefined; app_user_id_label?: string | undefined; }[] | undefined; }> {
    return this.api.appOnlive_appsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /appPost_app_user_detail
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_id?: string; confirmed?: string; type?: string; value?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppPost_app_user_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.appPost_app_user_detail({ app_id?: string; confirmed?: string; type?: string; value?: string; });
   * console.log(res);
   * ```
   */
  async appPost_app_user_detail(
    body: { app_id?: string; confirmed?: string; type?: string; value?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appPost_app_user_detail(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /appPost_app_user_detail (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_id?: string; confirmed?: string; type?: string; value?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppPost_app_user_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appPost_app_user_detailFull({ app_id?: string; confirmed?: string; type?: string; value?: string; });
   * console.log(res);
   * ```
   */
  async appPost_app_user_detailFull(
    body: { app_id?: string; confirmed?: string; type?: string; value?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; name?: string | undefined; is_published_url?: number | undefined; message?: string | undefined; require_confirmation?: number | undefined; url?: string | undefined; user_id?: string | undefined; is_published_user_id?: number | undefined; }> {
    return this.api.appPost_app_user_detailFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appRecommend_apps
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppRecommend_appsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appRecommend_apps({});
   * console.log(res);
   * ```
   */
  async appRecommend_apps(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.appRecommend_apps(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appRecommend_apps (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppRecommend_appsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appRecommend_appsFull({});
   * console.log(res);
   * ```
   */
  async appRecommend_appsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ appeal_banner?: Record<string, unknown> | null | undefined; apps?: { app_id?: string | undefined; app_user_detail?: { is_published_url?: number | undefined; is_published_user_id?: number | undefined; message?: string | undefined; name?: string | undefined; url?: string | undefined; user_id?: string | undefined; } | undefined; app_user_id_label?: string | undefined; icon_url?: string | undefined; id?: number | undefined; is_app_user_id_hidden?: number | undefined; is_category?: number | undefined; is_holding_campaign?: number | undefined; is_my_app?: number | undefined; request_app_user_id_registration?: boolean | undefined; short_title?: string | undefined; store_url?: string | undefined; title?: string | undefined; }[] | undefined; is_skip_enabled?: boolean | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.appRecommend_appsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appSearch
   * 
   * @param query - { recommend_by?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appSearch({ recommend_by?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async appSearch(
    query?: { recommend_by?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.appSearch(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appSearch (full response)
   * 
   * @param query - { recommend_by?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appSearchFull({ recommend_by?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async appSearchFull(
    query?: { recommend_by?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ apps?: { app_id?: string | undefined; app_user_detail?: { is_published_url?: number | undefined; is_published_user_id?: number | undefined; message?: string | undefined; name?: string | undefined; url?: string | undefined; user_id?: string | undefined; } | undefined; app_user_id_label?: string | undefined; icon_url?: string | undefined; id?: number | undefined; is_app_user_id_hidden?: number | undefined; is_category?: number | undefined; is_holding_campaign?: number | undefined; is_my_app?: number | undefined; request_app_user_id_registration?: boolean | undefined; short_title?: string | undefined; store_url?: string | undefined; title?: string | undefined; }[] | undefined; current_page?: number | undefined; next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.appSearchFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appUser_apps
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppUser_appsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appUser_apps({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async appUser_apps(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.appUser_apps(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /appUser_apps (full response)
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<AppUser_appsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.appUser_appsFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async appUser_appsFull(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; request_user_id?: string | undefined; apps?: { app_user_detail?: { name?: string | undefined; url?: string | undefined; user_id?: string | undefined; is_published_user_id?: number | undefined; message?: string | undefined; is_published_url?: number | undefined; } | undefined; is_my_app?: number | undefined; store_url?: string | undefined; icon_url?: string | undefined; is_holding_campaign?: number | undefined; is_app_user_id_hidden?: number | undefined; app_id?: string | undefined; request_app_user_id_registration?: boolean | undefined; is_category?: number | undefined; short_title?: string | undefined; id?: number | undefined; title?: string | undefined; push_enabled?: string | undefined; app_user_id_label?: string | undefined; }[] | undefined; next_cursor?: string | undefined; current_cursor?: string | undefined; }> {
    return this.api.appUser_appsFull(query, extraHeaders, axiosOpts);
  }
}