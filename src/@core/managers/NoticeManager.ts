import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * notice 関連 API をまとめたマネージャー（14 件）
 */
export class NoticeManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /notice/campaigns
   * 
   * @param query - { category?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCampaignsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCampaigns({ category?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticeCampaigns(
    query?: { category?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.noticeCampaigns(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/campaigns (full response)
   * 
   * @param query - { category?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCampaignsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCampaignsFull({ category?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticeCampaignsFull(
    query?: { category?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ campaign_notices?: { created_at?: number | undefined; entry_status?: number | undefined; event_period?: string | undefined; has_receivable_reward?: number | undefined; id?: number | undefined; image_url?: string | undefined; is_now?: number | undefined; is_upcoming?: number | undefined; period_type?: number | undefined; prize_delivery_date?: string | undefined; related_notices?: Record<string, unknown>[] | undefined; text?: string | undefined; type?: string | undefined; url?: string | undefined; }[] | undefined; current_cursor?: string | undefined; has_campaign_rewards?: number | undefined; latest_created_at?: number | undefined; next_cursor?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.noticeCampaignsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/counts
   * 
   * @param query - { recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCountsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCounts({ recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticeCounts(
    query?: { recommend_campaigns?: number; chat?: number; app_campaigns?: number; present_boxes?: number; emomo_campaigns?: number; news?: number; followee_lives?: number; yours?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.noticeCounts(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/counts (full response)
   * 
   * @param query - { recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeCountsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeCountsFull({ recommend_campaigns?: number | undefined; chat?: number | undefined; app_campaigns?: number | undefined; present_boxes?: number | undefined; emomo_campaigns?: number | undefined; news?: number | undefined; followee_lives?: number | undefined; yours?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticeCountsFull(
    query?: { recommend_campaigns?: number; chat?: number; app_campaigns?: number; present_boxes?: number; emomo_campaigns?: number; news?: number; followee_lives?: number; yours?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; counts?: { chats?: string | undefined; yours?: string | undefined; app_campaigns?: string | undefined; recommend_campaigns?: string | undefined; campaigns?: string | undefined; myapp_campaigns?: string | undefined; cheer_threads?: string | undefined; cheer_join?: string | undefined; myapp_closed_campaigns?: string | undefined; emomo_campaigns?: string | undefined; news?: string | undefined; present_boxes?: string | undefined; followee_lives?: string | undefined; } | undefined; }> {
    return this.api.noticeCountsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/news
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeNewsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeNews({});
   * console.log(res);
   * ```
   */
  async noticeNews(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.noticeNews(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/news (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeNewsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeNewsFull({});
   * console.log(res);
   * ```
   */
  async noticeNewsFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_cursor?: string | undefined; next_cursor?: string | undefined; news_notices?: { created_at?: number | undefined; text?: string | undefined; url?: string | undefined; image_url?: string | undefined; type?: string | undefined; title?: string | undefined; }[] | undefined; }> {
    return this.api.noticeNewsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/popups
   * 
   * @param query - { position?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopups({ position?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticePopups(
    query?: { position?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.noticePopups(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/popups (full response)
   * 
   * @param query - { position?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopupsFull({ position?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticePopupsFull(
    query?: { position?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ popups?: { notice_url?: string | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.noticePopupsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/present_boxes
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePresent_boxesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePresent_boxes({});
   * console.log(res);
   * ```
   */
  async noticePresent_boxes(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.noticePresent_boxes(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/present_boxes (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePresent_boxesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePresent_boxesFull({});
   * console.log(res);
   * ```
   */
  async noticePresent_boxesFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_cursor?: string | undefined; next_cursor?: string | undefined; present_boxes?: { link?: string | undefined; disabled?: number | undefined; icon_url?: string | undefined; user_present_id?: number | undefined; description?: string | undefined; attributed_texts?: { text?: string | undefined; is_highlight?: number | undefined; }[] | undefined; received_at?: number | undefined; created_at?: number | undefined; button_text?: string | undefined; image_url?: string | undefined; type?: string | undefined; need_user_action?: number | undefined; }[] | undefined; }> {
    return this.api.noticePresent_boxesFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/yours_v2
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeYours_v2Status> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeYours_v2({});
   * console.log(res);
   * ```
   */
  async noticeYours_v2(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.noticeYours_v2(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/yours_v2 (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticeYours_v2Response>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticeYours_v2Full({});
   * console.log(res);
   * ```
   */
  async noticeYours_v2Full(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_cursor?: string | undefined; next_cursor?: string | undefined; your_notices?: { your_notice_id?: string | undefined; attributed_texts?: { is_bold?: number | undefined; text?: string | undefined; }[] | undefined; created_at?: number | undefined; small_icon_image_urls?: Record<string, unknown>[] | undefined; url?: string | undefined; image_url?: string | undefined; type?: string | undefined; icon_image_url?: string | undefined; }[] | undefined; }> {
    return this.api.noticeYours_v2Full(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/popup
   * 
   * @param query - { obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopup({ obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticePopup(
    query?: { obfuscated_user_id?: string; id?: number; new_popup?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<never> {
    return this.api.noticePopup(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /notice/popup (full response)
   * 
   * @param query - { obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<NoticePopupResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.noticePopupFull({ obfuscated_user_id?: string | undefined; id?: number | undefined; new_popup?: number | undefined });
   * console.log(res);
   * ```
   */
  async noticePopupFull(
    query?: { obfuscated_user_id?: string; id?: number; new_popup?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{}> {
    return this.api.noticePopupFull(query, extraHeaders, axiosOpts);
  }
}