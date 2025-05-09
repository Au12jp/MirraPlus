import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * contract 関連 API をまとめたマネージャー（2 件）
 */
export class ContractManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /contractSummary
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ContractSummaryStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.contractSummary({});
   * console.log(res);
   * ```
   */
  async contractSummary(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.contractSummary(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /contractSummary (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<ContractSummaryResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.contractSummaryFull({});
   * console.log(res);
   * ```
   */
  async contractSummaryFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ account_status?: number | undefined; account_url?: string | undefined; broadcast_fee?: { cash?: number | undefined; cash_unit?: number | undefined; class_id?: number | undefined; monthly_cash_limit?: number | undefined; } | undefined; cash?: number | undefined; coin_from_cash?: number | undefined; contract_accept_end_date?: number | undefined; contract_accept_start_date?: number | undefined; contract_cash_rate?: number | undefined; contract_coin_rate?: number | undefined; contract_grade?: number | undefined; contract_month?: number | undefined; contract_month_end_date?: number | undefined; contract_month_pay_date?: number | undefined; contract_month_start_date?: number | undefined; contract_status?: number | undefined; current_cash_rate?: number | undefined; current_cash_rate_v2?: { app?: number | undefined; web?: number | undefined; } | undefined; current_coin_rate?: number | undefined; current_contract_status?: number | undefined; current_grade?: number | undefined; current_month?: number | undefined; current_month_end_date?: number | undefined; current_month_pay_date?: number | undefined; current_month_start_date?: number | undefined; current_next_pay_date?: number | undefined; current_payment_type?: number | undefined; free_coin_change_rate?: number | undefined; gift?: { cash?: number | undefined; } | undefined; how_to_page_url?: string | undefined; is_contract_enable?: boolean | undefined; is_handover_code_required?: boolean | undefined; is_visible_history?: boolean | undefined; is_visible_ranking?: boolean | undefined; kyc_status?: number | undefined; kyc_url?: string | undefined; main_image_url?: string | undefined; paid_cash?: number | undefined; paid_coin_change_rates?: Record<string, unknown>[] | undefined; payment_start_date?: number | undefined; payment_type?: number | undefined; ranking_grade?: number | undefined; ranking_month?: number | undefined; ranking_month_end_date?: number | undefined; ranking_month_from_date?: number | undefined; ranking_month_start_date?: number | undefined; ranking_month_to_date?: number | undefined; ranking_rank?: number | undefined; ranking_score?: number | undefined; season?: { class_end?: number | undefined; class_id?: number | undefined; class_start?: number | undefined; current?: number | undefined; month?: number | undefined; season_duration?: string | undefined; } | undefined; star?: Record<string, unknown> | null | undefined; star_category?: number | undefined; star_page_url?: string | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; tax?: number | undefined; terms_page_url?: string | undefined; total_cash?: number | undefined; valid_payment_start_date?: number | undefined; }> {
    return this.api.contractSummaryFull(query, extraHeaders, axiosOpts);
  }
}