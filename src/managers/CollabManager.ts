import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * collab 関連 API をまとめたマネージャー（14 件）
 */
export class CollabManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /collabCollaborating_users
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCollaborating_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabCollaborating_users({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async collabCollaborating_users(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.collabCollaborating_users(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /collabCollaborating_users (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCollaborating_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabCollaborating_usersFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async collabCollaborating_usersFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; users?: Record<string, unknown>[] | undefined; }> {
    return this.api.collabCollaborating_usersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabClose
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCloseStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabClose({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async collabClose(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.collabClose(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabClose (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabCloseResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabCloseFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async collabCloseFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.collabCloseFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /collabConnected_streaming_collab_lives
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabConnected_streaming_collab_livesStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabConnected_streaming_collab_lives({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async collabConnected_streaming_collab_lives(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.collabConnected_streaming_collab_lives(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /collabConnected_streaming_collab_lives (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabConnected_streaming_collab_livesResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabConnected_streaming_collab_livesFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async collabConnected_streaming_collab_livesFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; lives?: Record<string, unknown>[] | undefined; }> {
    return this.api.collabConnected_streaming_collab_livesFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /collabInvitable_users
   * 
   * @param query - { live_id?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInvitable_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabInvitable_users({ live_id?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async collabInvitable_users(
    query?: { live_id?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.collabInvitable_users(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /collabInvitable_users (full response)
   * 
   * @param query - { live_id?: string | undefined; page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInvitable_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabInvitable_usersFull({ live_id?: string | undefined; page?: number | undefined });
   * console.log(res);
   * ```
   */
  async collabInvitable_usersFull(
    query?: { live_id?: string; page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ paging?: { current_page?: number | undefined; } | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; users?: Record<string, unknown>[] | undefined; }> {
    return this.api.collabInvitable_usersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabInvite
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { collab_type?: string; invite_user_id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInviteStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabInvite({ collab_type?: string; invite_user_id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async collabInvite(
    body: { collab_type?: string; invite_user_id?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.collabInvite(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabInvite (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { collab_type?: string; invite_user_id?: string; live_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabInviteResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabInviteFull({ collab_type?: string; invite_user_id?: string; live_id?: string; });
   * console.log(res);
   * ```
   */
  async collabInviteFull(
    body: { collab_type?: string; invite_user_id?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.collabInviteFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabSend_to_peer
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabSend_to_peerStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabSend_to_peer({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async collabSend_to_peer(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.collabSend_to_peer(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabSend_to_peer (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabSend_to_peerResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabSend_to_peerFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async collabSend_to_peerFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.collabSend_to_peerFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabStart
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabStartStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.collabStart({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async collabStart(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.collabStart(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /collabStart (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<CollabStartResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.collabStartFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async collabStartFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.collabStartFull(body, extraHeaders, axiosOpts);
  }
}