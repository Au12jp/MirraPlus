import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * live 関連 API をまとめたマネージャー（72 件）
 */
export class LiveManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /live/appeal_links
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveAppeal_linksStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveAppeal_links({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveAppeal_links(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.liveAppeal_links(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/appeal_links (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveAppeal_linksResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveAppeal_linksFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveAppeal_linksFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ links?: Record<string, unknown>[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.liveAppeal_linksFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/campaign
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveCampaignStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveCampaign({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveCampaign(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.liveCampaign(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/campaign (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveCampaignResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveCampaignFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveCampaignFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ campaign?: Record<string, unknown> | null | undefined; completed_mission_counts?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.liveCampaignFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/get_streaming_url
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveGet_streaming_urlStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveGet_streaming_url({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveGet_streaming_url(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveGet_streaming_url(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/get_streaming_url (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveGet_streaming_urlResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveGet_streaming_urlFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveGet_streaming_urlFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveGet_streaming_urlFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/leave
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLeaveStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLeave({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveLeave(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLeave(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/leave (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLeaveResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLeaveFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveLeaveFull(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveLeaveFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLiveStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveLive(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLiveResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLiveFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveLiveFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; streaming_url_hls?: string | undefined; is_streaming_collab_enabled?: number | undefined; is_gift_supported?: number | undefined; streaming_url_llstream_video?: string | undefined; mirroring?: { reason?: string | undefined; enabled?: number | undefined; } | undefined; user_app_status?: Record<string, unknown>[] | undefined; live_id?: string | undefined; app?: { app_user_detail?: { name?: string | undefined; url?: string | undefined; user_id?: string | undefined; is_published_user_id?: number | undefined; message?: string | undefined; is_published_url?: number | undefined; } | undefined; is_my_app?: number | undefined; icon_url?: string | undefined; store_url?: string | undefined; app_id?: string | undefined; is_app_user_id_hidden?: number | undefined; is_holding_campaign?: number | undefined; short_title?: string | undefined; is_category?: number | undefined; title?: string | undefined; id?: number | undefined; app_user_id_label?: string | undefined; } | undefined; is_mirrorable?: number | undefined; app_title?: string | undefined; description?: string | undefined; total_viewer_num?: number | undefined; thumbnail_image_url?: string | undefined; is_archive?: number | undefined; is_singing_karaoke?: number | undefined; title?: string | undefined; tutorial_mission?: { enable_mission?: boolean | undefined; is_first_mission_cleared?: boolean | undefined; unreceived_mission_num?: number | undefined; } | undefined; max_online_viewer_num?: number | undefined; is_emomo_visible?: boolean | undefined; created_at?: number | undefined; is_live?: number | undefined; started_at?: number | undefined; preview_blur_image_url?: string | undefined; blur_image_url?: string | undefined; live_mos?: Record<string, unknown> | null | undefined; thumbnail_blur_image_url?: string | undefined; image_url_without_letterbox?: string | undefined; user_level?: Record<string, unknown> | undefined; is_connected_streaming_collab?: number | undefined; recommended_gifts?: { large_image_url?: string | undefined; is_paid_coin_only?: boolean | undefined; small_image_url?: string | undefined; title?: string | undefined; id?: string | undefined; coins?: string | undefined; }[] | undefined; nuu_welcome_live_game?: Record<string, unknown> | null | undefined; diamonds?: string | undefined; joined_live_thumbnail_image_url?: string | undefined; is_enabled_photo_booth?: number | undefined; template_comments?: Record<string, unknown>[] | undefined; is_enabled_avatar_closet?: number | undefined; broadcast_host?: string | undefined; tags?: Record<string, unknown>[] | undefined; live_user_key?: string | undefined; streaming_url_llstream_audio?: string | undefined; app_user_id_label?: string | undefined; bcsvr_key?: string | undefined; heartbeated_at?: number | undefined; is_private?: number | undefined; shares?: { twitter?: { maxlength?: number | undefined; card?: { site?: string | undefined; image_url?: string | undefined; title?: string | undefined; description?: string | undefined; } | undefined; text?: string | undefined; placeholder?: string | undefined; } | undefined; others?: { text?: string | undefined; } | undefined; title?: string | undefined; description?: string | undefined; } | undefined; collab_supported?: number | undefined; sticker_enabled?: number | undefined; collab_has_vacancy?: number | undefined; campaign_id?: string | undefined; stamp_num?: number | undefined; streaming_key?: string | undefined; linked_live?: Record<string, unknown> | null | undefined; collab_online_user_num?: number | undefined; remaining_paid_coins?: number | undefined; share_image_url?: string | undefined; live_game_playing?: Record<string, unknown> | null | undefined; broadcast_key?: string | undefined; gift_ranking_url?: string | undefined; collab_mos?: Record<string, unknown> | null | undefined; moderator_id?: string | undefined; remaining_coins?: number | undefined; live_request_comment_enabled?: number | undefined; archive_url_hls?: string | undefined; sticker_category_ids?: Record<string, unknown>[] | undefined; ended_at?: number | undefined; is_live_moderator?: number | undefined; online_user_num?: number | undefined; announcement_url?: string | undefined; anniversary_bot_comment?: string | undefined; is_emomo_wipe_enabled?: number | undefined; share_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_nuu_welcome?: boolean | undefined; orientation?: number | undefined; is_app_user_id_hidden?: number | undefined; app_id?: string | undefined; app_is_category?: number | undefined; timeline?: { app?: { is_my_app?: number | undefined; icon_url?: string | undefined; store_url?: string | undefined; app_id?: string | undefined; is_app_user_id_hidden?: number | undefined; is_holding_campaign?: number | undefined; short_title?: string | undefined; is_category?: number | undefined; title?: string | undefined; id?: number | undefined; app_user_id_label?: string | undefined; } | undefined; timestamp?: number | undefined; title?: string | undefined; }[] | undefined; app_icon_urls?: string[] | undefined; enable_clap?: number | undefined; remaining_free_coins?: number | undefined; is_paid_sticker_supported?: number | undefined; announcement_urls?: { player?: Record<string, unknown>[] | undefined; } | undefined; sticker_num?: number | undefined; app_short_title?: string | undefined; max_collab_user_num?: number | undefined; comment_num?: number | undefined; owner?: { share_url?: string | undefined; is_able_continuous_stream_holiday?: number | undefined; profile_image_url?: string | undefined; birthday_from?: number | undefined; is_birthday_editable?: number | undefined; is_visible_birthday?: boolean | undefined; badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; is_new?: number | undefined; catalog_label_image_url?: string | undefined; is_cheerleader?: number | undefined; birthday?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; twitter_screen_name?: string | undefined; birthday_to?: number | undefined; name?: string | undefined; is_birthday?: number | undefined; birthday_editable_date?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; is_continuous_streamer?: number | undefined; profile_frame_image_url?: string | undefined; is_blocking?: number | undefined; is_following?: number | undefined; user_id?: string | undefined; live_request_num?: string | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; recommend_sticker_ids?: Record<string, unknown>[] | undefined; broadcast_port?: number | undefined; is_omotenashi?: boolean | undefined; sticker_display_type?: number | undefined; archive_comment_enabled?: number | undefined; streaming_url_edge?: string | undefined; user_label_image_url?: string | undefined; app_num?: number | undefined; collab_enabled?: number | undefined; gift_appeal_popup_image?: Record<string, unknown> | null | undefined; image_url?: string | undefined; collab_invitation?: Record<string, unknown> | null | undefined; orientation_v2?: string | undefined; }> {
    return this.api.liveLiveFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_comment
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { comment?: string; live_id?: string; type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_comment({ comment?: string; live_id?: string; type?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_comment(
    body: { comment?: string; live_id?: string; type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_comment(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_comment (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { comment?: string; live_id?: string; type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_commentFull({ comment?: string; live_id?: string; type?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_commentFull(
    body: { comment?: string; live_id?: string; type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveLive_commentFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live_comments
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_comments({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveLive_comments(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_comments(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live_comments (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_commentsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_commentsFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveLive_commentsFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; comments?: { yell_level?: number | undefined; badge_image_url?: string | undefined; profile_image_url?: string | undefined; user_name?: string | undefined; is_continuous_streamer?: number | undefined; profile_frame_image_url?: string | undefined; created_at?: string | undefined; comment?: string | undefined; yell_rank?: number | undefined; is_moderator?: number | undefined; is_cheerleader?: number | undefined; is_nuu?: boolean | undefined; id?: string | undefined; user_id?: string | undefined; }[] | undefined; }> {
    return this.api.liveLive_commentsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_create
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_createStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_create(Record<string, any>);
   * console.log(res);
   * ```
   */
  async liveLive_create(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_create(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_create (full response)
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_createResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_createFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  async liveLive_createFull(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; streaming_url_hls?: string | undefined; is_gift_supported?: number | undefined; streaming_url_llstream_video?: string | undefined; stun_servers?: { transport?: Record<string, unknown> | null | undefined; port?: string | undefined; host?: string | undefined; }[] | undefined; streaming_upload_url3?: string | undefined; user_app_status?: Record<string, unknown>[] | undefined; live_id?: string | undefined; is_mirrorable?: number | undefined; description?: string | undefined; total_viewer_num?: number | undefined; thumbnail_image_url?: string | undefined; is_archive?: number | undefined; title?: string | undefined; games?: Record<string, unknown>[] | undefined; max_online_viewer_num?: number | undefined; created_at?: number | undefined; preview_blur_image_url?: string | undefined; blur_image_url?: string | undefined; started_at?: number | undefined; is_live?: number | undefined; thumbnail_blur_image_url?: string | undefined; image_url_without_letterbox?: string | undefined; adaptive_bitrate_available?: number | undefined; joined_live_thumbnail_image_url?: string | undefined; high_quality_available?: number | undefined; broadcast_host?: string | undefined; tags?: Record<string, unknown>[] | undefined; live_user_key?: string | undefined; streaming_url_llstream_audio?: string | undefined; app_user_id_label?: string | undefined; bcsvr_key?: string | undefined; heartbeated_at?: number | undefined; is_private?: number | undefined; shares?: { twitter?: { maxlength?: number | undefined; card?: { site?: string | undefined; image_url?: string | undefined; title?: string | undefined; description?: string | undefined; } | undefined; text?: string | undefined; placeholder?: string | undefined; } | undefined; others?: { text?: string | undefined; } | undefined; title?: string | undefined; description?: string | undefined; } | undefined; collab_supported?: number | undefined; sticker_enabled?: number | undefined; collab_has_vacancy?: number | undefined; stamp_num?: number | undefined; streaming_key?: string | undefined; projection_use_display_size?: number | undefined; collab_online_user_num?: number | undefined; matching_collab_banner_image_url?: string | undefined; share_image_url?: string | undefined; broadcast_key?: string | undefined; gift_ranking_url?: string | undefined; need_confirm_streaming_shard_changed?: number | undefined; moderator_id?: string | undefined; archive_url_hls?: string | undefined; ended_at?: number | undefined; online_user_num?: number | undefined; share_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_nuu_welcome?: boolean | undefined; orientation?: number | undefined; is_app_user_id_hidden?: number | undefined; app_icon_urls?: Record<string, unknown>[] | undefined; timeline?: Record<string, unknown>[] | undefined; streaming_upload_url2?: string | undefined; sticker_num?: number | undefined; max_collab_user_num?: number | undefined; comment_num?: number | undefined; owner?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; live_request_num?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; broadcast_port?: number | undefined; is_omotenashi?: boolean | undefined; sticker_display_type?: number | undefined; turn_servers?: { pass?: string | undefined; transport?: string | undefined; user?: string | undefined; port?: string | undefined; host?: string | undefined; }[] | undefined; user_label_image_url?: string | undefined; streaming_url_edge?: string | undefined; collab_enabled?: number | undefined; image_url?: string | undefined; orientation_v2?: number | undefined; }> {
    return this.api.liveLive_createFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_edit
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_editStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_edit({ collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_edit(
    body: { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_edit(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_edit (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_editResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_editFull({ collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_editFull(
    body: { collab_enabled?: string; description?: string; is_catalog_emomo_enabled?: string; live_id?: string; max_collab_user_num?: string; orientation?: string; orientation_v2?: string; sets_as_default?: string; sticker_display_type?: string; title?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; streaming_url_hls?: string | undefined; is_gift_supported?: number | undefined; streaming_url_llstream_video?: string | undefined; stun_servers?: { transport?: Record<string, unknown> | null | undefined; port?: string | undefined; host?: string | undefined; }[] | undefined; streaming_upload_url3?: string | undefined; user_app_status?: Record<string, unknown>[] | undefined; live_id?: string | undefined; is_mirrorable?: number | undefined; request_package_usage_stats?: Record<string, unknown> | null | undefined; description?: string | undefined; total_viewer_num?: number | undefined; thumbnail_image_url?: string | undefined; is_archive?: number | undefined; title?: string | undefined; games?: Record<string, unknown>[] | undefined; max_online_viewer_num?: number | undefined; created_at?: number | undefined; preview_blur_image_url?: string | undefined; blur_image_url?: string | undefined; started_at?: number | undefined; is_live?: number | undefined; thumbnail_blur_image_url?: string | undefined; image_url_without_letterbox?: string | undefined; adaptive_bitrate_available?: number | undefined; joined_live_thumbnail_image_url?: string | undefined; high_quality_available?: number | undefined; broadcast_host?: string | undefined; tags?: Record<string, unknown>[] | undefined; live_user_key?: string | undefined; streaming_url_llstream_audio?: string | undefined; bcsvr_key?: string | undefined; app_user_id_label?: string | undefined; heartbeated_at?: number | undefined; is_private?: number | undefined; shares?: { twitter?: { maxlength?: number | undefined; card?: { site?: string | undefined; image_url?: string | undefined; title?: string | undefined; description?: string | undefined; } | undefined; text?: string | undefined; placeholder?: string | undefined; } | undefined; others?: { text?: string | undefined; } | undefined; title?: string | undefined; description?: string | undefined; } | undefined; collab_supported?: number | undefined; sticker_enabled?: number | undefined; collab_has_vacancy?: number | undefined; stamp_num?: number | undefined; streaming_key?: string | undefined; projection_use_display_size?: number | undefined; collab_online_user_num?: number | undefined; matching_collab_banner_image_url?: string | undefined; share_image_url?: string | undefined; broadcast_key?: string | undefined; gift_ranking_url?: string | undefined; need_confirm_streaming_shard_changed?: number | undefined; moderator_id?: string | undefined; archive_url_hls?: string | undefined; ended_at?: number | undefined; online_user_num?: number | undefined; share_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_nuu_welcome?: boolean | undefined; orientation?: number | undefined; is_app_user_id_hidden?: number | undefined; app_icon_urls?: Record<string, unknown>[] | undefined; timeline?: { app?: { is_my_app?: number | undefined; icon_url?: string | undefined; store_url?: string | undefined; app_id?: string | undefined; is_app_user_id_hidden?: number | undefined; is_holding_campaign?: number | undefined; short_title?: string | undefined; is_category?: number | undefined; title?: string | undefined; id?: number | undefined; app_user_id_label?: string | undefined; } | undefined; timestamp?: number | undefined; title?: string | undefined; }[] | undefined; streaming_upload_url2?: string | undefined; sticker_num?: number | undefined; max_collab_user_num?: number | undefined; comment_num?: number | undefined; app_user_detail?: { name?: string | undefined; url?: string | undefined; user_id?: string | undefined; is_published_user_id?: number | undefined; message?: string | undefined; is_published_url?: number | undefined; } | undefined; owner?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; live_request_num?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; is_omotenashi?: boolean | undefined; broadcast_port?: number | undefined; sticker_display_type?: number | undefined; turn_servers?: { pass?: string | undefined; transport?: string | undefined; user?: string | undefined; port?: string | undefined; host?: string | undefined; }[] | undefined; streaming_url_edge?: string | undefined; user_label_image_url?: string | undefined; collab_enabled?: number | undefined; image_url?: string | undefined; orientation_v2?: number | undefined; }> {
    return this.api.liveLive_editFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live_game_catalog
   * 
   * @param query - { live_game_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_game_catalogStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_game_catalog({ live_game_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveLive_game_catalog(
    query?: { live_game_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.liveLive_game_catalog(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live_game_catalog (full response)
   * 
   * @param query - { live_game_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_game_catalogResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_game_catalogFull({ live_game_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveLive_game_catalogFull(
    query?: { live_game_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_cursor?: string | undefined; list?: Record<string, unknown>[] | undefined; next_cursor?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.liveLive_game_catalogFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live_history
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_historyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_history({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async liveLive_history(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_history(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/live_history (full response)
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_historyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_historyFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async liveLive_historyFull(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ next_page?: Record<string, unknown> | null | undefined; lives_num?: number | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_page?: number | undefined; lives?: { avatar_body_image_url?: string | undefined; is_private?: number | undefined; collab_supported?: number | undefined; sticker_enabled?: number | undefined; is_gift_supported?: number | undefined; collab_has_vacancy?: number | undefined; archive_hidden?: number | undefined; stamp_num?: number | undefined; user_app_status?: Record<string, unknown>[] | undefined; collab_user_profile_image_urls?: Record<string, unknown>[] | undefined; archive_status?: number | undefined; live_id?: string | undefined; collab_online_user_num?: number | undefined; share_image_url?: string | undefined; is_archive_expired?: number | undefined; is_mirrorable?: number | undefined; gift_coins?: number | undefined; description?: string | undefined; moderator_id?: string | undefined; total_viewer_num?: number | undefined; ended_at?: number | undefined; thumbnail_image_url?: string | undefined; is_archive?: number | undefined; online_user_num?: number | undefined; gift_point?: number | undefined; title?: string | undefined; share_url?: string | undefined; is_nuu_welcome?: boolean | undefined; gifter_num?: number | undefined; is_app_user_id_hidden?: number | undefined; orientation?: number | undefined; app_icon_urls?: Record<string, unknown>[] | undefined; max_online_viewer_num?: number | undefined; created_at?: number | undefined; is_live?: number | undefined; started_at?: number | undefined; preview_blur_image_url?: string | undefined; blur_image_url?: string | undefined; image_url_without_letterbox?: string | undefined; thumbnail_blur_image_url?: string | undefined; sticker_num?: number | undefined; thumbnail_frame?: Record<string, unknown> | undefined; max_collab_user_num?: number | undefined; comment_num?: number | undefined; joined_live_thumbnail_image_url?: string | undefined; owner?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; is_omotenashi?: boolean | undefined; sticker_display_type?: number | undefined; tags?: Record<string, unknown>[] | undefined; top_gifters?: Record<string, unknown>[] | undefined; app_num?: number | undefined; user_label_image_url?: string | undefined; collab_enabled?: number | undefined; image_url?: string | undefined; app_user_id_label?: string | undefined; bcsvr_key?: string | undefined; orientation_v2?: number | undefined; heartbeated_at?: number | undefined; archive_download_status?: number | undefined; }[] | undefined; }> {
    return this.api.liveLive_historyFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_polling
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_pollingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_polling({ error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_polling(
    body: { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_polling(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_polling (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_pollingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_pollingFull({ error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_pollingFull(
    body: { error_count?: string; is_ui_hidden?: string; live_id?: string; live_user_key?: string; viewer_receive_push_notification?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; streaming_url_hls?: string | undefined; is_gift_supported?: number | undefined; streaming_url_llstream_video?: string | undefined; user_app_status?: Record<string, unknown>[] | undefined; live_id?: string | undefined; app?: { app_user_detail?: { name?: string | undefined; url?: string | undefined; user_id?: string | undefined; is_published_user_id?: number | undefined; message?: string | undefined; is_published_url?: number | undefined; } | undefined; is_my_app?: number | undefined; icon_url?: string | undefined; store_url?: string | undefined; app_id?: string | undefined; is_app_user_id_hidden?: number | undefined; is_holding_campaign?: number | undefined; short_title?: string | undefined; is_category?: number | undefined; title?: string | undefined; id?: number | undefined; app_user_id_label?: string | undefined; } | undefined; is_mirrorable?: number | undefined; app_title?: string | undefined; description?: string | undefined; total_viewer_num?: number | undefined; thumbnail_image_url?: string | undefined; is_archive?: number | undefined; is_singing_karaoke?: number | undefined; title?: string | undefined; tutorial_mission?: { enable_mission?: boolean | undefined; is_first_mission_cleared?: boolean | undefined; unreceived_mission_num?: number | undefined; } | undefined; max_online_viewer_num?: number | undefined; is_emomo_visible?: boolean | undefined; created_at?: number | undefined; is_live?: number | undefined; started_at?: number | undefined; preview_blur_image_url?: string | undefined; blur_image_url?: string | undefined; thumbnail_blur_image_url?: string | undefined; image_url_without_letterbox?: string | undefined; is_connected_streaming_collab?: number | undefined; joined_live_thumbnail_image_url?: string | undefined; broadcast_host?: string | undefined; tags?: Record<string, unknown>[] | undefined; live_user_key?: string | undefined; streaming_url_llstream_audio?: string | undefined; bcsvr_key?: string | undefined; app_user_id_label?: string | undefined; heartbeated_at?: number | undefined; is_private?: number | undefined; shares?: { twitter?: { maxlength?: number | undefined; card?: { site?: string | undefined; image_url?: string | undefined; title?: string | undefined; description?: string | undefined; } | undefined; text?: string | undefined; placeholder?: string | undefined; } | undefined; others?: { text?: string | undefined; } | undefined; title?: string | undefined; description?: string | undefined; } | undefined; collab_supported?: number | undefined; sticker_enabled?: number | undefined; collab_has_vacancy?: number | undefined; stamp_num?: number | undefined; streaming_key?: string | undefined; linked_live?: Record<string, unknown> | null | undefined; collab_online_user_num?: number | undefined; share_image_url?: string | undefined; broadcast_key?: string | undefined; gift_ranking_url?: string | undefined; moderator_id?: string | undefined; archive_url_hls?: string | undefined; sticker_category_ids?: Record<string, unknown>[] | undefined; ended_at?: number | undefined; is_live_moderator?: number | undefined; online_user_num?: number | undefined; is_emomo_wipe_enabled?: number | undefined; share_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_nuu_welcome?: boolean | undefined; orientation?: number | undefined; is_app_user_id_hidden?: number | undefined; app_id?: string | undefined; app_is_category?: number | undefined; app_icon_urls?: string[] | undefined; timeline?: { app?: { is_my_app?: number | undefined; icon_url?: string | undefined; store_url?: string | undefined; app_id?: string | undefined; is_app_user_id_hidden?: number | undefined; is_holding_campaign?: number | undefined; short_title?: string | undefined; is_category?: number | undefined; title?: string | undefined; id?: number | undefined; app_user_id_label?: string | undefined; } | undefined; timestamp?: number | undefined; title?: string | undefined; }[] | undefined; enable_clap?: number | undefined; sticker_num?: number | undefined; app_short_title?: string | undefined; max_collab_user_num?: number | undefined; comment_num?: number | undefined; owner?: { avatar_body_image_url?: string | undefined; ambassador_image_url?: string | undefined; current_continuous_record?: string | undefined; registered_at?: string | undefined; custom_thanks_message?: string | undefined; profile_image_url?: string | undefined; badges?: Record<string, unknown>[] | undefined; continuous_type?: number | undefined; is_visible_birthday?: boolean | undefined; follower_num?: string | undefined; next_continuous_streamer_badge_url?: string | undefined; links?: Record<string, unknown>[] | undefined; grade_id?: number | undefined; twitter_screen_name?: Record<string, unknown> | null | undefined; birthday_to?: number | undefined; name?: string | undefined; description?: string | undefined; birthday_editable_date?: string | undefined; is_birthday?: number | undefined; properties?: Record<string, unknown>[] | undefined; total_viewer_num?: number | undefined; profile_frame_image_url?: string | undefined; live_announcement?: Record<string, unknown> | null | undefined; is_blocking?: number | undefined; user_id?: string | undefined; paypal_username?: string | undefined; next_continuous_streamer_text?: string | undefined; onlive?: Record<string, unknown> | null | undefined; share_url?: string | undefined; birthday_from?: number | undefined; ribbons?: { is_continuous_ribbon?: number | undefined; label_remaining_period?: { remain_seconds?: number | undefined; text?: string | undefined; is_highlight?: number | undefined; } | undefined; image_url?: string | undefined; ribbon_id?: number | undefined; is_label?: number | undefined; }[] | undefined; is_birthday_editable?: number | undefined; avatar_background_image_url?: string | undefined; is_new?: number | undefined; following_num?: string | undefined; is_follower?: number | undefined; is_cheerleader?: number | undefined; has_started_first_live?: number | undefined; max_continuous_record?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; birthday?: string | undefined; remaining_days_for_continuous_streamer?: number | undefined; continuous_achieved_text?: string | undefined; is_continuous_streamer?: number | undefined; is_following?: number | undefined; live_request_num?: string | undefined; } | undefined; recommend_sticker_ids?: Record<string, unknown>[] | undefined; is_omotenashi?: boolean | undefined; broadcast_port?: number | undefined; sticker_display_type?: number | undefined; user_label_image_url?: string | undefined; streaming_url_edge?: string | undefined; collab_enabled?: number | undefined; image_url?: string | undefined; orientation_v2?: string | undefined; }> {
    return this.api.liveLive_pollingFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/online_users
   * 
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveOnline_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveOnline_users({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveOnline_users(
    query?: { page?: number; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveOnline_users(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/online_users (full response)
   * 
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveOnline_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveOnline_usersFull({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveOnline_usersFull(
    query?: { page?: number; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_page?: number | undefined; users?: { share_url?: string | undefined; profile_image_url?: string | undefined; badges?: Record<string, unknown>[] | undefined; is_new?: number | undefined; yell_rank?: number | undefined; is_cheerleader?: number | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; yell_level?: number | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; is_continuous_streamer?: number | undefined; profile_frame_image_url?: string | undefined; is_collaborating?: number | undefined; collab_type?: number | undefined; user_id?: string | undefined; onlive?: Record<string, unknown> | null | undefined; }[] | undefined; }> {
    return this.api.liveOnline_usersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/preview_end
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_endStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.livePreview_end({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async livePreview_end(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.livePreview_end(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/preview_end (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_endResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.livePreview_endFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async livePreview_endFull(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.livePreview_endFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/preview_polling
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_pollingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.livePreview_polling({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async livePreview_polling(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.livePreview_polling(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/preview_polling (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_pollingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.livePreview_pollingFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async livePreview_pollingFull(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_live?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.livePreview_pollingFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/preview_start
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_startStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.livePreview_start({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async livePreview_start(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.livePreview_start(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/preview_start (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LivePreview_startResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.livePreview_startFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async livePreview_startFull(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_live?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.livePreview_startFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/sanitize_text
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { text?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSanitize_textStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveSanitize_text({ text?: string; });
   * console.log(res);
   * ```
   */
  async liveSanitize_text(
    body: { text?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveSanitize_text(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/sanitize_text (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { text?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSanitize_textResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveSanitize_textFull({ text?: string; });
   * console.log(res);
   * ```
   */
  async liveSanitize_textFull(
    body: { text?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ sanitized_text?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveSanitize_textFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/search
   * 
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveSearch({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async liveSearch(
    query?: { q?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.liveSearch(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/search (full response)
   * 
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveSearchFull({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async liveSearchFull(
    query?: { q?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_page?: number | undefined; live_smalls?: Record<string, unknown>[] | undefined; next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; total_entries?: number | undefined; }> {
    return this.api.liveSearchFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/update_archive_settings
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { archive_hidden?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_archive_settingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveUpdate_archive_settings({ archive_hidden?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveUpdate_archive_settings(
    body: { archive_hidden?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveUpdate_archive_settings(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/update_archive_settings (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { archive_hidden?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_archive_settingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveUpdate_archive_settingsFull({ archive_hidden?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveUpdate_archive_settingsFull(
    body: { archive_hidden?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveUpdate_archive_settingsFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/view_history
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveView_historyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveView_history({});
   * console.log(res);
   * ```
   */
  async liveView_history(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveView_history(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/view_history (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveView_historyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveView_historyFull({});
   * console.log(res);
   * ```
   */
  async liveView_historyFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_cursor?: string | undefined; next_cursor?: string | undefined; lives?: { is_private?: number | undefined; avatar_body_image_url?: string | undefined; collab_supported?: number | undefined; sticker_enabled?: number | undefined; collab_has_vacancy?: number | undefined; is_gift_supported?: number | undefined; stamp_num?: number | undefined; user_app_status?: Record<string, unknown>[] | undefined; collab_user_profile_image_urls?: Record<string, unknown>[] | undefined; live_id?: string | undefined; collab_online_user_num?: number | undefined; share_image_url?: string | undefined; is_follow?: number | undefined; is_mirrorable?: number | undefined; app_title?: string | undefined; moderator_id?: string | undefined; description?: string | undefined; total_viewer_num?: number | undefined; viewing_time?: number | undefined; thumbnail_image_url?: string | undefined; ended_at?: number | undefined; is_archive?: number | undefined; online_user_num?: number | undefined; gift_point?: number | undefined; title?: string | undefined; share_url?: string | undefined; is_nuu_welcome?: boolean | undefined; app_id?: string | undefined; is_app_user_id_hidden?: number | undefined; orientation?: number | undefined; app_is_category?: number | undefined; app_icon_urls?: string[] | undefined; max_online_viewer_num?: number | undefined; created_at?: number | undefined; is_live?: number | undefined; started_at?: number | undefined; preview_blur_image_url?: string | undefined; blur_image_url?: string | undefined; thumbnail_blur_image_url?: string | undefined; image_url_without_letterbox?: string | undefined; sticker_num?: number | undefined; thumbnail_frame?: Record<string, unknown> | undefined; comment_num?: number | undefined; max_collab_user_num?: number | undefined; app_short_title?: string | undefined; owner?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; catalog_label_image_url?: string | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; joined_live_thumbnail_image_url?: string | undefined; is_omotenashi?: boolean | undefined; sticker_display_type?: number | undefined; tags?: Record<string, unknown>[] | undefined; user_label_image_url?: string | undefined; collab_enabled?: number | undefined; image_url?: string | undefined; bcsvr_key?: string | undefined; app_user_id_label?: string | undefined; heartbeated_at?: number | undefined; orientation_v2?: number | undefined; }[] | undefined; }> {
    return this.api.liveView_historyFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live_game/end
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameEndStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.live_gameEnd({ play_id?: string; });
   * console.log(res);
   * ```
   */
  async live_gameEnd(
    body: { play_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.live_gameEnd(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live_game/end (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameEndResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameEndFull({ play_id?: string; });
   * console.log(res);
   * ```
   */
  async live_gameEndFull(
    body: { play_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.live_gameEndFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live_game/list
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameListStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameList({});
   * console.log(res);
   * ```
   */
  async live_gameList(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.live_gameList(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live_game/list (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameListResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameListFull({});
   * console.log(res);
   * ```
   */
  async live_gameListFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_cursor?: string | undefined; games?: { animated_banner_url?: string | undefined; app_id?: string | undefined; banner_url?: string | undefined; description?: string | undefined; friend_invitation?: Record<string, unknown> | null | undefined; icon_url?: string | undefined; id?: string | undefined; is_onlive_play_only?: boolean | undefined; logo_url?: string | undefined; mission?: { coin_boost?: { description?: string | undefined; } | undefined; condition?: string | undefined; player?: { coin?: number | undefined; status?: number | undefined; } | undefined; viewer?: { coin?: number | undefined; status?: number | undefined; } | undefined; } | undefined; provider?: Record<string, unknown> | null | undefined; title?: string | undefined; }[] | undefined; latest_created_at?: number | undefined; mission_banner_url?: string | undefined; mission_progress?: { given_coin?: number | undefined; max_coin?: number | undefined; status?: number | undefined; } | undefined; next_cursor?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.live_gameListFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live_game/new_counts
   * 
   * @param query - { live_games?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameNew_countsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameNew_counts({ live_games?: number | undefined });
   * console.log(res);
   * ```
   */
  async live_gameNew_counts(
    query?: { live_games?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.live_gameNew_counts(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live_game/new_counts (full response)
   * 
   * @param query - { live_games?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameNew_countsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameNew_countsFull({ live_games?: number | undefined });
   * console.log(res);
   * ```
   */
  async live_gameNew_countsFull(
    query?: { live_games?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ counts?: { live_games?: string | undefined; } | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.live_gameNew_countsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live_game/start
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { id?: string; is_viewer_self_start?: string; source?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameStartStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.live_gameStart({ id?: string; is_viewer_self_start?: string; source?: string; });
   * console.log(res);
   * ```
   */
  async live_gameStart(
    body: { id?: string; is_viewer_self_start?: string; source?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.live_gameStart(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live_game/start (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { id?: string; is_viewer_self_start?: string; source?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gameStartResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gameStartFull({ id?: string; is_viewer_self_start?: string; source?: string; });
   * console.log(res);
   * ```
   */
  async live_gameStartFull(
    body: { id?: string; is_viewer_self_start?: string; source?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ adjust_tokens?: Record<string, unknown>[] | undefined; firebase_tokens?: Record<string, unknown>[] | undefined; is_landscape?: boolean | undefined; launch_url?: string | undefined; live_game_id?: string | undefined; play_id?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.live_gameStartFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/broadcast_result
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveBroadcast_resultStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveBroadcast_result({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveBroadcast_result(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveBroadcast_result(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/broadcast_result (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveBroadcast_resultResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveBroadcast_resultFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveBroadcast_resultFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ has_receivable_mission?: boolean | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_gift_supported?: number | undefined; stamp_num?: number | undefined; max_online_viewer_num?: string | undefined; post_thanks_to_live_watched_users_enabled?: number | undefined; user?: { ambassador_image_url?: string | undefined; avatar_body_image_url?: string | undefined; current_continuous_record?: number | undefined; custom_thanks_message?: string | undefined; registered_at?: string | undefined; profile_image_url?: string | undefined; is_visible_birthday?: boolean | undefined; continuous_type?: number | undefined; badges?: Record<string, unknown>[] | undefined; follower_num?: string | undefined; next_continuous_streamer_badge_url?: string | undefined; links?: { url?: string | undefined; }[] | undefined; grade_id?: number | undefined; twitter_screen_name?: Record<string, unknown> | null | undefined; birthday_to?: number | undefined; name?: string | undefined; is_birthday?: number | undefined; birthday_editable_date?: string | undefined; description?: string | undefined; total_viewer_num?: number | undefined; properties?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; live_announcement?: Record<string, unknown> | null | undefined; next_continuous_streamer_text?: string | undefined; paypal_username?: string | undefined; user_id?: string | undefined; onlive?: Record<string, unknown> | null | undefined; share_url?: string | undefined; birthday_from?: number | undefined; ribbons?: { is_continuous_ribbon?: number | undefined; label_remaining_period?: { remain_seconds?: number | undefined; text?: string | undefined; is_highlight?: number | undefined; } | undefined; image_url?: string | undefined; ribbon_id?: number | undefined; is_label?: number | undefined; }[] | undefined; is_birthday_editable?: number | undefined; avatar_background_image_url?: string | undefined; is_new?: number | undefined; following_num?: string | undefined; is_cheerleader?: number | undefined; has_started_first_live?: number | undefined; birthday?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; max_continuous_record?: string | undefined; remaining_days_for_continuous_streamer?: number | undefined; continuous_achieved_text?: string | undefined; is_continuous_streamer?: number | undefined; live_request_num?: string | undefined; } | undefined; should_show_live_announcement?: number | undefined; received_diamonds?: { calculated_at?: Record<string, unknown> | null | undefined; is_eligible?: number | undefined; } | undefined; send_gacha_ticket_message?: string | undefined; sticker_num?: number | undefined; current_live_continuous_num?: string | undefined; should_request_review?: number | undefined; event_type?: number | undefined; remaining_present_ticket?: number | undefined; gift_coins?: number | undefined; total_viewer_num?: number | undefined; chat_status?: { is_enabled?: boolean | undefined; require_generation?: boolean | undefined; require_birthday?: boolean | undefined; is_cheer_club_enabled?: boolean | undefined; require_cheer_chat_confirmation_agreement?: boolean | undefined; require_chat_confirmation_agreement?: boolean | undefined; } | undefined; is_updated_max_live_continuous_num?: number | undefined; title?: string | undefined; share_text?: string | undefined; }> {
    return this.api.liveBroadcast_resultFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/delete_live_history
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveDelete_live_historyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveDelete_live_history({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveDelete_live_history(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveDelete_live_history(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/delete_live_history (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveDelete_live_historyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveDelete_live_historyFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveDelete_live_historyFull(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveDelete_live_historyFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/kick_out
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveKick_outStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveKick_out({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async liveKick_out(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveKick_out(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/kick_out (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveKick_outResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveKick_outFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async liveKick_outFull(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveKick_outFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_app_identifier_changed
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_identifier?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_app_identifier_changedStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_app_identifier_changed({ app_identifier?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_app_identifier_changed(
    body: { app_identifier?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.liveLive_app_identifier_changed(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_app_identifier_changed (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_identifier?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_app_identifier_changedResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_app_identifier_changedFull({ app_identifier?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_app_identifier_changedFull(
    body: { app_identifier?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.liveLive_app_identifier_changedFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_capture_image
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_capture_imageStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_capture_image({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async liveLive_capture_image(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_capture_image(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_capture_image (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_capture_imageResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_capture_imageFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async liveLive_capture_imageFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; image_url?: string | undefined; }> {
    return this.api.liveLive_capture_imageFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_end
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_endStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_end({ is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_end(
    body: { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_end(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_end (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_endResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_endFull({ is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_endFull(
    body: { is_available_app_audio?: string; live_id?: string; mix_with_app_audio?: string; process_id?: string; process_memory?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; live?: { max_online_viewer_num?: string | undefined; current_live_continuous_record?: number | undefined; sticker_num?: number | undefined; stamp_num?: number | undefined; total_viewer_num?: number | undefined; } | undefined; announcement_url?: string | undefined; received_diamonds?: Record<string, unknown> | undefined; user?: { past_live_best_record?: { max_online_viewer_num?: string | undefined; stamp_num?: string | undefined; total_viewer_num?: string | undefined; } | undefined; total_viewer_num_history?: number[] | undefined; } | undefined; gift_coins?: number | undefined; }> {
    return this.api.liveLive_endFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_heartbeat
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_heartbeatStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_heartbeat({ buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_heartbeat(
    body: { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_heartbeat(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_heartbeat (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_heartbeatResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_heartbeatFull({ buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_heartbeatFull(
    body: { buffering_size?: string; comment_push_enabled?: string; encoder_bitrate?: string; is_app_foreground?: string; is_available_app_audio?: string; is_cast_mirroring?: string; is_emomo_visible?: string; is_muted?: string; is_share_screen?: string; live_id?: string; mix_with_app_audio?: string; network_bitrate?: string; process_id?: string; process_memory?: string; speech_synthesizer_enabled?: string; thermal_state?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_live?: number | undefined; online_user_num?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; has_matched_live?: number | undefined; gift_event_rank?: number | undefined; is_matching_collab_enabled?: number | undefined; total_viewer_num?: number | undefined; }> {
    return this.api.liveLive_heartbeatFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_start
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_startStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveLive_start({ comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_start(
    body: { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveLive_start(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/live_start (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveLive_startResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveLive_startFull({ comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; });
   * console.log(res);
   * ```
   */
  async liveLive_startFull(
    body: { comment_push_enabled?: string; enabled_customize_hash_tags?: string; input_source?: string; is_available_app_audio?: string; is_muted?: string; is_omotenashi?: string; live_id?: string; mix_with_app_audio?: string; output_source?: string; process_boottime?: string; process_id?: string; process_memory?: string; quality_level?: string; speech_synthesizer_enabled?: string; thermal_state?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; streaming_url_hls?: string | undefined; is_streaming_collab_enabled?: number | undefined; is_gift_supported?: number | undefined; streaming_url_llstream_video?: string | undefined; user_app_status?: Record<string, unknown>[] | undefined; stun_servers?: { transport?: Record<string, unknown> | null | undefined; port?: string | undefined; host?: string | undefined; }[] | undefined; streaming_upload_url3?: string | undefined; live_id?: string | undefined; is_mirrorable?: number | undefined; description?: string | undefined; total_viewer_num?: number | undefined; thumbnail_image_url?: string | undefined; custom_video_bitrates?: { middle?: number | undefined; high?: number | undefined; } | undefined; is_archive?: number | undefined; title?: string | undefined; max_online_viewer_num?: number | undefined; created_at?: number | undefined; preview_blur_image_url?: string | undefined; blur_image_url?: string | undefined; started_at?: number | undefined; is_live?: number | undefined; thumbnail_blur_image_url?: string | undefined; image_url_without_letterbox?: string | undefined; adaptive_bitrate_available?: number | undefined; joined_live_thumbnail_image_url?: string | undefined; high_quality_available?: number | undefined; live_style_id?: number | undefined; bitrate_control?: { increase_value?: number | undefined; decrease_rate?: number | undefined; } | undefined; broadcast_host?: string | undefined; tags?: Record<string, unknown>[] | undefined; live_user_key?: string | undefined; streaming_url_llstream_audio?: string | undefined; app_user_id_label?: string | undefined; bcsvr_key?: string | undefined; heartbeated_at?: number | undefined; is_private?: number | undefined; shares?: { twitter?: { maxlength?: number | undefined; card?: { site?: string | undefined; image_url?: string | undefined; title?: string | undefined; description?: string | undefined; } | undefined; text?: string | undefined; placeholder?: string | undefined; } | undefined; others?: { text?: string | undefined; } | undefined; title?: string | undefined; description?: string | undefined; } | undefined; collab_supported?: number | undefined; sticker_enabled?: number | undefined; collab_has_vacancy?: number | undefined; stamp_num?: number | undefined; streaming_key?: string | undefined; projection_use_display_size?: number | undefined; collab_online_user_num?: number | undefined; matching_collab_banner_image_url?: string | undefined; share_image_url?: string | undefined; user_matching_collab_enabled?: boolean | undefined; broadcast_key?: string | undefined; matching_collab_enabled_text?: string | undefined; gift_ranking_url?: string | undefined; need_confirm_streaming_shard_changed?: number | undefined; moderator_id?: string | undefined; archive_url_hls?: string | undefined; ended_at?: number | undefined; online_user_num?: number | undefined; share_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_nuu_welcome?: boolean | undefined; orientation?: number | undefined; is_app_user_id_hidden?: number | undefined; app_icon_urls?: Record<string, unknown>[] | undefined; timeline?: { app?: Record<string, unknown> | null | undefined; timestamp?: number | undefined; title?: string | undefined; }[] | undefined; sticker_num?: number | undefined; streaming_upload_url2?: string | undefined; comment_num?: number | undefined; max_collab_user_num?: number | undefined; owner?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; live_request_num?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; broadcast_port?: number | undefined; is_omotenashi?: boolean | undefined; sticker_display_type?: number | undefined; turn_servers?: { pass?: string | undefined; transport?: string | undefined; user?: string | undefined; port?: string | undefined; host?: string | undefined; }[] | undefined; user_label_image_url?: string | undefined; streaming_url_edge?: string | undefined; collab_enabled?: number | undefined; image_url?: string | undefined; is_matching_collab_enabled?: number | undefined; should_retry_collab_live_id?: string | undefined; orientation_v2?: number | undefined; }> {
    return this.api.liveLive_startFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/update_emomo_visible
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_visible?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_emomo_visibleStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveUpdate_emomo_visible({ is_visible?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveUpdate_emomo_visible(
    body: { is_visible?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.liveUpdate_emomo_visible(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/update_emomo_visible (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_visible?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_emomo_visibleResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveUpdate_emomo_visibleFull({ is_visible?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveUpdate_emomo_visibleFull(
    body: { is_visible?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.liveUpdate_emomo_visibleFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/update_wipe_enabled
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_emomo_wipe_enabled?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_wipe_enabledStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.liveUpdate_wipe_enabled({ is_emomo_wipe_enabled?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveUpdate_wipe_enabled(
    body: { is_emomo_wipe_enabled?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.liveUpdate_wipe_enabled(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live/update_wipe_enabled (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_emomo_wipe_enabled?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveUpdate_wipe_enabledResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveUpdate_wipe_enabledFull({ is_emomo_wipe_enabled?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async liveUpdate_wipe_enabledFull(
    body: { is_emomo_wipe_enabled?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.liveUpdate_wipe_enabledFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/viewers_result
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveViewers_resultStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveViewers_result({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveViewers_result(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.liveViewers_result(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /live/viewers_result (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LiveViewers_resultResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.liveViewers_resultFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async liveViewers_resultFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_new_unique_streamer?: boolean | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; viewers?: Record<string, unknown>[] | undefined; }> {
    return this.api.liveViewers_resultFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live_game/ping
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gamePingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.live_gamePing({ live_id?: string; play_id?: string; });
   * console.log(res);
   * ```
   */
  async live_gamePing(
    body: { live_id?: string; play_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.live_gamePing(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /live_game/ping (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; play_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Live_gamePingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.live_gamePingFull({ live_id?: string; play_id?: string; });
   * console.log(res);
   * ```
   */
  async live_gamePingFull(
    body: { live_id?: string; play_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_playing?: boolean | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.live_gamePingFull(body, extraHeaders, axiosOpts);
  }
}