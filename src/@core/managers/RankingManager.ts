import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * ranking 関連 API をまとめたマネージャー（4 件）
 */
export class RankingManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### GET /ranking/focusable
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingFocusableStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingFocusable({});
   * console.log(res);
   * ```
   */
  async rankingFocusable(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.rankingFocusable(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /ranking/focusable (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingFocusableResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingFocusableFull({});
   * console.log(res);
   * ```
   */
  async rankingFocusableFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ rankings?: { event_id?: string | undefined; event_type?: number | undefined; image_url?: string | undefined; is_focus?: boolean | undefined; period?: string | undefined; title?: string | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.rankingFocusableFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /ranking/user_detail
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingUser_detailStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingUser_detail({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async rankingUser_detail(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.rankingUser_detail(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /ranking/user_detail (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<RankingUser_detailResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.rankingUser_detailFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async rankingUser_detailFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ rankings?: { is_app_event?: boolean | undefined; event_id?: number | undefined; event_title?: string | undefined; event_icon_url?: string | undefined; total_point?: number | undefined; rank?: number | undefined; rank_text?: string | undefined; ranking_point?: number | undefined; banner_icon_image_url?: string | undefined; banner_icon_link_url?: string | undefined; reward_icon_url?: string | undefined; reward_achieved_point?: number | undefined; reward_need_point?: number | undefined; is_focus?: boolean | undefined; nano_time?: number | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.rankingUser_detailFull(query, extraHeaders, axiosOpts);
  }
}