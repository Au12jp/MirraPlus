import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * mission 関連 API をまとめたマネージャー（12 件）
 */
export class MissionManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /mission/current_login_bonus
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionCurrent_login_bonusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionCurrent_login_bonus({});
   * console.log(res);
   * ```
   */
  async missionCurrent_login_bonus(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.missionCurrent_login_bonus(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/current_login_bonus (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionCurrent_login_bonusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionCurrent_login_bonusFull({});
   * console.log(res);
   * ```
   */
  async missionCurrent_login_bonusFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ body_image_url?: string | undefined; login_bonus_id?: string | undefined; rewards?: Record<string, unknown>[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; title_image_url?: string | undefined; }> {
    return this.api.missionCurrent_login_bonusFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/daily
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionDailyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionDaily({});
   * console.log(res);
   * ```
   */
  async missionDaily(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.missionDaily(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/daily (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionDailyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionDailyFull({});
   * console.log(res);
   * ```
   */
  async missionDailyFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ is_viewing_ad_required?: boolean | undefined; category_second?: { category_id?: number | undefined; missions?: { reward_text?: string | undefined; has_reward_detail?: boolean | undefined; reward_avatar_part_type_icon_url?: string | undefined; status?: number | undefined; reward_image_url?: string | undefined; with_ad?: boolean | undefined; description?: string | undefined; progress_status?: { current?: number | undefined; max?: number | undefined; } | undefined; reward_num?: number | undefined; hint?: Record<string, unknown> | null | undefined; id?: number | undefined; title?: string | undefined; reward_text_description?: string | undefined; }[] | undefined; is_activation?: boolean | undefined; category_description_first?: string | undefined; category_description_second?: Record<string, unknown>[] | undefined; } | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; header_image_url?: string | undefined; description?: string | undefined; footer_description?: string | undefined; mission_description?: string | undefined; category_special?: { download_url?: string | undefined; cautions?: string | undefined; category_id?: number | undefined; missions?: { reward_text?: string | undefined; status?: number | undefined; with_ad?: boolean | undefined; reward_num?: number | undefined; id?: number | undefined; icon_image_url?: string | undefined; reward_text_description?: string | undefined; download_url?: string | undefined; reward_avatar_part_type_icon_url?: string | undefined; has_reward_detail?: boolean | undefined; app_title?: string | undefined; reward_image_url?: string | undefined; description?: string | undefined; video_url?: string | undefined; progress_status?: { current?: number | undefined; max?: number | undefined; } | undefined; title?: string | undefined; }[] | undefined; mission?: { reward_text?: string | undefined; status?: number | undefined; reward_image_url?: string | undefined; with_ad?: boolean | undefined; description?: string | undefined; progress_status?: { current?: number | undefined; max?: number | undefined; } | undefined; reward_num?: number | undefined; hint?: Record<string, unknown> | null | undefined; id?: number | undefined; title?: string | undefined; } | undefined; icon_image_url?: string | undefined; video_url?: string | undefined; } | undefined; unreceived_mission_num?: number | undefined; category_first?: { cautions?: string | undefined; category_id?: number | undefined; missions?: { reward_text?: string | undefined; has_reward_detail?: boolean | undefined; reward_avatar_part_type_icon_url?: string | undefined; status?: number | undefined; reward_image_url?: string | undefined; with_ad?: boolean | undefined; description?: string | undefined; progress_status?: { current?: number | undefined; max?: number | undefined; } | undefined; reward_num?: number | undefined; hint?: Record<string, unknown> | null | undefined; id?: number | undefined; title?: string | undefined; reward_text_description?: string | undefined; }[] | undefined; is_activation?: boolean | undefined; category_description_first?: string | undefined; vip?: { reward_description?: string | undefined; is_vip_only?: boolean | undefined; month?: number | undefined; vip_rank?: number | undefined; is_continuous?: boolean | undefined; message?: string | undefined; rewards?: { text?: string | undefined; vip_rank?: number | undefined; }[] | undefined; promotion?: Record<string, unknown> | null | undefined; landing_page_url?: string | undefined; } | undefined; category_description_second?: { is_bold?: number | undefined; text?: string | undefined; is_highlighted?: number | undefined; }[] | undefined; } | undefined; }> {
    return this.api.missionDailyFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/status
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionStatus({});
   * console.log(res);
   * ```
   */
  async missionStatus(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.missionStatus(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/status (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionStatusFull({});
   * console.log(res);
   * ```
   */
  async missionStatusFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ total_mission_num?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; enable_daily_mission?: number | undefined; daily_unreceived_mission_num?: number | undefined; enable_mission?: boolean | undefined; complete_mission_num?: number | undefined; unreceived_mission_num?: number | undefined; vip_mission?: Record<string, unknown> | null | undefined; weekly_unreceived_mission_num?: number | undefined; }> {
    return this.api.missionStatusFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/tutorial_status
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionTutorial_statusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionTutorial_status({});
   * console.log(res);
   * ```
   */
  async missionTutorial_status(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.missionTutorial_status(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/tutorial_status (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionTutorial_statusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionTutorial_statusFull({});
   * console.log(res);
   * ```
   */
  async missionTutorial_statusFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ enable_mission?: boolean | undefined; is_first_mission_cleared?: boolean | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; unreceived_mission_num?: number | undefined; }> {
    return this.api.missionTutorial_statusFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/weekly
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionWeeklyStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionWeekly({});
   * console.log(res);
   * ```
   */
  async missionWeekly(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.missionWeekly(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /mission/weekly (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionWeeklyResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionWeeklyFull({});
   * console.log(res);
   * ```
   */
  async missionWeeklyFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; description?: string | undefined; mission_description?: string | undefined; header_image_url?: string | undefined; category_special?: { category_id?: number | undefined; download_url?: string | undefined; video_url?: string | undefined; icon_image_url?: string | undefined; cautions?: string | undefined; missions?: { id?: number | undefined; reward_text?: string | undefined; reward_num?: number | undefined; reward_image_url?: string | undefined; reward_avatar_part_type_icon_url?: string | undefined; reward_text_description?: string | undefined; has_reward_detail?: boolean | undefined; title?: string | undefined; description?: string | undefined; app_title?: string | undefined; download_url?: string | undefined; video_url?: string | undefined; icon_image_url?: string | undefined; status?: number | undefined; progress_status?: { max?: number | undefined; current?: number | undefined; } | undefined; with_ad?: boolean | undefined; }[] | undefined; mission?: { id?: number | undefined; reward_text?: string | undefined; reward_num?: number | undefined; reward_image_url?: string | undefined; reward_avatar_part_type_icon_url?: string | undefined; reward_text_description?: string | undefined; has_reward_detail?: boolean | undefined; title?: string | undefined; description?: string | undefined; status?: number | undefined; progress_status?: { max?: number | undefined; current?: number | undefined; } | undefined; with_ad?: boolean | undefined; hint?: Record<string, unknown> | null | undefined; } | undefined; } | undefined; category_first?: { category_id?: number | undefined; category_description_first?: string | undefined; category_description_second?: Record<string, unknown>[] | undefined; cautions?: string | undefined; is_activation?: boolean | undefined; missions?: { id?: number | undefined; reward_text?: string | undefined; reward_num?: number | undefined; reward_image_url?: string | undefined; reward_avatar_part_type_icon_url?: string | undefined; reward_text_description?: string | undefined; has_reward_detail?: boolean | undefined; title?: string | undefined; description?: string | undefined; status?: number | undefined; progress_status?: { max?: number | undefined; current?: number | undefined; } | undefined; with_ad?: boolean | undefined; hint?: Record<string, unknown> | null | undefined; }[] | undefined; } | undefined; category_second?: { category_id?: number | undefined; category_description_first?: string | undefined; category_description_second?: Record<string, unknown>[] | undefined; cautions?: string | undefined; is_activation?: boolean | undefined; missions?: { id?: number | undefined; reward_text?: string | undefined; reward_num?: number | undefined; reward_image_url?: string | undefined; reward_avatar_part_type_icon_url?: string | undefined; reward_text_description?: string | undefined; has_reward_detail?: boolean | undefined; title?: string | undefined; description?: string | undefined; status?: number | undefined; progress_status?: { max?: number | undefined; current?: number | undefined; } | undefined; with_ad?: boolean | undefined; hint?: Record<string, unknown> | null | undefined; }[] | undefined; } | undefined; unreceived_mission_num?: number | undefined; is_viewing_ad_required?: boolean | undefined; footer_description?: string | undefined; }> {
    return this.api.missionWeeklyFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /mission/receive_login_bonus_reward
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { login_bonus_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionReceive_login_bonus_rewardStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.missionReceive_login_bonus_reward({ login_bonus_id?: string; });
   * console.log(res);
   * ```
   */
  async missionReceive_login_bonus_reward(
    body: { login_bonus_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.missionReceive_login_bonus_reward(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /mission/receive_login_bonus_reward (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { login_bonus_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<MissionReceive_login_bonus_rewardResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.missionReceive_login_bonus_rewardFull({ login_bonus_id?: string; });
   * console.log(res);
   * ```
   */
  async missionReceive_login_bonus_rewardFull(
    body: { login_bonus_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.missionReceive_login_bonus_rewardFull(body, extraHeaders, axiosOpts);
  }
}