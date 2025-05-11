import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * gift 関連 API をまとめたマネージャー（20 件）
 */
export class GiftManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /gift/emomo_run_gifts
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftEmomo_run_giftsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftEmomo_run_gifts({});
   * console.log(res);
   * ```
   */
  async giftEmomo_run_gifts(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.giftEmomo_run_gifts(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/emomo_run_gifts (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftEmomo_run_giftsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftEmomo_run_giftsFull({});
   * console.log(res);
   * ```
   */
  async giftEmomo_run_giftsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ gifts?: { coins?: number | undefined; id?: string | undefined; large_image_url?: string | undefined; small_image_url?: string | undefined; title?: string | undefined; type?: number | undefined; }[] | undefined; help_page_url?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.giftEmomo_run_giftsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/panels
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftPanelsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftPanels({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async giftPanels(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.giftPanels(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/panels (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftPanelsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftPanelsFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async giftPanelsFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; panels?: { banner?: Record<string, unknown> | null | undefined; icon_url?: string | undefined; is_focus?: boolean | undefined; reason_id?: number | undefined; gifts?: { small_image_url?: string | undefined; panel_reason_id?: number | undefined; tickets?: number | undefined; coins?: number | undefined; locked_message?: string | undefined; panel_type?: number | undefined; large_image_url?: string | undefined; pre_discount_coins?: number | undefined; bonus_image_url?: string | undefined; event_icon_url?: string | undefined; is_paid_coin_only?: boolean | undefined; id?: string | undefined; type?: number | undefined; title?: string | undefined; }[] | undefined; id?: string | undefined; type?: number | undefined; title?: string | undefined; live_game_id?: string | undefined; }[] | undefined; streamer_watchword?: Record<string, unknown> | null | undefined; default_index?: number | undefined; }> {
    return this.api.giftPanelsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/ranking
   * 
   * @param query - { live_id?: string | undefined; type?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftRankingStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftRanking({ live_id?: string | undefined; type?: string | undefined });
   * console.log(res);
   * ```
   */
  async giftRanking(
    query?: { live_id?: string; type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.giftRanking(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/ranking (full response)
   * 
   * @param query - { live_id?: string | undefined; type?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftRankingResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftRankingFull({ live_id?: string | undefined; type?: string | undefined });
   * console.log(res);
   * ```
   */
  async giftRankingFull(
    query?: { live_id?: string; type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ obfuscated_user_id?: Record<string, unknown> | null | undefined; current_user_rank?: { yell_level?: number | undefined; point?: number | undefined; yell_rank?: number | undefined; user?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; catalog_label_image_url?: string | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; rank?: number | undefined; } | undefined; ranking?: { yell_level?: number | undefined; point?: number | undefined; yell_rank?: number | undefined; user?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; catalog_label_image_url?: string | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; }[] | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; next_cursor?: string | undefined; current_cursor?: string | undefined; }> {
    return this.api.giftRankingFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift/send
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftSendStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.giftSend({ count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; });
   * console.log(res);
   * ```
   */
  async giftSend(
    body: { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.giftSend(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift/send (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftSendResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftSendFull({ count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; });
   * console.log(res);
   * ```
   */
  async giftSendFull(
    body: { count?: string; gift_id?: string; live_id?: string; message?: string; panel_reason_id?: string; panel_type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ remaining_free_coins?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; remaining_tickets?: { ticket_gift_gacha?: number | undefined; ticket_roulette?: number | undefined; ticket_ranking?: number | undefined; } | undefined; is_app_mutual_gift_event_achieved?: boolean | undefined; remaining_paid_coins?: number | undefined; remaining_coins?: number | undefined; }> {
    return this.api.giftSendFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/unique_emomo_gift_config
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_configStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_config({});
   * console.log(res);
   * ```
   */
  async giftUnique_emomo_gift_config(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.giftUnique_emomo_gift_config(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/unique_emomo_gift_config (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_configResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_configFull({});
   * console.log(res);
   * ```
   */
  async giftUnique_emomo_gift_configFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ presets?: { default_texts?: { index?: number | undefined; unity_font_name?: string | undefined; text?: string | undefined; font_id?: number | undefined; }[] | undefined; image_url?: string | undefined; unity_preset_name?: string | undefined; text_num?: number | undefined; text_length?: number | undefined; fonts?: { unity_font_name?: string | undefined; outline_color?: string | undefined; font_id?: number | undefined; text_color?: string | undefined; }[] | undefined; preset_id?: number | undefined; }[] | undefined; badge_image_url?: string | undefined; stamp_gift?: { icon_url?: string | undefined; coins?: number | undefined; } | undefined; rich_gift?: { icon_url?: string | undefined; coins?: number | undefined; } | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; header_image_url?: string | undefined; colors?: { outline_color?: string | undefined; color_id?: number | undefined; text_color?: string | undefined; }[] | undefined; }> {
    return this.api.giftUnique_emomo_gift_configFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/unique_emomo_gift_slots
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_slotsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_slots({});
   * console.log(res);
   * ```
   */
  async giftUnique_emomo_gift_slots(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.giftUnique_emomo_gift_slots(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift/unique_emomo_gift_slots (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUnique_emomo_gift_slotsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUnique_emomo_gift_slotsFull({});
   * console.log(res);
   * ```
   */
  async giftUnique_emomo_gift_slotsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; slots?: { is_empty?: number | undefined; image_url?: string | undefined; name?: string | undefined; type?: number | undefined; slot_id?: number | undefined; }[] | undefined; }> {
    return this.api.giftUnique_emomo_gift_slotsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift/update_simple_unique_emomo_gift
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_simple_unique_emomo_giftStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.giftUpdate_simple_unique_emomo_gift({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async giftUpdate_simple_unique_emomo_gift(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.giftUpdate_simple_unique_emomo_gift(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift/update_simple_unique_emomo_gift (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_simple_unique_emomo_giftResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUpdate_simple_unique_emomo_giftFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async giftUpdate_simple_unique_emomo_giftFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.giftUpdate_simple_unique_emomo_giftFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift_appeal_popup/read
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { gift_appeal_popup_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_appeal_popupReadStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.gift_appeal_popupRead({ gift_appeal_popup_id?: string; });
   * console.log(res);
   * ```
   */
  async gift_appeal_popupRead(
    body: { gift_appeal_popup_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.gift_appeal_popupRead(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift_appeal_popup/read (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { gift_appeal_popup_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_appeal_popupReadResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.gift_appeal_popupReadFull({ gift_appeal_popup_id?: string; });
   * console.log(res);
   * ```
   */
  async gift_appeal_popupReadFull(
    body: { gift_appeal_popup_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; result?: { gift_appeal_popup_id?: number | undefined; user_id?: number | undefined; last_updated_at?: number | undefined; } | undefined; }> {
    return this.api.gift_appeal_popupReadFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift/update_rich_unique_emomo_gift
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_rich_unique_emomo_giftStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.giftUpdate_rich_unique_emomo_gift({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async giftUpdate_rich_unique_emomo_gift(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.giftUpdate_rich_unique_emomo_gift(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /gift/update_rich_unique_emomo_gift (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GiftUpdate_rich_unique_emomo_giftResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.giftUpdate_rich_unique_emomo_giftFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async giftUpdate_rich_unique_emomo_giftFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.giftUpdate_rich_unique_emomo_giftFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift_gacha/user_stocks
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_gachaUser_stocksStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.gift_gachaUser_stocks({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async gift_gachaUser_stocks(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.gift_gachaUser_stocks(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /gift_gacha/user_stocks (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Gift_gachaUser_stocksResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.gift_gachaUser_stocksFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async gift_gachaUser_stocksFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_meter?: number | undefined; enabled?: number | undefined; ends_at?: number | undefined; gift_gacha_stocks?: Record<string, unknown>[] | undefined; max_meter?: number | undefined; starts_at?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; time?: number | undefined; }> {
    return this.api.gift_gachaUser_stocksFull(query, extraHeaders, axiosOpts);
  }
}