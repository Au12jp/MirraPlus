import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * season 関連 API をまとめたマネージャー（8 件）
 */
export class SeasonManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /season_ratingStatus
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingStatus({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async season_ratingStatus(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.season_ratingStatus(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /season_ratingStatus (full response)
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingStatusFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async season_ratingStatusFull(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ coin?: number | undefined; diamond?: number | undefined; last_season?: { class_end?: number | undefined; class_id?: number | undefined; class_start?: number | undefined; current?: number | undefined; month?: number | undefined; season_duration?: string | undefined; } | undefined; season?: { class_end?: number | undefined; class_id?: number | undefined; class_start?: number | undefined; current?: number | undefined; month?: number | undefined; season_duration?: string | undefined; } | undefined; show_popup?: boolean | undefined; star_summary?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.season_ratingStatusFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /season_yellStatus
   * 
   * @param query - { user_id?: number | undefined; streamer_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellStatus({ user_id?: number | undefined; streamer_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async season_yellStatus(
    query?: { user_id?: number; streamer_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.season_yellStatus(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /season_yellStatus (full response)
   * 
   * @param query - { user_id?: number | undefined; streamer_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellStatusFull({ user_id?: number | undefined; streamer_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async season_yellStatusFull(
    query?: { user_id?: number; streamer_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; yell_lp_url?: string | undefined; yell_status?: Record<string, unknown> | null | undefined; }> {
    return this.api.season_yellStatusFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /season_yellViewers
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellViewersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellViewers({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async season_yellViewers(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.season_yellViewers(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /season_yellViewers (full response)
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_yellViewersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_yellViewersFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async season_yellViewersFull(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ banner_url?: string | undefined; list?: { users?: { badge_image_url?: string | undefined; catalog_label_image_url?: string | undefined; name?: string | undefined; order?: number | undefined; profile_frame_image_url?: string | undefined; profile_image_url?: string | undefined; user_id?: string | undefined; yell_continuations?: { count?: number | undefined; yell_rank?: number | undefined; }[] | undefined; yell_label_type?: number | undefined; yell_level?: number | undefined; yell_rank?: number | undefined; yell_rank_total_count?: number | undefined; }[] | undefined; yell_bonus_description?: string | undefined; yell_rank?: number | undefined; }[] | undefined; month_end_date?: number | undefined; month_start_date?: number | undefined; previous_month?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; yell_lp_url?: string | undefined; }> {
    return this.api.season_yellViewersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /season_ratingLive_result
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingLive_resultStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingLive_result({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async season_ratingLive_result(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.season_ratingLive_result(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /season_ratingLive_result (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Season_ratingLive_resultResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.season_ratingLive_resultFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async season_ratingLive_resultFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ broadcast?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; class_list?: { class_end?: number | undefined; class_id?: number | undefined; class_start?: number | undefined; end?: number | undefined; start?: number | undefined; }[] | undefined; comment?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; days_left?: number | undefined; first_look?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; follow?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; gift?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; hours_left?: number | undefined; is_contract_live_result_enabled?: boolean | undefined; is_star?: boolean | undefined; is_star_started?: boolean | undefined; live_duration?: number | undefined; live_id?: string | undefined; others?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; view?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; yell?: { count?: number | undefined; score_per_count?: number | undefined; acquired_score?: number | undefined; overflow?: boolean | undefined; is_new?: boolean | undefined; } | undefined; }> {
    return this.api.season_ratingLive_resultFull(query, extraHeaders, axiosOpts);
  }
}