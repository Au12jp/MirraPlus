import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * chat 関連 API をまとめたマネージャー（18 件）
 */
export class ChatManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### POST /chat/join
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatJoinStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatJoin({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatJoin(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatJoin(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/join (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatJoinResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatJoinFull({ user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatJoinFull(
    body: { user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ broadcast_key?: string | undefined; last_read_messages?: { last_read_message_id?: string | undefined; invited_message_id?: string | undefined; user_id?: string | undefined; }[] | undefined; broadcast_port?: number | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_kicked_by?: string | undefined; broadcast_secret?: string | undefined; broadcast_host?: string | undefined; }> {
    return this.api.chatJoinFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/post_text
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { text?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_textStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatPost_text({ text?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatPost_text(
    body: { text?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatPost_text(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/post_text (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { text?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_textResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatPost_textFull({ text?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatPost_textFull(
    body: { text?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.chatPost_textFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/read
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { last_message_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatReadStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatRead({ last_message_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatRead(
    body: { last_message_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatRead(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/read (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { last_message_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatReadResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatReadFull({ last_message_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatReadFull(
    body: { last_message_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.chatReadFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /chat/thread
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThread({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async chatThread(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatThread(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /chat/thread (full response)
   * 
   * @param query - { user_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThreadFull({ user_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async chatThreadFull(
    query?: { user_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ messages?: { created_at?: string | undefined; text?: { body?: string | undefined; avatar_image_url?: string | undefined; user_name?: string | undefined; } | undefined; user_id?: string | undefined; type?: string | undefined; id?: string | undefined; }[] | undefined; thread?: { is_visible?: number | undefined; image_urls?: string[] | undefined; user_id?: string | undefined; title?: string | undefined; push_enabled?: string | undefined; } | undefined; has_old?: number | undefined; chat_entire_push_enabled?: string | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; is_kicked_by?: string | undefined; has_new?: number | undefined; }> {
    return this.api.chatThreadFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/thread_visibility
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { group_id?: string; is_visible?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThread_visibilityStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatThread_visibility({ group_id?: string; is_visible?: string; });
   * console.log(res);
   * ```
   */
  async chatThread_visibility(
    body: { group_id?: string; is_visible?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatThread_visibility(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/thread_visibility (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { group_id?: string; is_visible?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThread_visibilityResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThread_visibilityFull({ group_id?: string; is_visible?: string; });
   * console.log(res);
   * ```
   */
  async chatThread_visibilityFull(
    body: { group_id?: string; is_visible?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.chatThread_visibilityFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /chat/threads
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadsStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThreads({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async chatThreads(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatThreads(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /chat/threads (full response)
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatThreadsResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatThreadsFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async chatThreadsFull(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ chat_status?: { is_enabled?: boolean | undefined; require_generation?: boolean | undefined; require_birthday?: boolean | undefined; is_cheer_club_enabled?: boolean | undefined; require_cheer_chat_confirmation_agreement?: boolean | undefined; require_chat_confirmation_agreement?: boolean | undefined; } | undefined; next_page?: Record<string, unknown> | null | undefined; chat_entire_push_enabled?: string | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_page?: number | undefined; threads?: { last_posted_at?: string | undefined; last_message?: string | undefined; unread_num?: string | undefined; is_visible?: number | undefined; is_new?: number | undefined; image_urls?: string[] | undefined; user_id?: string | undefined; title?: string | undefined; push_enabled?: string | undefined; }[] | undefined; }> {
    return this.api.chatThreadsFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/agree
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_agreed?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatAgreeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatAgree({ is_agreed?: string; });
   * console.log(res);
   * ```
   */
  async chatAgree(
    body: { is_agreed?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.chatAgree(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/agree (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { is_agreed?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatAgreeResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatAgreeFull({ is_agreed?: string; });
   * console.log(res);
   * ```
   */
  async chatAgreeFull(
    body: { is_agreed?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ chat_status?: { is_cheer_club_enabled?: boolean | undefined; is_enabled?: boolean | undefined; require_birthday?: boolean | undefined; require_chat_confirmation_agreement?: boolean | undefined; require_cheer_chat_confirmation_agreement?: boolean | undefined; require_generation?: boolean | undefined; } | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.chatAgreeFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/post_thanks
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanksStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatPost_thanks({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatPost_thanks(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatPost_thanks(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/post_thanks (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanksResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatPost_thanksFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async chatPost_thanksFull(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; remaining_present_ticket?: number | undefined; }> {
    return this.api.chatPost_thanksFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/post_thanks_to_live_watched_users
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { custom_thanks_message?: string; live_id?: string; target_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanks_to_live_watched_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.chatPost_thanks_to_live_watched_users({ custom_thanks_message?: string; live_id?: string; target_type?: string; });
   * console.log(res);
   * ```
   */
  async chatPost_thanks_to_live_watched_users(
    body: { custom_thanks_message?: string; live_id?: string; target_type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.chatPost_thanks_to_live_watched_users(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /chat/post_thanks_to_live_watched_users (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { custom_thanks_message?: string; live_id?: string; target_type?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ChatPost_thanks_to_live_watched_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.chatPost_thanks_to_live_watched_usersFull({ custom_thanks_message?: string; live_id?: string; target_type?: string; });
   * console.log(res);
   * ```
   */
  async chatPost_thanks_to_live_watched_usersFull(
    body: { custom_thanks_message?: string; live_id?: string; target_type?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; remaining_present_ticket?: number | undefined; }> {
    return this.api.chatPost_thanks_to_live_watched_usersFull(body, extraHeaders, axiosOpts);
  }
}