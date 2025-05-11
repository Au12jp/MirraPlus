import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * graph 関連 API をまとめたマネージャー（20 件）
 */
export class GraphManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### POST /graph/block
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlockStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphBlock({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphBlock(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphBlock(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/block (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlockResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphBlockFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphBlockFull(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.graphBlockFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/blocked_users
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlocked_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphBlocked_users({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphBlocked_users(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphBlocked_users(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/blocked_users (full response)
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphBlocked_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphBlocked_usersFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphBlocked_usersFull(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ blocked_users?: { badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; catalog_label_image_url?: string | undefined; description?: string | undefined; is_able_continuous_stream_holiday?: number | undefined; is_blocking?: number | undefined; is_cheerleader?: number | undefined; is_continuous_streamer?: number | undefined; is_follower?: number | undefined; is_following?: number | undefined; is_moderator?: number | undefined; is_new?: number | undefined; name?: string | undefined; onlive?: { duration?: number | undefined; live_id?: string | undefined; title?: string | undefined; } | undefined; profile_image_url?: string | undefined; properties?: Record<string, unknown>[] | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; share_url?: string | undefined; user_id?: string | undefined; }[] | undefined; current_page?: number | undefined; next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.graphBlocked_usersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/follow
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphFollow({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphFollow(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphFollow(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/follow (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphFollowFull(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.graphFollowFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/followers
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowers({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphFollowers(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphFollowers(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/followers (full response)
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowersFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphFollowersFull(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_page?: number | undefined; followers?: { badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; catalog_label_image_url?: string | undefined; description?: string | undefined; is_blocking?: number | undefined; is_cheerleader?: number | undefined; is_continuous_streamer?: number | undefined; is_follower?: number | undefined; is_following?: number | undefined; is_moderator?: number | undefined; is_new?: number | undefined; name?: string | undefined; onlive?: Record<string, unknown> | null | undefined; profile_image_url?: string | undefined; properties?: Record<string, unknown>[] | undefined; push_enabled?: number | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; share_url?: string | undefined; user_id?: string | undefined; }[] | undefined; next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.graphFollowersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/followings
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowingsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowings({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphFollowings(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphFollowings(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/followings (full response)
   * 
   * @param query - { user_id?: number | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollowingsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollowingsFull({ user_id?: number | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphFollowingsFull(
    query?: { user_id?: number; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_page?: number | undefined; followings?: { badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; description?: string | undefined; is_blocking?: number | undefined; is_cheerleader?: number | undefined; is_continuous_streamer?: number | undefined; is_follower?: number | undefined; is_following?: number | undefined; is_moderator?: number | undefined; is_new?: number | undefined; name?: string | undefined; onlive?: Record<string, unknown> | null | undefined; profile_image_url?: string | undefined; properties?: Record<string, unknown>[] | undefined; push_enabled?: number | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; share_url?: string | undefined; user_id?: string | undefined; }[] | undefined; next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.graphFollowingsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/recommend_users
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphRecommend_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphRecommend_users({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphRecommend_users(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.graphRecommend_users(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/recommend_users (full response)
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphRecommend_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphRecommend_usersFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphRecommend_usersFull(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; users?: { share_url?: string | undefined; profile_image_url?: string | undefined; badges?: Record<string, unknown>[] | undefined; is_new?: number | undefined; is_moderator?: number | undefined; is_follower?: number | undefined; is_cheerleader?: number | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; reason?: Record<string, unknown> | null | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; is_continuous_streamer?: number | undefined; profile_frame_image_url?: string | undefined; is_blocking?: number | undefined; is_following?: number | undefined; user_id?: string | undefined; onlive?: Record<string, unknown> | null | undefined; }[] | undefined; }> {
    return this.api.graphRecommend_usersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/search
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphSearch({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphSearch(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphSearch(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /graph/search (full response)
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphSearchFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async graphSearchFull(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_page?: number | undefined; next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; users?: { badges?: { image_url?: string | undefined; small_image_url?: string | undefined; }[] | undefined; catalog_label_image_url?: string | undefined; description?: string | undefined; is_able_continuous_stream_holiday?: number | undefined; is_blocking?: number | undefined; is_cheerleader?: number | undefined; is_continuous_streamer?: number | undefined; is_follower?: number | undefined; is_following?: number | undefined; is_moderator?: number | undefined; is_new?: number | undefined; name?: string | undefined; onlive?: Record<string, unknown> | null | undefined; profile_image_url?: string | undefined; properties?: Record<string, unknown>[] | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; share_url?: string | undefined; user_id?: string | undefined; }[] | undefined; }> {
    return this.api.graphSearchFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/unblock
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnblockStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphUnblock({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphUnblock(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphUnblock(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/unblock (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnblockResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphUnblockFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphUnblockFull(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.graphUnblockFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/unfollow
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnfollowStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphUnfollow({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphUnfollow(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.graphUnfollow(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/unfollow (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphUnfollowResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphUnfollowFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async graphUnfollowFull(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.graphUnfollowFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/follow_live_watched_users
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollow_live_watched_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.graphFollow_live_watched_users({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async graphFollow_live_watched_users(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.graphFollow_live_watched_users(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /graph/follow_live_watched_users (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GraphFollow_live_watched_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.graphFollow_live_watched_usersFull({ live_id?: string; });
   * console.log(res);
   * ```
   */
  async graphFollow_live_watched_usersFull(
    body: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.graphFollow_live_watched_usersFull(body, extraHeaders, axiosOpts);
  }
}