import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** お知らせの主要情報 */
export interface NoticeSummary {
  latestGachaStartAt?: number;
  nextDisplayAt?: number;
  nonDisplayUntil?: number;
  liveStartAt?: number;
  banners: Array<{
    iconUrl?: string;
    url?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    isFocus?: boolean;
  }>;
}

/** フルレスポンス型 */
type RawFull = Awaited<ReturnType<MirrativApi["eventNoticeFull"]>>;

export class EventManager {
  private cache?: { ts: number; data: RawFull };
  private readonly ttlMs = 30_000; // キャッシュ有効期間 30 秒

  constructor(private api: MirrativApi) {}

  /** retry + exponential backoff */
  private async withRetry<T>(
    fn: () => Promise<T>,
    retries = 3,
    delayMs = 200
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

  /** キャッシュクリア */
  public clearCache(): void {
    this.cache = undefined;
  }

  // ── ステータスだけ取得 ─────────────────────────────────

  /**
   * OK/NG とエラーメッセージだけを返します
   */
  public async fetchStatus(
    params?: { type?: number },
    opts?: AxiosRequestConfig
  ): Promise<{ ok: boolean; error?: string }> {
    const res = await this.withRetry(() =>
      this.api.eventNotice(params, undefined, opts)
    );
    return { ok: res.ok === 1, error: res.error };
  }

  // ── フルレスポンス取得（内部キャッシュ付き） ────────────────────────

  private async fetchFull(
    params?: { type?: number },
    opts?: AxiosRequestConfig
  ): Promise<RawFull> {
    if (this.cache && Date.now() - this.cache.ts < this.ttlMs) {
      return this.cache.data;
    }
    const full = await this.withRetry(() =>
      this.api.eventNoticeFull(params, undefined, opts)
    );
    this.cache = { ts: Date.now(), data: full };
    return full;
  }

  // ── シンプルラッパー ──────────────────────────────────────────

  /**
   * お知らせデータを抜き出して返します
   */
  public async getNoticeSummary(
    params?: { type?: number },
    opts?: AxiosRequestConfig
  ): Promise<NoticeSummary> {
    const full = await this.fetchFull(params, opts);

    return {
      latestGachaStartAt: full.latest_gacha_started_at,
      nextDisplayAt: full.display_timing?.next,
      nonDisplayUntil: full.display_timing?.non_display,
      liveStartAt: full.display_timing?.live_start,
      banners: (full.banners ?? []).map((b) => ({
        iconUrl: b.icon_url,
        url: b.url,
        title: b.title,
        description: b.description,
        buttonText: b.button_text,
        isFocus: Boolean(b.is_focus),
      })),
    };
  }
}
