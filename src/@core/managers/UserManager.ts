import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * user 関連 API をまとめたマネージャー（42 件）
 */
export class UserManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### POST /user/bad_report
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { category_id?: string; message?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBad_reportStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userBad_report({ category_id?: string; message?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async userBad_report(
    body: { category_id?: string; message?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userBad_report(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/bad_report (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { category_id?: string; message?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBad_reportResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userBad_reportFull({ category_id?: string; message?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async userBad_reportFull(
    body: { category_id?: string; message?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userBad_reportFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/broadcast_settings
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBroadcast_settingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userBroadcast_settings({});
   * console.log(res);
   * ```
   */
  async userBroadcast_settings(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.userBroadcast_settings(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/broadcast_settings (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserBroadcast_settingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userBroadcast_settingsFull({});
   * console.log(res);
   * ```
   */
  async userBroadcast_settingsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; is_private_live_enable?: boolean | undefined; app_campaigns?: { url?: string | undefined; image_url?: string | undefined; app_id?: string | undefined; }[] | undefined; selected_thumbnail_frame_id?: number | undefined; is_omotenashi_live_enable?: boolean | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; twitter_autopost?: string | undefined; carousel?: { type?: string | undefined; catalog_banner?: { text2?: string | undefined; period?: string | undefined; text?: string | undefined; url?: string | undefined; text1?: string | undefined; banner_image_url?: string | undefined; text3?: string | undefined; } | undefined; }[] | undefined; has_valid_nuu_welcome_live_tickets?: boolean | undefined; omotenashi_lp_url?: string | undefined; omotenashi_live_notice_text?: string | undefined; nuu_welcome_live_lp_url?: string | undefined; thumbnail_frames?: Record<string, unknown>[] | undefined; is_nuu_welcome_live_enable?: boolean | undefined; twitter_autopost_live_announcement?: string | undefined; warning?: Record<string, unknown> | null | undefined; }> {
    return this.api.userBroadcast_settingsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/check_minor
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCheck_minorStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userCheck_minor({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  async userCheck_minor(
    body: { birthday?: string; generation?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userCheck_minor(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/check_minor (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCheck_minorResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userCheck_minorFull({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  async userCheck_minorFull(
    body: { birthday?: string; generation?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ app_unavailable?: Record<string, unknown> | null | undefined; parent_agreement?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userCheck_minorFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/currency
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCurrencyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userCurrency({});
   * console.log(res);
   * ```
   */
  async userCurrency(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.userCurrency(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/currency (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserCurrencyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userCurrencyFull({});
   * console.log(res);
   * ```
   */
  async userCurrencyFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ remaining_free_coins?: number | undefined; remaining_kandumes?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; remaining_expires_date?: number | undefined; remaining_paid_coins?: number | undefined; remaining_coins?: number | undefined; }> {
    return this.api.userCurrencyFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/date_of_birth
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDate_of_birthStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userDate_of_birth({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  async userDate_of_birth(
    body: { birthday?: string; generation?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userDate_of_birth(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/date_of_birth (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { birthday?: string; generation?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDate_of_birthResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userDate_of_birthFull({ birthday?: string; generation?: string; });
   * console.log(res);
   * ```
   */
  async userDate_of_birthFull(
    body: { birthday?: string; generation?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userDate_of_birthFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/delete_live_announcement
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDelete_live_announcementStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userDelete_live_announcement(Record<string, any>);
   * console.log(res);
   * ```
   */
  async userDelete_live_announcement(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userDelete_live_announcement(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/delete_live_announcement (full response)
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserDelete_live_announcementResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userDelete_live_announcementFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  async userDelete_live_announcementFull(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userDelete_live_announcementFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/favorite_live_setting
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserFavorite_live_settingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userFavorite_live_setting({});
   * console.log(res);
   * ```
   */
  async userFavorite_live_setting(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userFavorite_live_setting(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/favorite_live_setting (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserFavorite_live_settingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userFavorite_live_settingFull({});
   * console.log(res);
   * ```
   */
  async userFavorite_live_settingFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ settings?: { app_icon_url?: string | undefined; app_id?: string | undefined; app_is_category?: number | undefined; app_is_published_url?: number | undefined; app_is_published_user_id?: number | undefined; app_short_title?: string | undefined; app_title?: string | undefined; app_url?: string | undefined; app_user_id?: string | undefined; app_user_id_label?: string | undefined; id?: number | undefined; is_app_user_id_hidden?: number | undefined; live_thumbnail_image_url?: string | undefined; memo?: string | undefined; title?: string | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userFavorite_live_settingFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/logout
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserLogoutStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userLogout(Record<string, any>);
   * console.log(res);
   * ```
   */
  async userLogout(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.userLogout(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/logout (full response)
   * 
   * @param body - Record<string, any> リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserLogoutResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userLogoutFull(Record<string, any>);
   * console.log(res);
   * ```
   */
  async userLogoutFull(
    body?: any,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.userLogoutFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/me
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserMeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userMe({});
   * console.log(res);
   * ```
   */
  async userMe(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.userMe(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/me (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserMeResponse & { mrid?: string }>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userMeFull({});
   * console.log(res);
   * ```
   */
  async userMeFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; current_continuous_record?: number | undefined; custom_thanks_message?: string | undefined; profile_image_url?: string | undefined; continuous_type?: number | undefined; badges?: Record<string, unknown>[] | undefined; should_device_check?: number | undefined; purchase_continuous_live_holiday_required_coin?: number | undefined; default_live?: { thumbnail?: { image_url?: string | undefined; } | undefined; title?: string | undefined; collab?: { max_user_num?: string | undefined; enabled?: number | undefined; } | undefined; description?: string | undefined; enabled?: number | undefined; } | undefined; twitter_screen_name?: Record<string, unknown> | null | undefined; name?: string | undefined; description?: string | undefined; is_birthday?: number | undefined; total_viewer_num?: number | undefined; properties?: Record<string, unknown>[] | undefined; purchase_continuous_live_holiday_enabled?: number | undefined; accepts_avatar?: number | undefined; profile_frame_image_url?: string | undefined; is_vip_public_setting_visible?: boolean | undefined; next_continuous_streamer_text?: string | undefined; user_id?: string | undefined; onlive?: Record<string, unknown> | null | undefined; should_register_unique_code?: number | undefined; latest_gacha_started_at?: number | undefined; latest_live_started_at?: string | undefined; ribbons?: { is_continuous_ribbon?: number | undefined; label_remaining_period?: { remain_seconds?: number | undefined; text?: string | undefined; is_highlight?: number | undefined; } | undefined; image_url?: string | undefined; ribbon_id?: number | undefined; is_label?: number | undefined; }[] | undefined; user_avatar_parts_num?: number | undefined; is_already_set_handover_code?: number | undefined; avatar_background_image_url?: string | undefined; is_new?: number | undefined; following_num?: string | undefined; is_apple_user?: number | undefined; is_cheerleader?: number | undefined; accepts_tour?: number | undefined; has_started_first_live?: number | undefined; vip?: Record<string, unknown> | null | undefined; birthday?: string | undefined; max_continuous_record?: string | undefined; should_show_demographic_form?: number | undefined; user_level?: Record<string, unknown> | undefined; profile_frames?: Record<string, unknown>[] | undefined; generation?: string | undefined; live_request_num?: string | undefined; ambassador_image_url?: string | undefined; returning_user_type?: number | undefined; registered_at?: string | undefined; season_yell?: { is_display_target?: boolean | undefined; preview_viewers?: Record<string, unknown>[] | undefined; total_viewer_count?: number | undefined; } | undefined; is_visible_birthday?: boolean | undefined; follower_num?: string | undefined; next_continuous_streamer_badge_url?: string | undefined; anniversary?: Record<string, unknown> | undefined; capabilities?: { personalized_appeal?: Record<string, unknown> | null | undefined; delete_personalized_appeal?: boolean | undefined; standing_view_supported?: number | undefined; emokara_onboarding?: number | undefined; coin_challenge_enabled?: number | undefined; ab_ios_publish_button_enabled?: number | undefined; mail_support_enabled?: number | undefined; private_live_tutorial_url?: string | undefined; max_group_user_num?: number | undefined; onboarding_button_image_urls?: { on?: string | undefined; off?: string | undefined; } | undefined; user_level_enabled?: number | undefined; onboarding_twitter_enabled?: boolean | undefined; photo_booth_enabled?: number | undefined; ab_emomo_tab_female_default_names?: string[] | undefined; ios_audio_session_tracking_enabled?: number | undefined; ab_emomo_tab_male_default_names?: string[] | undefined; is_avatar_applied?: number | undefined; follow_button_relocation_pattern?: number | undefined; android_play_integrity_enabled_for_debug?: boolean | undefined; gacha_gauge_enabled?: number | undefined; todays_list_enabled?: number | undefined; onboarding_live_matching_enabled?: boolean | undefined; android_play_integrity_enabled?: boolean | undefined; ios_collab_alpha?: number | undefined; google_account_nonce?: string | undefined; android_larger_virtualdisplay?: number | undefined; ab_emomo_tab?: number | undefined; face_tracking_enabled?: number | undefined; time_machine?: Record<string, unknown> | null | undefined; disabled_alpha?: number | undefined; ios_currency_enabled?: number | undefined; encourage_live_popup_image_url?: string | undefined; onboarding_royal_enabled?: boolean | undefined; home_tab_integration?: number | undefined; live_prepare_tutorial_enabled?: number | undefined; gacha_enabled?: number | undefined; collab_alpha?: number | undefined; lower_audio_record_buffer_enabled?: number | undefined; pip_enabled?: number | undefined; recommend_text_to_speech_app_id?: string | undefined; app_user_url_supported_app_ids?: string[] | undefined; ab_audio_session_set_mix_with_others?: number | undefined; season_rating_info_url?: string | undefined; ios_audio_help_url?: string | undefined; offer_wall_url?: string | undefined; collabo_emomo_enabled?: number | undefined; save_avatar_photo_enabled?: number | undefined; android_currency_enabled?: number | undefined; game_blackjack?: string | undefined; app_add_request_form_url?: string | undefined; android_same_aspect_ratio_as_screen?: number | undefined; ab_registration_1?: number | undefined; request_review_v1?: number | undefined; wipe_emomo_enabled?: number | undefined; live_game_listing_icon_enabled?: number | undefined; offer_wall_only?: number | undefined; avatar_introduction_image_url?: string | undefined; handover_code_supported?: number | undefined; ab_onboarding_emomo?: number | undefined; ab_20180601_myapp?: number | undefined; ios_tag_beta?: number | undefined; is_summer_event_period?: number | undefined; emomo_audio_service_enabled?: number | undefined; android_avoid_green_edge?: number | undefined; ip_collab_enabled?: boolean | undefined; sticker_beta?: number | undefined; is_avatar_candidate?: number | undefined; home_reward_ad_button_enabled?: number | undefined; is_enabled_nwbandwidth_notice?: number | undefined; report_categories?: { title?: string | undefined; id?: number | undefined; }[] | undefined; android_safetynet_enabled?: boolean | undefined; mario_kart_url?: string | undefined; app_user_detail_enabled?: number | undefined; apple_sign_nonce?: string | undefined; ab_20180601_live_tutorial?: number | undefined; is_llstream_v1_subscribe_logger?: number | undefined; media_codec_async_mode_enabled?: number | undefined; default_names?: Record<string, unknown>[] | undefined; is_invite_collab_supported?: number | undefined; avatar_tutorial_pages?: string[] | undefined; ios_audio_rendering_enabled?: number | undefined; login_feature_bubble_enabled?: boolean | undefined; demographic_enabled?: number | undefined; streaming_bgm_enabled?: number | undefined; game_app_icon_enabled?: number | undefined; notification_education_video_url?: string | undefined; gift_ranking_enabled?: number | undefined; launch_with_follow_tab?: number | undefined; is_visible_new_year_popup_on_stream_start?: number | undefined; avatar_asset_bundle_url?: string | undefined; speedtest_enabled?: number | undefined; is_joined_live_thumbnail_supported?: number | undefined; moderator?: number | undefined; onboarding_survey_enabled?: boolean | undefined; notice_counts_cache_expire?: number | undefined; ab_20180601_registration?: number | undefined; fps_adjustment_enabled?: number | undefined; mix_with_app_audio_enabled?: number | undefined; official_twitter?: string | undefined; live_preview_v2?: number | undefined; default_headphones_broadcasting_enabled?: number | undefined; avatar_compatible?: number | undefined; karaoke_enabled?: number | undefined; share?: { text?: string | undefined; popup_title?: string | undefined; popup_description?: string | undefined; } | undefined; is_llstream_v1_subscribe?: number | undefined; live_preview_sound_enabled?: boolean | undefined; reduce_unity_asset_bundle?: number | undefined; is_notification_blur_supported?: number | undefined; tweet_hash_tags?: { line1?: string[] | undefined; line2?: string[] | undefined; } | undefined; demographic_last_shown_time?: number | undefined; init_media_profile?: number | undefined; package_usage_stats_interval?: number | undefined; ios_ab_audiosession_at_started_enabled?: number | undefined; fallbacked_app_ids?: { "YoStarJP.MajSoul"?: string[] | undefined; "com.xflag.fightleague.amazon"?: string[] | undefined; "com.netease.ko"?: string[] | undefined; "com.nhnpa.cps.amazon"?: string[] | undefined; "jp.co.yoozoo.projectred"?: string[] | undefined; "com.netease.hyxd"?: string[] | undefined; "com.netease.ko.amazon"?: string[] | undefined; "jp.co.cave.mahouotome"?: string[] | undefined; "com.square_enix.android_amazon.hoshidora"?: string[] | undefined; "jp.co.mixi.monsterstrike.amazon"?: string[] | undefined; "com.netease.idv.googleplay"?: string[] | undefined; "app0014-2"?: string[] | undefined; app0014?: string[] | undefined; } | undefined; rotation_player_enabled?: boolean | undefined; ios_broadcast_help_url?: string | undefined; user_me_cache_expire?: number | undefined; is_llstream_v1_broadcast?: number | undefined; strings?: { text_emomo_confirm_save?: string | undefined; text_emomo_confirm_apply_message?: string | undefined; text_gauge_gacha_text1?: string | undefined; text_invitation_code_posted?: string | undefined; text_q_late?: string | undefined; text_chat_tutorial_makeroom_dm?: string | undefined; text_gacha_exe_alert_v2?: string | undefined; text_private_tutorial_ttl?: string | undefined; text_emomo_confirm_apply_title?: string | undefined; } | undefined; voice_changer_supported?: number | undefined; } | undefined; my_app_num?: number | undefined; is_vip_public?: boolean | undefined; links?: { url?: string | undefined; }[] | undefined; grade_id?: number | undefined; birthday_to?: number | undefined; parent_agreement?: Record<string, unknown> | null | undefined; birthday_editable_date?: string | undefined; live_announcement?: Record<string, unknown> | null | undefined; live_thumbnail_image_url?: string | undefined; max_continuous_live_holiday?: number | undefined; paypal_username?: string | undefined; nuu?: Record<string, unknown> | null | undefined; used_continuous_stream_holidays_num?: number | undefined; share_url?: string | undefined; recording_enabled?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; live_description?: string | undefined; birthday_from?: number | undefined; purchase_continuous_live_holiday_enabled_at?: number | undefined; vip_point?: Record<string, unknown> | null | undefined; is_birthday_editable?: number | undefined; onboarding_live_game?: { app_id?: string | undefined; id?: string | undefined; } | undefined; kakao_name?: string | undefined; continuous_stream_holidays_num?: number | undefined; announcement_urls?: Record<string, unknown> | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; remaining_days_for_continuous_streamer?: number | undefined; continuous_achieved_text?: string | undefined; chat_enabled?: number | undefined; app_unavailable?: Record<string, unknown> | null | undefined; has_avatar?: number | undefined; is_google_user?: boolean | undefined; is_continuous_streamer?: number | undefined; is_continuous_live_user_after_next_live?: number | undefined; chat_only_followings?: string | undefined; } & { mrid?: string | undefined; }> {
    return this.api.userMeFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/post_live_announcement
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { body?: string; is_notified_to_follower?: string; start_at?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_announcementStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userPost_live_announcement({ body?: string; is_notified_to_follower?: string; start_at?: string; });
   * console.log(res);
   * ```
   */
  async userPost_live_announcement(
    body: { body?: string; is_notified_to_follower?: string; start_at?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userPost_live_announcement(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/post_live_announcement (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { body?: string; is_notified_to_follower?: string; start_at?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_announcementResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userPost_live_announcementFull({ body?: string; is_notified_to_follower?: string; start_at?: string; });
   * console.log(res);
   * ```
   */
  async userPost_live_announcementFull(
    body: { body?: string; is_notified_to_follower?: string; start_at?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ live_announcement?: { body?: string | undefined; start_at?: number | undefined; } | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userPost_live_announcementFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/post_live_request
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { count?: string; user_id?: string; where?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_requestStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userPost_live_request({ count?: string; user_id?: string; where?: string; });
   * console.log(res);
   * ```
   */
  async userPost_live_request(
    body: { count?: string; user_id?: string; where?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userPost_live_request(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/post_live_request (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { count?: string; user_id?: string; where?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_live_requestResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userPost_live_requestFull({ count?: string; user_id?: string; where?: string; });
   * console.log(res);
   * ```
   */
  async userPost_live_requestFull(
    body: { count?: string; user_id?: string; where?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userPost_live_requestFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/post_review_confirmation
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { status?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_review_confirmationStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userPost_review_confirmation({ status?: string; });
   * console.log(res);
   * ```
   */
  async userPost_review_confirmation(
    body: { status?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.userPost_review_confirmation(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/post_review_confirmation (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { status?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserPost_review_confirmationResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userPost_review_confirmationFull({ status?: string; });
   * console.log(res);
   * ```
   */
  async userPost_review_confirmationFull(
    body: { status?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.userPost_review_confirmationFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/profile
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfileStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userProfile({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async userProfile(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.userProfile(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/profile (full response)
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfileResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userProfileFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async userProfileFull(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ avatar_body_image_url?: string | undefined; ambassador_image_url?: string | undefined; current_continuous_record?: number | undefined; registered_at?: string | undefined; custom_thanks_message?: string | undefined; profile_image_url?: string | undefined; season_yell?: { is_display_target?: boolean | undefined; preview_viewers?: Record<string, unknown>[] | undefined; total_viewer_count?: number | undefined; } | undefined; badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; continuous_type?: number | undefined; is_visible_birthday?: boolean | undefined; follower_num?: string | undefined; next_continuous_streamer_badge_url?: string | undefined; anniversary?: Record<string, unknown> | undefined; my_app_num?: number | undefined; links?: { url?: string | undefined; }[] | undefined; mutual_followees?: { text?: string | undefined; image_urls?: Record<string, unknown>[] | undefined; } | undefined; grade_id?: number | undefined; twitter_screen_name?: string | undefined; birthday_to?: number | undefined; name?: string | undefined; description?: string | undefined; birthday_editable_date?: string | undefined; is_birthday?: number | undefined; properties?: Record<string, unknown>[] | undefined; total_viewer_num?: number | undefined; profile_frame_image_url?: string | undefined; live_announcement?: Record<string, unknown> | null | undefined; is_blocking?: number | undefined; is_blocked?: number | undefined; user_id?: string | undefined; paypal_username?: string | undefined; next_continuous_streamer_text?: string | undefined; onlive?: Record<string, unknown> | null | undefined; nuu?: Record<string, unknown> | null | undefined; share_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; ribbons?: { is_continuous_ribbon?: number | undefined; label_remaining_period?: { remain_seconds?: number | undefined; text?: string | undefined; is_highlight?: number | undefined; } | undefined; image_url?: string | undefined; ribbon_id?: number | undefined; is_label?: number | undefined; }[] | undefined; birthday_from?: number | undefined; tutorial_mission?: Record<string, unknown> | null | undefined; is_birthday_editable?: number | undefined; avatar_background_image_url?: string | undefined; is_new?: number | undefined; following_num?: string | undefined; is_cheerleader?: number | undefined; kakao_name?: string | undefined; is_follower?: number | undefined; has_started_first_live?: number | undefined; max_continuous_record?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; birthday?: string | undefined; user_level?: Record<string, unknown> | undefined; remaining_days_for_continuous_streamer?: number | undefined; continuous_achieved_text?: string | undefined; chat_enabled?: number | undefined; is_continuous_streamer?: number | undefined; is_following?: number | undefined; live_request_num?: string | undefined; }> {
    return this.api.userProfileFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/profile_edit
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfile_editStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userProfile_edit({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async userProfile_edit(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.userProfile_edit(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/profile_edit (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserProfile_editResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userProfile_editFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async userProfile_editFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ambassador_image_url?: string | undefined; avatar_body_image_url?: string | undefined; current_continuous_record?: number | undefined; custom_thanks_message?: string | undefined; registered_at?: string | undefined; profile_image_url?: string | undefined; is_visible_birthday?: boolean | undefined; continuous_type?: number | undefined; badges?: Record<string, unknown>[] | undefined; follower_num?: string | undefined; next_continuous_streamer_badge_url?: string | undefined; anniversary?: Record<string, unknown> | undefined; my_app_num?: number | undefined; is_vip_public?: boolean | undefined; links?: { url?: string | undefined; }[] | undefined; grade_id?: number | undefined; twitter_screen_name?: Record<string, unknown> | null | undefined; birthday_to?: number | undefined; name?: string | undefined; is_birthday?: number | undefined; birthday_editable_date?: string | undefined; description?: string | undefined; total_viewer_num?: number | undefined; properties?: Record<string, unknown>[] | undefined; accepts_avatar?: number | undefined; profile_frame_image_url?: string | undefined; live_announcement?: Record<string, unknown> | null | undefined; next_continuous_streamer_text?: string | undefined; paypal_username?: string | undefined; user_id?: string | undefined; onlive?: Record<string, unknown> | null | undefined; share_url?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; ribbons?: { is_continuous_ribbon?: number | undefined; label_remaining_period?: { remain_seconds?: number | undefined; text?: string | undefined; is_highlight?: number | undefined; } | undefined; image_url?: string | undefined; ribbon_id?: number | undefined; is_label?: number | undefined; }[] | undefined; birthday_from?: number | undefined; is_birthday_editable?: number | undefined; avatar_background_image_url?: string | undefined; onboarding_live_game?: { app_id?: string | undefined; id?: string | undefined; } | undefined; is_new?: number | undefined; following_num?: string | undefined; is_apple_user?: number | undefined; is_cheerleader?: number | undefined; accepts_tour?: number | undefined; has_started_first_live?: number | undefined; birthday?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; max_continuous_record?: string | undefined; remaining_days_for_continuous_streamer?: number | undefined; continuous_achieved_text?: string | undefined; has_avatar?: number | undefined; is_continuous_streamer?: number | undefined; profile_frames?: Record<string, unknown>[] | undefined; generation?: string | undefined; live_request_num?: string | undefined; chat_only_followings?: string | undefined; }> {
    return this.api.userProfile_editFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/search
   * 
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSearch({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async userSearch(
    query?: { q?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userSearch(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/search (full response)
   * 
   * @param query - { q?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSearchFull({ q?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async userSearchFull(
    query?: { q?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_page?: number | undefined; next_page?: number | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; users?: { badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; description?: string | undefined; is_blocking?: number | undefined; is_cheerleader?: number | undefined; is_continuous_streamer?: number | undefined; is_follower?: number | undefined; is_following?: number | undefined; is_moderator?: number | undefined; is_new?: number | undefined; name?: string | undefined; onlive?: Record<string, unknown> | null | undefined; profile_image_url?: string | undefined; properties?: Record<string, unknown>[] | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; share_url?: string | undefined; user_id?: string | undefined; }[] | undefined; }> {
    return this.api.userSearchFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/setting_root
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSetting_rootStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSetting_root({});
   * console.log(res);
   * ```
   */
  async userSetting_root(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userSetting_root(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/setting_root (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserSetting_rootResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userSetting_rootFull({});
   * console.log(res);
   * ```
   */
  async userSetting_rootFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ live_report_url?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; watchword_setting_url?: string | undefined; }> {
    return this.api.userSetting_rootFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/tos
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserTosStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userTos({});
   * console.log(res);
   * ```
   */
  async userTos(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userTos(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/tos (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserTosResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userTosFull({});
   * console.log(res);
   * ```
   */
  async userTosFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ popup?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userTosFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/update_favorite_live_setting
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_favorite_live_settingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userUpdate_favorite_live_setting({ app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; });
   * console.log(res);
   * ```
   */
  async userUpdate_favorite_live_setting(
    body: { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userUpdate_favorite_live_setting(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/update_favorite_live_setting (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_favorite_live_settingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userUpdate_favorite_live_settingFull({ app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; });
   * console.log(res);
   * ```
   */
  async userUpdate_favorite_live_settingFull(
    body: { app_id?: string; id?: string; live_thumbnail_image_url?: string; memo?: string; title?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ setting?: { app_icon_url?: string | undefined; app_id?: string | undefined; app_is_category?: number | undefined; app_is_published_url?: number | undefined; app_is_published_user_id?: number | undefined; app_short_title?: string | undefined; app_title?: string | undefined; app_url?: string | undefined; app_user_id?: string | undefined; app_user_id_label?: string | undefined; id?: number | undefined; is_app_user_id_hidden?: number | undefined; live_thumbnail_image_url?: string | undefined; memo?: string | undefined; title?: string | undefined; } | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userUpdate_favorite_live_settingFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/update_recording_settings
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { enabled?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_recording_settingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userUpdate_recording_settings({ enabled?: string; });
   * console.log(res);
   * ```
   */
  async userUpdate_recording_settings(
    body: { enabled?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userUpdate_recording_settings(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/update_recording_settings (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { enabled?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUpdate_recording_settingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userUpdate_recording_settingsFull({ enabled?: string; });
   * console.log(res);
   * ```
   */
  async userUpdate_recording_settingsFull(
    body: { enabled?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ enabled?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userUpdate_recording_settingsFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/use_favorite_live_setting
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUse_favorite_live_settingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.userUse_favorite_live_setting({ id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async userUse_favorite_live_setting(
    body: { id?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userUse_favorite_live_setting(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /user/use_favorite_live_setting (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserUse_favorite_live_settingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userUse_favorite_live_settingFull({ id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async userUse_favorite_live_settingFull(
    body: { id?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.userUse_favorite_live_settingFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/watchword
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserWatchwordStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userWatchword({});
   * console.log(res);
   * ```
   */
  async userWatchword(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.userWatchword(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /user/watchword (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<UserWatchwordResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.userWatchwordFull({});
   * console.log(res);
   * ```
   */
  async userWatchwordFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ campaign?: Record<string, unknown> | null | undefined; descriptions?: string[] | undefined; header_image_url?: string | undefined; is_star?: boolean | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; title?: string | undefined; watchword?: string | undefined; }> {
    return this.api.userWatchwordFull(query, extraHeaders, axiosOpts);
  }
}