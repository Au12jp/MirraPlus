import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * moderator 関連 API をまとめたマネージャー（4 件）
 */
export class ModeratorManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### POST /moderator/add
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorAddStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.moderatorAdd({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async moderatorAdd(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.moderatorAdd(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /moderator/add (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorAddResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.moderatorAddFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async moderatorAddFull(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ moderator?: { share_url?: string | undefined; profile_image_url?: string | undefined; name?: string | undefined; description?: string | undefined; properties?: Record<string, unknown>[] | undefined; badges?: Record<string, unknown>[] | undefined; profile_frame_image_url?: string | undefined; is_continuous_streamer?: number | undefined; is_new?: number | undefined; is_cheerleader?: number | undefined; user_id?: string | undefined; season_rating?: { class_name?: string | undefined; icon_url?: string | undefined; } | undefined; onlive?: Record<string, unknown> | null | undefined; } | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.moderatorAddFull(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /moderator/delete
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorDeleteStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @throws Error Mirrativ API が `ok = 0` を返した場合
   * @example
   * ```ts
   * const res = await api.moderatorDelete({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async moderatorDelete(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.moderatorDelete(body, extraHeaders, axiosOpts);
  }

  /**
   * ### POST /moderator/delete (full response)
   * *Content-Type**: `application/x-www-form-urlencoded`
   * 
   * @param body - { live_id?: string; user_id?: string; } リクエストボディ
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ModeratorDeleteResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.moderatorDeleteFull({ live_id?: string; user_id?: string; });
   * console.log(res);
   * ```
   */
  async moderatorDeleteFull(
    body: { live_id?: string; user_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; }> {
    return this.api.moderatorDeleteFull(body, extraHeaders, axiosOpts);
  }
}