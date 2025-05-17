/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/**
 * lp 関連 API をまとめたマネージャー（2 件）
 */
export class LpManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /lp/watchword/register
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LpWatchwordRegisterStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.lpWatchwordRegister({});
   * console.log(res);
   * ```
   */
  async lpWatchwordRegister(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined
  ): Promise<never> {
    return this.api.lpWatchwordRegister(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /lp/watchword/register (full response)
   *
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<LpWatchwordRegisterResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.lpWatchwordRegisterFull({});
   * console.log(res);
   * ```
   */
  async lpWatchwordRegisterFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined
  ): Promise<{}> {
    return this.api.lpWatchwordRegisterFull(query, extraHeaders, axiosOpts);
  }
}
