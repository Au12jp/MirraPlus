import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * campaign 関連 API をまとめたマネージャー（4 件）
 */
export class CampaignManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /campaignCompleted_mission
   * 
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignCompleted_missionStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignCompleted_mission({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  async campaignCompleted_mission(
    query?: { id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.campaignCompleted_mission(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /campaignCompleted_mission (full response)
   * 
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignCompleted_missionResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignCompleted_missionFull({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  async campaignCompleted_missionFull(
    query?: { id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ campaign_title?: string | undefined; missions?: { achievement_cond?: string | undefined; achievement_cond_type?: number | undefined; condition?: Record<string, unknown> | null | undefined; description?: string | undefined; id?: number | undefined; inactivation_text?: string | undefined; is_inactivation?: number | undefined; mission_type?: number | undefined; prize_grant_type?: number | undefined; prizes?: { prize_image_url?: string | undefined; prize_name?: string | undefined; prize_num?: string | undefined; }[] | undefined; progress_status?: { current?: number | undefined; is_completed?: number | undefined; max?: number | undefined; } | undefined; progress_type?: number | undefined; receive_status?: number | undefined; requires_continuous_streamer?: number | undefined; title?: string | undefined; }[] | undefined; prize_delivery_dates?: { broadcast?: string | undefined; share?: string | undefined; view?: string | undefined; } | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.campaignCompleted_missionFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /campaignDetail
   * 
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignDetailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignDetail({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  async campaignDetail(
    query?: { id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.campaignDetail(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /campaignDetail (full response)
   * 
   * @param query - { id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CampaignDetailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.campaignDetailFull({ id?: number | undefined });
   * console.log(res);
   * ```
   */
  async campaignDetailFull(
    query?: { id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ app?: { app_id?: string | undefined; app_user_id?: string | undefined; app_user_id_label?: string | undefined; download_button_label?: string | undefined; download_url?: string | undefined; icon_url?: string | undefined; id?: number | undefined; is_app_user_id_hidden?: number | undefined; is_published_user_id?: number | undefined; other_site_1?: string | undefined; other_site_1_name?: string | undefined; other_site_2?: string | undefined; other_site_2_name?: string | undefined; site_url?: string | undefined; title?: string | undefined; twitter_url?: string | undefined; use_app_user_id?: number | undefined; youtube_url?: string | undefined; } | undefined; app_user_id_registration_date?: string | undefined; app_user_id_registration_notes?: string | undefined; broadcast_awards?: { missions?: { achievement_cond?: string | undefined; achievement_cond_type?: number | undefined; condition?: Record<string, unknown> | null | undefined; description?: string | undefined; id?: number | undefined; inactivation_text?: string | undefined; is_inactivation?: number | undefined; mission_type?: number | undefined; prize_grant_type?: number | undefined; prizes?: { prize_image_url?: string | undefined; prize_name?: string | undefined; prize_num?: string | undefined; }[] | undefined; progress_status?: { current?: number | undefined; is_completed?: number | undefined; max?: number | undefined; } | undefined; progress_type?: number | undefined; receive_status?: number | undefined; requires_continuous_streamer?: number | undefined; title?: string | undefined; }[] | undefined; notes?: string[] | undefined; prize_delivery_date?: string | undefined; } | undefined; campaign_icon_url?: string | undefined; copyrights?: Record<string, unknown>[] | undefined; disclaimers?: string[] | undefined; link?: Record<string, unknown> | null | undefined; notes?: string[] | undefined; period?: string | undefined; period_notes?: string | undefined; share_twitter?: { card?: { description?: string | undefined; image_url?: string | undefined; site?: string | undefined; title?: string | undefined; } | undefined; maxlength?: number | undefined; placeholder?: string | undefined; text?: string | undefined; } | undefined; sharing_award?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; title?: string | undefined; title_image_url?: string | undefined; user_inputs?: Record<string, unknown>[] | undefined; user_inputs_updated?: boolean | undefined; viewing_awards?: { missions?: { achievement_cond?: string | undefined; achievement_cond_type?: number | undefined; condition?: Record<string, unknown> | null | undefined; description?: string | undefined; id?: number | undefined; inactivation_text?: string | undefined; is_inactivation?: number | undefined; mission_type?: number | undefined; prize_grant_type?: number | undefined; prizes?: { prize_image_url?: string | undefined; prize_name?: string | undefined; prize_num?: string | undefined; }[] | undefined; progress_status?: { current?: number | undefined; is_completed?: number | undefined; max?: number | undefined; } | undefined; progress_type?: number | undefined; receive_status?: number | undefined; requires_continuous_streamer?: number | undefined; title?: string | undefined; }[] | undefined; notes?: string[] | undefined; prize_delivery_date?: string | undefined; } | undefined; }> {
    return this.api.campaignDetailFull(query, extraHeaders, axiosOpts);
  }
}