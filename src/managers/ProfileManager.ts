// Mirrativ/src/managers/ProfileManager.ts

import { MirrativApi } from '../../source/mirrativApi'
import type {
  ProfileStatus,
  ProfileResponse,
  ProfileUpdateStatus,
  ProfileUpdateResponse,
  AvatarUpdateStatus,
  AvatarUpdateResponse,
} from '../../source/mirrativApi'

export interface UserProfile {
  user_id: string
  display_name: string
  bio: string
  avatar_url: string
  // 必要に応じて他のフィールドも追加
}

export class ProfileManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### ユーザープロフィール取得
   * @returns UserProfile
   */
  public async fetchProfile(): Promise<UserProfile> {
    const status: ProfileStatus = await this.api.userProfile()
    return {
      user_id: status.user_id,
      display_name: status.display_name,
      bio: status.bio,
      avatar_url: status.avatar_url,
    }
  }

  /**
   * ### ユーザープロフィール取得 (full response)
   * @returns API 生レスポンスの ProfileResponse
   */
  public async fetchProfileFull(): Promise<ProfileResponse> {
    return this.api.userProfileFull()
  }

  /**
   * ### プロフィール更新
   * @param params 更新データ ({ display_name?, bio? })
   * @returns ProfileUpdateStatus
   */
  public async updateProfile(params: {
    display_name?: string
    bio?: string
  }): Promise<ProfileUpdateStatus> {
    return this.api.userProfileUpdate(params)
  }

  /**
   * ### プロフィール更新 (full response)
   * @param params 更新データ ({ display_name?, bio? })
   * @returns API 生レスポンスの ProfileUpdateResponse
   */
  public async updateProfileFull(params: {
    display_name?: string
    bio?: string
  }): Promise<ProfileUpdateResponse> {
    return this.api.userProfileUpdateFull(params)
  }

  /**
   * ### アバター画像更新
   * @param fileData multipart/form-data にした Blob か Buffer
   * @returns AvatarUpdateStatus
   */
  public async updateAvatar(
    fileData: Blob | Buffer
  ): Promise<AvatarUpdateStatus> {
    return this.api.userAvatarUpdate({ file: fileData })
  }

  /**
   * ### アバター画像更新 (full response)
   * @param fileData multipart/form-data にした Blob か Buffer
   * @returns API 生レスポンスの AvatarUpdateResponse
   */
  public async updateAvatarFull(
    fileData: Blob | Buffer
  ): Promise<AvatarUpdateResponse> {
    return this.api.userAvatarUpdateFull({ file: fileData })
  }
}
