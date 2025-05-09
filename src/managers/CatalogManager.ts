import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * catalog 関連 API をまとめたマネージャー（10 件）
 */
export class CatalogManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /catalogBanners
   * 
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogBannersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogBanners({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async catalogBanners(
    query?: { tab_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.catalogBanners(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogBanners (full response)
   * 
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogBannersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogBannersFull({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async catalogBannersFull(
    query?: { tab_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ banners?: { ad_content_url?: string | undefined; banner_image_url?: string | undefined; description?: string | undefined; link_url?: string | undefined; subtitle?: string | undefined; title?: string | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.catalogBannersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogFollow
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogFollowStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogFollow({});
   * console.log(res);
   * ```
   */
  async catalogFollow(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.catalogFollow(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogFollow (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogFollowResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogFollowFull({});
   * console.log(res);
   * ```
   */
  async catalogFollowFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_cursor?: string | undefined; list?: { archive?: { app_icon_urls?: string[] | undefined; app_id?: string | undefined; archive_status?: number | undefined; avatar_body_image_url?: string | undefined; blur_image_url?: string | undefined; collab_user_profile_image_urls?: Record<string, unknown>[] | undefined; ended_at?: number | undefined; following_viewer_image_urls?: Record<string, unknown>[] | undefined; following_viewer_num?: number | undefined; has_recording?: boolean | undefined; image_url?: string | undefined; is_collab?: boolean | undefined; is_live?: boolean | undefined; is_nuu_welcome?: boolean | undefined; is_omotenashi?: boolean | undefined; is_private?: boolean | undefined; joined_live_thumbnail_image_url?: string | undefined; live_id?: string | undefined; orientation_v2?: number | undefined; owner?: { badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; is_new?: boolean | undefined; name?: string | undefined; profile_frame_image_url?: string | undefined; profile_image_url?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; user_id?: string | undefined; yell_level?: number | undefined; yell_rank?: number | undefined; } | undefined; preview?: Record<string, unknown> | null | undefined; private_invited_user_image_urls?: Record<string, unknown>[] | undefined; private_invited_user_num?: number | undefined; private_viewer_image_urls?: Record<string, unknown>[] | undefined; private_viewer_num?: number | undefined; recommend?: Record<string, unknown> | null | undefined; started_at?: number | undefined; thumbnail_frame?: { icon_url?: string | undefined; id?: number | undefined; left_thumbnail_image_url?: string | undefined; right_thumbnail_animation_url?: string | undefined; right_thumbnail_image_url?: string | undefined; } | undefined; title?: string | undefined; total_viewer_num?: number | undefined; user_app_status?: Record<string, unknown>[] | undefined; user_label_image_url?: string | undefined; } | undefined; log_id?: string | undefined; type?: string | undefined; }[] | undefined; next_cursor?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.catalogFollowFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogLives
   * 
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogLivesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogLives({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async catalogLives(
    query?: { tab_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.catalogLives(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogLives (full response)
   * 
   * @param query - { tab_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogLivesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogLivesFull({ tab_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async catalogLivesFull(
    query?: { tab_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_cursor?: string | undefined; lives?: { app_icon_urls?: string[] | undefined; app_id?: string | undefined; archive_status?: number | undefined; avatar_body_image_url?: string | undefined; blur_image_url?: string | undefined; collab_user_profile_image_urls?: Record<string, unknown>[] | undefined; ended_at?: number | undefined; following_viewer_image_urls?: Record<string, unknown>[] | undefined; following_viewer_num?: number | undefined; has_recording?: boolean | undefined; image_url?: string | undefined; is_collab?: boolean | undefined; is_following?: boolean | undefined; is_live?: boolean | undefined; is_lucky_coin_box_available?: boolean | undefined; is_nuu_welcome?: boolean | undefined; is_omotenashi?: boolean | undefined; is_private?: boolean | undefined; joined_live_thumbnail_image_url?: string | undefined; live_id?: string | undefined; live_tags?: Record<string, unknown>[] | undefined; log_id?: string | undefined; orientation_v2?: number | undefined; owner?: { badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; is_new?: boolean | undefined; name?: string | undefined; profile_frame_image_url?: string | undefined; profile_image_url?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; user_id?: string | undefined; yell_level?: number | undefined; yell_rank?: number | undefined; } | undefined; preview?: { streaming_url_edge?: string | undefined; streaming_url_hls?: string | undefined; } | undefined; recommend?: Record<string, unknown> | null | undefined; relation?: string | undefined; started_at?: number | undefined; thumbnail_frame?: Record<string, unknown> | null | undefined; title?: string | undefined; total_viewer_num?: number | undefined; user_app_status?: Record<string, unknown>[] | undefined; user_label_image_url?: string | undefined; }[] | undefined; next_cursor?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.catalogLivesFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogMyapp_recommend_lives
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogMyapp_recommend_livesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogMyapp_recommend_lives({});
   * console.log(res);
   * ```
   */
  async catalogMyapp_recommend_lives(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.catalogMyapp_recommend_lives(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogMyapp_recommend_lives (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogMyapp_recommend_livesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogMyapp_recommend_livesFull({});
   * console.log(res);
   * ```
   */
  async catalogMyapp_recommend_livesFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_cursor?: string | undefined; lives?: Record<string, unknown>[] | undefined; next_cursor?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.catalogMyapp_recommend_livesFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogTabs
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogTabsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogTabs({});
   * console.log(res);
   * ```
   */
  async catalogTabs(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.catalogTabs(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /catalogTabs (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CatalogTabsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.catalogTabsFull({});
   * console.log(res);
   * ```
   */
  async catalogTabsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ default_tab_id?: string | undefined; is_visible_tab?: boolean | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; tabs?: { tab_id?: string | undefined; tab_name?: string | undefined; tab_page_id?: string | undefined; }[] | undefined; }> {
    return this.api.catalogTabsFull(query, extraHeaders, axiosOpts);
  }
}