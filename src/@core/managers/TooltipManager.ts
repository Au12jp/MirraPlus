/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-var-requires */
import { MirrativApi } from "../mirrativApi";

/**
 * tooltip 関連 API をまとめたマネージャー（2 件）
 */
export class TooltipManager {
  constructor(private api: MirrativApi) {}
  /**
   * tooltip が取得できるまでポーリング（tooltip が null でなくなるまで）
   *
   * @param intervalMs  ポーリング間隔（ミリ秒）
   * @param timeoutMs   タイムアウト（ミリ秒）
   */
  public async waitForTooltip(
    intervalMs = 2000,
    timeoutMs = 60000
  ): Promise<Record<string, unknown>> {
    const start = Date.now();
    while (true) {
      const res = await this.api.tooltipStart_live_buttonFull();
      if (res.status?.ok !== 1) {
        throw new Error(res.status?.error || "Failed to fetch tooltip");
      }
      if (res.tooltip != null) {
        return res.tooltip;
      }
      if (Date.now() - start > timeoutMs) {
        throw new Error(`Tooltip did not appear within ${timeoutMs}ms`);
      }
      await new Promise((r) => setTimeout(r, intervalMs));
    }
  }

  /**
   * 複数クエリで一括取得し、成功・失敗をまとめて返却
   *
   * @param queries  各リクエストの query パラメータ配列
   */
  public async batchFetchTooltips(
    queries: Array<Record<string, any>>
  ): Promise<{
    succeeded: Array<{
      query: Record<string, any>;
      tooltip: Record<string, unknown>;
    }>;
    failed: Array<{ query: Record<string, any>; error: string }>;
  }> {
    const results = await Promise.all(
      queries.map(async (q) => {
        try {
          const res = await this.api.tooltipStart_live_buttonFull(q);
          if (res.status?.ok === 1 && res.tooltip != null) {
            return { query: q, tooltip: res.tooltip };
          } else {
            throw new Error(res.status?.error || "no tooltip");
          }
        } catch (err: any) {
          return { query: q, error: err.message || String(err) };
        }
      })
    );

    return {
      succeeded: results.filter((r): r is any => "tooltip" in r),
      failed: results.filter((r): r is any => "error" in r),
    };
  }

  /**
   * 毎日指定時刻に tooltip をリフレッシュするスケジューラ
   *
   * @param hour JST 時間での実行時刻（0–23）
   * @param minute JST 時間での実行分（0–59）
   * @param callback 取得成功時に呼び出されるコールバック（tooltip を受け取る）
   */
  public scheduleDailyTooltipRefresh(
    hour: number,
    minute: number,
    callback: (tooltip: Record<string, unknown>) => void
  ): void {
    const cron = require("node-cron");
    // cron は UTC ベースなので JST=UTC+9 を引いて設定
    const utcHour = (hour + 24 - 9) % 24;
    const spec = `${minute} ${utcHour} * * *`;
    cron.schedule(
      spec,
      async () => {
        try {
          const tip = await this.waitForTooltip(1000, 30000);
          callback(tip);
        } catch (err) {
          console.error("Daily tooltip refresh failed:", err);
        }
      },
      { timezone: "UTC" }
    );
  }
}
