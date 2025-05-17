import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 契約サマリーの主要情報 */
export interface ContractSummary {
  isContractEnabled: boolean;
  currentGrade?: number;
  currentMonth?: number;
  nextPayDate?: number;
  kycUrl?: string;
}

/** フルレスポンス用型 */
type RawFull = ReturnType<MirrativApi["contractSummaryFull"]> extends Promise<
  infer R
>
  ? R
  : never;

export class ContractManager {
  private cache?: { ts: number; data: RawFull };
  private readonly ttlMs = 10_000; // キャッシュ有効期間 10 秒

  constructor(private api: MirrativApi) {}

  /** retry + exponential backoff */
  private async withRetry<T>(
    fn: () => Promise<T>,
    retries = 3,
    delayMs = 300
  ): Promise<T> {
    let lastErr: unknown;
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (e) {
        lastErr = e;
        await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
      }
    }
    throw lastErr;
  }

  /** キャッシュをクリア */
  public clearCache(): void {
    this.cache = undefined;
  }

  // ── ステータスだけ取得（OK/NG） ─────────────────────────────────

  public async fetchStatus(
    params?: Record<string, any>,
    opts?: AxiosRequestConfig
  ): Promise<{ ok: boolean; error?: string }> {
    const res = await this.withRetry(() =>
      this.api.contractSummary(params, undefined, opts)
    );
    return { ok: res.ok === 1, error: res.error };
  }

  // ── フルレスポンス取得（内部キャッシュ付き） ────────────────────────

  private async fetchFull(
    params?: Record<string, any>,
    opts?: AxiosRequestConfig
  ): Promise<RawFull> {
    if (this.cache && Date.now() - this.cache.ts < this.ttlMs) {
      return this.cache.data;
    }
    const full = await this.withRetry(() =>
      this.api.contractSummaryFull(params, undefined, opts)
    );
    this.cache = { ts: Date.now(), data: full };
    return full;
  }

  // ── シンプルラッパー ──────────────────────────────────────────

  /**
   * 契約の有効状況や次回支払日など、主要フィールドだけ抜き出して返します
   */
  public async getSummary(
    params?: Record<string, any>,
    opts?: AxiosRequestConfig
  ): Promise<ContractSummary> {
    const full = await this.fetchFull(params, opts);
    return {
      isContractEnabled: Boolean(full.is_contract_enable),
      currentGrade: full.current_grade,
      currentMonth: full.current_month,
      nextPayDate: full.current_next_pay_date,
      kycUrl: full.kyc_url,
    };
  }
}
