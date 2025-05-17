import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** 共通 API ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
}

/** カラオケ曲情報 */
export interface KaraokeItem {
  id: string;
  title?: string;
  singerName?: string;
  playingTime?: number;
  composer?: string;
  lyricist?: string;
  genreIds?: number[];
}

/** ページネーション付きカラオケ一覧 */
export interface PaginatedKaraokes {
  currentPage: number;
  nextPage: number | null;
  items: KaraokeItem[];
}

/** バッチ結果 */
export interface BatchResult {
  succeeded: string[];
  failed: string[];
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

/**
 * karaoke 関連 API をまとめたマネージャー
 */
export class KaraokeManager {
  constructor(private api: MirrativApi) {}

  // ── ユーティリティ／複雑処理メソッド ────────────────────────────────

  /**
   * 単一ページのカラオケ曲を取得（ページネーション付き）
   */
  public async fetchKaraokePage(
    page = 1,
    liveId?: string,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedKaraokes> {
    const resp = await withRetry(() =>
      this.api.karaokeFull({ live_id: liveId }, undefined, {
        ...opts,
        params: { page, live_id: liveId },
      })
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1) {
      throw new Error(status?.error || "Failed to fetch karaoke list");
    }
    const items = (resp.karaokes ?? []).map((k) => ({
      id: String(k.id),
      title: k.title,
      singerName: k.singer_name,
      playingTime: k.playing_time,
      composer: k.composer,
      lyricist: k.lyricist,
      genreIds: k.genre_ids,
    }));
    return {
      currentPage: page,
      nextPage: resp.next_page && resp.next_page > page ? resp.next_page : null,
      items,
    };
  }

  /**
   * 全ページからカラオケ曲を取得（一括フェッチ）
   */
  public async fetchAllKaraokes(
    liveId?: string,
    opts?: AxiosRequestConfig
  ): Promise<KaraokeItem[]> {
    const all: KaraokeItem[] = [];
    let page = 1,
      next: number | null = null;

    do {
      const paged = await this.fetchKaraokePage(page, liveId, opts);
      all.push(...paged.items);
      next = paged.nextPage;
      if (next) page = next;
    } while (next !== null);

    return all;
  }

  /**
   * ジャンル単位の単一ページ取得
   */
  public async fetchByGenrePage(
    genreId: number,
    page = 1,
    liveId?: string,
    opts?: AxiosRequestConfig
  ): Promise<PaginatedKaraokes> {
    const resp = await withRetry(() =>
      this.api.karaokeBy_genreFull({ genre_id: genreId }, undefined, {
        ...opts,
        params: { page, genre_id: genreId, live_id: liveId },
      })
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1) {
      throw new Error(status?.error || "Failed to fetch karaoke by genre");
    }
    const items = (resp.karaokes ?? []).map((k) => ({
      id: String(k.id),
      title: k.title,
      singerName: k.singer_name,
      playingTime:
        typeof k.playing_time === "string" ? Number(k.playing_time) : undefined,
      composer: k.composer,
      lyricist: k.lyricist,
      genreIds: k.genre_ids?.map((id) => Number(id)),
    }));
    return {
      currentPage: page,
      nextPage: ((resp.next_page as unknown) as number) ?? null,
      items,
    };
  }

  /**
   * 全ジャンルページ一括取得
   */
  public async fetchAllByGenre(
    genreId: number,
    liveId?: string,
    opts?: AxiosRequestConfig
  ): Promise<KaraokeItem[]> {
    const all: KaraokeItem[] = [];
    let page = 1,
      next: number | null = null;
    do {
      const p = await this.fetchByGenrePage(genreId, page, liveId, opts);
      all.push(...p.items);
      next = p.nextPage;
      if (next) page = next;
    } while (next !== null);
    return all;
  }

  /**
   * キーワード検索＋全ページ取得
   */
  public async searchAllKaraokes(
    q: string,
    liveId?: string,
    opts?: AxiosRequestConfig
  ): Promise<KaraokeItem[]> {
    const all: KaraokeItem[] = [];
    let page = 1,
      hasNext = true;

    while (hasNext) {
      const resp = await withRetry(() =>
        this.api.karaokeSearchFull({ q, live_id: liveId }, undefined, {
          ...opts,
          params: { q, live_id: liveId, page },
        })
      );
      const status = resp.status as ApiStatus | undefined;
      if (status?.ok !== 1) throw new Error(status?.error || "Search failed");
      const items = (resp.karaokes ?? []).map((k) => ({
        id: String(k.id),
        title: k.title,
        singerName: k.singer_name,
        playingTime: k.playing_time,
        composer: k.composer,
        lyricist: k.lyricist,
        genreIds: k.genre_ids,
      }));
      all.push(...items);
      hasNext = !!resp.karaokes && items.length > 0;
      page++;
    }

    return all;
  }

  /**
   * おすすめ歌手一覧を取得
   */
  public async getRecommendedSingers(
    liveId?: string,
    opts?: AxiosRequestConfig
  ): Promise<Array<{ id: string; name?: string }>> {
    const resp = await withRetry(() =>
      this.api.karaokeRecommend_singersFull(
        { live_id: liveId },
        undefined,
        opts
      )
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1) {
      throw new Error(status?.error || "Failed to fetch recommended singers");
    }
    return (resp.recommend_singers ?? []).map((s) => ({
      id: String((s as any).id),
      name: (s as any).name,
    }));
  }

  /**
   * 歌手一覧を全ページ取得
   */
  public async fetchAllSingers(
    opts?: AxiosRequestConfig
  ): Promise<Array<{ id: string; name?: string; kana?: string }>> {
    const all: Array<{ id: string; name?: string; kana?: string }> = [];
    let page = 1,
      hasNext = true;

    while (hasNext) {
      const resp = await withRetry(() =>
        this.api.karaokeSingersFull({}, undefined, {
          ...opts,
          params: { page },
        })
      );
      const status = resp.status as ApiStatus | undefined;
      if (status?.ok !== 1)
        throw new Error(status?.error || "Failed to fetch singers");
      const singers = (resp.singers ?? []).map((s) => ({
        id: String(s.id),
        name: s.name,
        kana: s.kana,
      }));
      all.push(...singers);
      hasNext = !!resp.next_page && singers.length > 0;
      page++;
    }

    return all;
  }

  /**
   * 複数ジャンルのカラオケ曲を一括フェッチし、マージして返す
   */
  public async batchFetchMultipleGenres(
    genreIds: number[],
    liveId?: string,
    opts?: AxiosRequestConfig
  ): Promise<KaraokeItem[]> {
    const results = await Promise.all(
      genreIds.map((id) => this.fetchAllByGenre(id, liveId, opts))
    );
    // 重複除去してフラット化
    const map = new Map<string, KaraokeItem>();
    for (const list of results) {
      for (const item of list) {
        map.set(item.id, item);
      }
    }
    return Array.from(map.values());
  }
}
