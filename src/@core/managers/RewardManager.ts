/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
// src/services/RewardManager.ts

import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** ==== 共通ヘルパ === */

interface ApiStatus {
  ok?: number;
  error?: string;
}

async function withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

/** ==== 統計クラス ==== */

export class Stats {
  static mean(xs: number[]): number {
    return xs.reduce((a, b) => a + b, 0) / xs.length;
  }
  static stdDev(xs: number[]): number {
    const μ = this.mean(xs);
    return Math.sqrt(xs.reduce((s, x) => s + (x - μ) ** 2, 0) / xs.length);
  }
  static histogram(xs: number[]): Record<number, number> {
    const h: Record<number, number> = {};
    for (const x of xs) h[x] = (h[x] || 0) + 1;
    return h;
  }
  static empiricalCdf(xs: number[]): Record<number, number> {
    const h = this.histogram(xs);
    const keys = Object.keys(h)
      .map(Number)
      .sort((a, b) => a - b);
    const cdf: Record<number, number> = {};
    let cum = 0,
      total = xs.length;
    for (const k of keys) {
      cum += h[k];
      cdf[k] = cum / total;
    }
    return cdf;
  }
}

/** ==== 経験的分布 (1〜30 コイン) ==== */

export class EmpiricalDistribution {
  private dist = Array(30).fill(1 / 30);

  constructor(samples?: number[]) {
    if (samples) this.update(samples);
  }

  update(samples: number[]): void {
    const cnt = Array(30).fill(0);
    for (const s of samples) if (s >= 1 && s <= 30) cnt[s - 1]++;
    const tot = cnt.reduce((a, b) => a + b, 0);
    this.dist = tot ? cnt.map((c) => c / tot) : Array(30).fill(1 / 30);
  }

  /** 単一値の確率 P(X = n) */
  probability(n: number): number {
    return n >= 1 && n <= 30 ? this.dist[n - 1] : 0;
  }

  /** 累積確率 P(X ≤ n) */
  cdf(n: number): number {
    if (n < 1) return 0;
    if (n >= 30) return 1;
    return this.dist.slice(0, n).reduce((a, b) => a + b, 0);
  }

  /** 分布に従うサンプリング */
  sample(): number {
    const r = Math.random();
    let cum = 0;
    for (let i = 0; i < 30; i++) {
      cum += this.dist[i];
      if (r <= cum) return i + 1;
    }
    return 30;
  }
}

/** ==== RewardManager ==== */

export class RewardManager {
  private api: MirrativApi;
  private dist: EmpiricalDistribution;

  /**
   * @param api               MirrativApi インスタンス (省略時は内部で生成)
   * @param historicalSamples 過去のコイン取得サンプル (1～30 の配列)
   */
  constructor(api?: MirrativApi, samples?: number[]) {
    this.api = api ?? new MirrativApi();
    this.dist = new EmpiricalDistribution(samples);
  }

  /** ───────── 自動収集スケジューラ ───────── */
  public scheduleDailyCollection(): void {
    const cron = require("node-cron");
    cron.schedule(
      "0 4 * * *",
      () => {
        for (let i = 0; i < 15; i++) {
          setTimeout(
            () =>
              this.runCollectAdsWithStats().catch((e) =>
                console.error(`[TRY ${i + 1}]`, e)
              ),
            i * 10 * 60 * 1000
          );
        }
      },
      { timezone: "Asia/Tokyo" }
    );
  }

  /** ───────── 単発で広告を回して統計更新 ───────── */
  public async runCollectAdsWithStats(
    opts?: AxiosRequestConfig
  ): Promise<void> {
    const ids = await this.fetchAvailableAdIds(opts);
    const coinsGot: number[] = [];
    for (const id of ids) {
      const { coins, remaining } = await this.runSingleAd(id, opts);
      coinsGot.push(coins);
      console.log(`広告 ${id}: ${coins} コイン, 残り ${remaining} 回`);
    }
    if (!coinsGot.length) return;

    console.log("=== 収集統計 ===");
    console.log(`件数: ${coinsGot.length}`);
    console.log(`合計: ${coinsGot.reduce((a, b) => a + b, 0)}`);
    console.log(`平均: ${Stats.mean(coinsGot).toFixed(2)}`);
    console.log(`σ  : ${Stats.stdDev(coinsGot).toFixed(2)}`);
    console.table(Stats.histogram(coinsGot));
    console.table(Stats.empiricalCdf(coinsGot));

    this.dist.update(coinsGot);
  }

  /**
   * ───────── 単一広告実行 & 残り回数解析 ─────────
   * @returns 取得コイン数と、説明文から抽出した残りチャレンジ回数
   */
  public async runSingleAd(
    rewardId: number,
    opts?: AxiosRequestConfig
  ): Promise<{ coins: number; remaining: number }> {
    const res = await withRetry(() =>
      this.api.reward_adCompleteFull(
        { reward_id: String(rewardId) },
        undefined,
        opts
      )
    );
    const title = res.title ?? "";
    const coins = parseInt(title.replace(/\D/g, ""), 10) || 0;
    const desc = res.description ?? "";
    const m = desc.match(/後\s*(\d+)\s*回/);
    const remaining = m ? parseInt(m[1], 10) : 0;
    return { coins, remaining };
  }

  /** ───────── 利用可能広告ID一覧取得 ───────── */
  public async fetchAvailableAdIds(
    opts?: AxiosRequestConfig
  ): Promise<number[]> {
    const avail = await withRetry(() =>
      this.api.reward_adAvailable_reward_ad_idsFull(
        { mode: 1 },
        undefined,
        opts
      )
    );
    const st = avail.status as ApiStatus | undefined;
    if (st?.ok !== 1 || !Array.isArray(avail.reward_ad_ids)) {
      throw new Error(st?.error || "広告ID取得に失敗");
    }
    return avail.reward_ad_ids.map(Number);
  }

  /**
   * ───────── 全IDを一括実行（残りゼロ or 上限到達まで） ─────────
   * @returns 実行したIDと取得コイン数のリスト
   */
  public async collectUntilEmpty(
    opts?: AxiosRequestConfig
  ): Promise<Array<{ id: number; coins: number }>> {
    const result: Array<{ id: number; coins: number }> = [];
    const ids = await this.fetchAvailableAdIds(opts);
    for (const id of ids) {
      const { coins, remaining } = await this.runSingleAd(id, opts);
      result.push({ id, coins });
      if (remaining <= 0) break;
    }
    return result;
  }

  /** ───────── 経験的分布ベースの操作 ───────── */
  public coinDropProbability(n: number): number {
    return this.dist.probability(n);
  }
  public coinDropCdf(n: number): number {
    return this.dist.cdf(n);
  }
  public sampleCoin(): number {
    return this.dist.sample();
  }
}
