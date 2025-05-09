import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * group 関連 API をまとめたマネージャー（8 件）
 */
export class GroupManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### POST /groupEdit
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupEditStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.groupEdit({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async groupEdit(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.groupEdit(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /groupEdit (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { [key: string]: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupEditResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupEditFull({ [key: string]: string; });
   * console.log(res);
   * ```
   */
  async groupEditFull(
    body: { [key: string]: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ group?: { name_edited?: number | undefined; image_urls?: string[] | undefined; name?: string | undefined; user_num?: string | undefined; id?: string | undefined; } | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.groupEditFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /groupInvite_users
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_ids?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupInvite_usersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.groupInvite_users({ user_ids?: string; });
   * console.log(res);
   * ```
   */
  async groupInvite_users(
    body: { user_ids?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.groupInvite_users(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /groupInvite_users (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { user_ids?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupInvite_usersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupInvite_usersFull({ user_ids?: string; });
   * console.log(res);
   * ```
   */
  async groupInvite_usersFull(
    body: { user_ids?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ group?: { name_edited?: number | undefined; image_urls?: string[] | undefined; name?: string | undefined; user_num?: string | undefined; id?: string | undefined; } | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.groupInvite_usersFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /groupLeave
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { group_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupLeaveStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.groupLeave({ group_id?: string; });
   * console.log(res);
   * ```
   */
  async groupLeave(
    body: { group_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.groupLeave(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /groupLeave (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { group_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupLeaveResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupLeaveFull({ group_id?: string; });
   * console.log(res);
   * ```
   */
  async groupLeaveFull(
    body: { group_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.groupLeaveFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /groupUsers
   * 
   * @param query - { group_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupUsersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupUsers({ group_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async groupUsers(
    query?: { group_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.groupUsers(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /groupUsers (full response)
   * 
   * @param query - { group_id?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<GroupUsersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.groupUsersFull({ group_id?: number | undefined });
   * console.log(res);
   * ```
   */
  async groupUsersFull(
    query?: { group_id?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; users?: { profile_image_url?: string | undefined; name?: string | undefined; user_id?: string | undefined; }[] | undefined; }> {
    return this.api.groupUsersFull(query, extraHeaders, axiosOpts);
  }
}