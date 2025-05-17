import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** ギフト項目 */
export interface GiftItem {
  id: string;
  title?: string;
  smallImageUrl?: string;
  largeImageUrl?: string;
  coins?: number;
  type?: number;
}

/** ギフトパネル内のギフト */
export interface PanelGift {
  id: string;
  title?: string;
  smallImageUrl?: string;
  largeImageUrl?: string;
  coins?: number;
  tickets?: number;
  lockedMessage?: string;
}

/** ギフトパネル */
export interface GiftPanel {
  id: string;
  title?: string;
  iconUrl?: string;
  isFocus: boolean;
  gifts: PanelGift[];
}

/** ギフト送信結果 */
export interface SendGiftResult {
  remainingCoins?: number;
  remainingFreeCoins?: number;
  remainingPaidCoins?: number;
  remainingTickets?: {
    giftGacha?: number;
    roulette?: number;
    ranking?: number;
  };
}

/** re-try付き共通ヘルパー */
async function withRetry<T>(
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

export class GiftManager {
  constructor(private api: MirrativApi) {}

  /** Emomoランギフト一覧を取得 */
  public async listEmomoRunGifts(
    opts?: AxiosRequestConfig
  ): Promise<GiftItem[]> {
    const resp = await withRetry(() =>
      this.api.giftEmomo_run_giftsFull({}, undefined, opts)
    );
    if (resp.status?.ok !== 1) {
      throw new Error(resp.status?.error || "Failed to fetch Emomo gifts");
    }
    return (resp.gifts ?? []).map((g) => ({
      id: g.id ?? "",
      title: g.title,
      smallImageUrl: g.small_image_url,
      largeImageUrl: g.large_image_url,
      coins: g.coins,
      type: g.type,
    }));
  }

  /** ギフトパネルを取得 */
  public async listPanels(
    liveId: string,
    opts?: AxiosRequestConfig
  ): Promise<GiftPanel[]> {
    const resp = await withRetry(() =>
      this.api.giftPanelsFull({ live_id: liveId }, undefined, opts)
    );
    if (resp.status?.ok !== 1) {
      throw new Error(resp.status?.error || "Failed to fetch gift panels");
    }
    return (resp.panels ?? []).map((p) => ({
      id: p.id ?? "",
      title: p.title,
      iconUrl: p.icon_url,
      isFocus: !!p.is_focus,
      gifts: (p.gifts ?? []).map((g) => ({
        id: g.id ?? "",
        title: g.title,
        smallImageUrl: g.small_image_url,
        largeImageUrl: g.large_image_url,
        coins: g.coins,
        tickets: g.tickets,
        lockedMessage: g.locked_message,
      })),
    }));
  }

  /** ギフトを送信 */
  public async sendGift(
    liveId: string,
    giftId: string,
    count: number,
    message?: string,
    panelType?: string,
    panelReasonId?: string,
    opts?: AxiosRequestConfig
  ): Promise<SendGiftResult> {
    const body: Record<string, string> = {
      live_id: liveId,
      gift_id: giftId,
      count: String(count),
    };
    if (message) body.message = message;
    if (panelType) body.panel_type = panelType;
    if (panelReasonId) body.panel_reason_id = panelReasonId;

    const resp = await withRetry(() =>
      this.api.giftSendFull(body, undefined, opts)
    );
    if (resp.status?.ok !== 1) {
      throw new Error(resp.status?.error || "Failed to send gift");
    }
    return {
      remainingCoins: resp.remaining_coins,
      remainingFreeCoins: resp.remaining_free_coins,
      remainingPaidCoins: resp.remaining_paid_coins,
      remainingTickets: resp.remaining_tickets && {
        giftGacha: resp.remaining_tickets.ticket_gift_gacha ?? 0,
        roulette: resp.remaining_tickets.ticket_roulette ?? 0,
        ranking: resp.remaining_tickets.ticket_ranking ?? 0,
      },
    };
  }
}
