// Mirrativ/src/managers/AppManager.ts

import { MirrativApi } from '../../source/mirrativApi'
import type {
  AppListStatus,
  AppListResponse,
  AppDetailStatus,
  AppDetailResponse,
  FavoriteStatus,
  FavoriteResponse,
} from '../../source/mirrativApi'

export interface AppSummary {
  app_id: string
  name: string
  icon_url: string
  // 必要に応じて他のプロパティも追加
}

export interface AppDetail {
  app_id: string
  name: string
  description: string
  icon_url: string
  // 必要に応じて他のプロパティも追加
}

export class AppManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### アプリ一覧を１ページ分取得
   * @param page 1〜 のページ番号
   * @returns AppSummary の配列
   */
  public async fetchApps(page = 1): Promise<AppSummary[]> {
    const status: AppListStatus = await this.api.appList({ page })
    return status.apps.map(a => ({
      app_id: a.app_id,
      name: a.name,
      icon_url: a.icon_url,
    }))
  }

  /**
   * ### アプリ一覧を丸ごと取得 (full response)
   * @param page 1〜 のページ番号
   * @returns API の生データ AppListResponse
   */
  public async fetchAppsFull(page = 1): Promise<AppListResponse> {
    return this.api.appListFull({ page })
  }

  /**
   * ### 単一アプリの詳細を取得
   * @param appId アプリID
   * @returns AppDetail
   */
  public async fetchAppDetail(appId: string): Promise<AppDetail> {
    const status: AppDetailStatus = await this.api.appDetail({ app_id: appId })
    return {
      app_id: status.app_id,
      name: status.name,
      description: status.description,
      icon_url: status.icon_url,
    }
  }

  /**
   * ### 単一アプリ詳細を丸ごと取得 (full response)
   * @param appId アプリID
   * @returns API の生データ AppDetailResponse
   */
  public async fetchAppDetailFull(appId: string): Promise<AppDetailResponse> {
    return this.api.appDetailFull({ app_id: appId })
  }

  /**
   * ### アプリをお気に入りに追加
   * @param appId アプリID
   * @returns FavoriteStatus
   */
  public async addFavorite(appId: string): Promise<FavoriteStatus> {
    return this.api.appFavorite({ app_id: appId })
  }

  /**
   * ### お気に入り追加の full-response
   * @param appId アプリID
   * @returns API の生データ FavoriteResponse
   */
  public async addFavoriteFull(appId: string): Promise<FavoriteResponse> {
    return this.api.appFavoriteFull({ app_id: appId })
  }

  /**
   * ### アプリのお気に入りを解除
   * @param appId アプリID
   * @returns FavoriteStatus
   */
  public async removeFavorite(appId: string): Promise<FavoriteStatus> {
    return this.api.appUnfavorite({ app_id: appId })
  }

  /**
   * ### お気に入り解除の full-response
   * @param appId アプリID
   * @returns API の生データ FavoriteResponse
   */
  public async removeFavoriteFull(appId: string): Promise<FavoriteResponse> {
    return this.api.appUnfavoriteFull({ app_id: appId })
  }
}
