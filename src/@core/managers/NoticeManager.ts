/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
// import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from "../mirrativApi";

/** 共通ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
}

/** ページネーション付き結果 */
interface PaginatedResult<T> {
  items: T[];
  nextCursor: string | null;
}

/** リトライヘルパー */
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

/** キャンペーン通知 */
interface CampaignNotice {
  id: number;
  text?: string;
  url?: string;
  imageUrl?: string;
  createdAt?: number;
  hasReceivableReward?: boolean;
}

/** ニュース通知 */
interface NewsNotice {
  createdAt: number;
  title?: string;
  text?: string;
  url?: string;
  imageUrl?: string;
}

/** プレゼントボックス */
interface PresentBox {
  userPresentId: number;
  description?: string;
  link?: string;
  createdAt?: number;
}

/**
 * notice 関連 API をまとめたマネージャー（14 件）
 */
export class NoticeManager {
  constructor(private api: MirrativApi) {}

  /**
   * カーソルベースでキャンペーン通知を全件取得
   */
  public async fetchAllCampaignNotices(
    category?: number,
    opts?: AxiosRequestConfig
  ): Promise<CampaignNotice[]> {
    const all: CampaignNotice[] = [];
    let cursor: string | null = null;

    do {
      const res = await withRetry(() =>
        this.api.noticeCampaignsFull(
          cursor ? { category, cursor } : { category },
          undefined,
          opts
        )
      );
      const st = res.status as ApiStatus | undefined;
      if (st?.ok !== 1) throw new Error(st?.error || "Failed fetch campaigns");

      for (const c of res.campaign_notices ?? []) {
        all.push({
          id: c.id ?? NaN,
          text: c.text,
          url: c.url,
          imageUrl: c.image_url,
          createdAt: c.created_at,
          hasReceivableReward: Boolean(c.has_receivable_reward),
        });
      }

      cursor = res.next_cursor ?? null;
    } while (cursor);

    return all;
  }

  /**
   * カーソルベースでニュース通知を全件取得
   */
  public async fetchAllNewsNotices(
    opts?: AxiosRequestConfig
  ): Promise<NewsNotice[]> {
    const all: NewsNotice[] = [];
    let cursor: string | null = null;

    do {
      const res = await withRetry(() =>
        this.api.noticeNewsFull(cursor ? { cursor } : {}, undefined, opts)
      );
      const st = res.status as ApiStatus | undefined;
      if (st?.ok !== 1) throw new Error(st?.error || "Failed fetch news");

      for (const n of res.news_notices ?? []) {
        all.push({
          createdAt: n.created_at ?? 0,
          title: n.title,
          text: n.text,
          url: n.url,
          imageUrl: n.image_url,
        });
      }

      cursor = res.next_cursor ?? null;
    } while (cursor);

    return all;
  }

  /**
   * カーソルベースでプレゼントボックスを全件取得
   */
  public async fetchAllPresentBoxes(
    opts?: AxiosRequestConfig
  ): Promise<PresentBox[]> {
    const all: PresentBox[] = [];
    let cursor: string | null = null;

    do {
      const res = await withRetry(() =>
        this.api.noticePresent_boxesFull(
          cursor ? { cursor } : {},
          undefined,
          opts
        )
      );
      const st = res.status as ApiStatus | undefined;
      if (st?.ok !== 1)
        throw new Error(st?.error || "Failed fetch present boxes");

      for (const p of res.present_boxes ?? []) {
        all.push({
          userPresentId: p.user_present_id ?? NaN,
          description: p.description,
          link: p.link,
          createdAt: p.created_at,
        });
      }

      cursor = res.next_cursor ?? null;
    } while (cursor);

    return all;
  }

  // --- 既存の noticeCampaigns / noticeNews などのメソッドは省略 ---
}
