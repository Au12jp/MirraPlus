import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * karaoke 関連 API をまとめたマネージャー（12 件）
 */
export class KaraokeManager {
  constructor(private api: MirrativApi) {}

  /**
   * ### GET /karaoke
   * 
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaoke({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaoke(
    query?: { page?: number; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.karaoke(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaoke (full response)
   * 
   * @param query - { page?: number | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeFull({ page?: number | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaokeFull(
    query?: { page?: number; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_page?: number | undefined; karaokes?: { composer?: string | undefined; genre_ids?: number[] | undefined; id?: string | undefined; lyricist?: string | undefined; playing_time?: number | undefined; singer_id?: string | undefined; singer_name?: string | undefined; title?: string | undefined; }[] | undefined; next_page?: number | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.karaokeFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeBy_genre
   * 
   * @param query - { page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeBy_genreStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeBy_genre({ page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaokeBy_genre(
    query?: { page?: number; genre_id?: number; where?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.karaokeBy_genre(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeBy_genre (full response)
   * 
   * @param query - { page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeBy_genreResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeBy_genreFull({ page?: number | undefined; genre_id?: number | undefined; where?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaokeBy_genreFull(
    query?: { page?: number; genre_id?: number; where?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ next_page?: Record<string, unknown> | null | undefined; previous_page?: Record<string, unknown> | null | undefined; status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; current_page?: number | undefined; karaokes?: { playing_time?: string | undefined; genre_ids?: string[] | undefined; lyricist?: string | undefined; singer_name?: string | undefined; id?: string | undefined; title?: string | undefined; composer?: string | undefined; singer_id?: string | undefined; }[] | undefined; }> {
    return this.api.karaokeBy_genreFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeGenres
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeGenresStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeGenres({});
   * console.log(res);
   * ```
   */
  async karaokeGenres(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; }> {
    return this.api.karaokeGenres(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeGenres (full response)
   * 
   * @param query - Record<string, any> URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeGenresResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeGenresFull({});
   * console.log(res);
   * ```
   */
  async karaokeGenresFull(
    query?: Record<string, any> | undefined,
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ status?: { msg?: string | undefined; ok?: number | undefined; error?: string | undefined; captcha_url?: string | undefined; error_code?: number | undefined; message?: string | undefined; } | undefined; genres?: { banner_big_image_url?: string | undefined; name?: string | undefined; id?: string | undefined; banner_small_image_url?: string | undefined; text_image_url?: string | undefined; }[] | undefined; }> {
    return this.api.karaokeGenresFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeRecommend_singers
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeRecommend_singersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeRecommend_singers({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaokeRecommend_singers(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.karaokeRecommend_singers(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeRecommend_singers (full response)
   * 
   * @param query - { live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeRecommend_singersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeRecommend_singersFull({ live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaokeRecommend_singersFull(
    query?: { live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ recommend_singers?: Record<string, unknown>[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.karaokeRecommend_singersFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeSearch
   * 
   * @param query - { q?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSearchStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSearch({ q?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaokeSearch(
    query?: { q?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.karaokeSearch(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeSearch (full response)
   * 
   * @param query - { q?: string | undefined; live_id?: string | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSearchResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSearchFull({ q?: string | undefined; live_id?: string | undefined });
   * console.log(res);
   * ```
   */
  async karaokeSearchFull(
    query?: { q?: string; live_id?: string; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ karaokes?: { composer?: string | undefined; genre_ids?: number[] | undefined; id?: string | undefined; lyricist?: string | undefined; playing_time?: number | undefined; singer_id?: string | undefined; singer_name?: string | undefined; title?: string | undefined; }[] | undefined; singers?: { id?: string | undefined; kana?: string | undefined; name?: string | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.karaokeSearchFull(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeSingers
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSingersStatus> ステータスのみを返します
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSingers({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async karaokeSingers(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; }> {
    return this.api.karaokeSingers(query, extraHeaders, axiosOpts);
  }

  /**
   * ### GET /karaokeSingers (full response)
   * 
   * @param query - { page?: number | undefined } URL クエリパラメータ (任意)
   * @param extraHeaders 追加ヘッダー (任意)
   * @param axiosOpts   Axios オプション (任意)
   * @returns Promise<KaraokeSingersResponse>
   * @throws AxiosError ネットワーク／HTTP エラー
   * @example
   * ```ts
   * const res = await api.karaokeSingersFull({ page?: number | undefined });
   * console.log(res);
   * ```
   */
  async karaokeSingersFull(
    query?: { page?: number; },
    extraHeaders?: Record<string, string> | undefined,
    axiosOpts?: AxiosRequestConfig<any> | undefined,
  ): Promise<{ current_page?: number | undefined; next_page?: number | undefined; singers?: { id?: string | undefined; kana?: string | undefined; name?: string | undefined; }[] | undefined; status?: { ok?: number | undefined; error?: string | undefined; error_code?: number | undefined; } | undefined; }> {
    return this.api.karaokeSingersFull(query, extraHeaders, axiosOpts);
  }
}