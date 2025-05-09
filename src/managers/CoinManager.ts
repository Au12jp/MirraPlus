import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * coin 関連 API をまとめたマネージャー（2 件）
 */
export class CoinManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /coin_boxStatus
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Coin_boxStatusStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.coin_boxStatus({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async coin_boxStatus(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.coin_boxStatus(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /coin_boxStatus (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<Coin_boxStatusResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.coin_boxStatusFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async coin_boxStatusFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ box_status?: { box_availability_status?: number | undefined; open_count?: number | undefined; open_count_by_streamer?: number | undefined; } | undefined; comment_threshold?: number | undefined; lp_url?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; watching_time_threshold?: number | undefined; }> {
    return this.api.coin_boxStatusFull(query, extraHeaders, axiosOpts);
  }
}