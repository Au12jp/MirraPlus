// Mirrativ/src/managers/ChatManager.ts

import { AxiosResponse } from 'axios'
import { MirrativApi } from '../../source/mirrativApi'
import type {
  ChatThreadsStatus,
  ChatThreadsResponse,
  ChatThreadStatus,
  ChatThreadResponse,
  ChatJoinStatus,
  ChatReadStatus,
} from "../../source/mirrativApi"

export interface ThreadSummary {
  user_id: string
  last_message_id: string
  unread_count: number
}

export interface ThreadDetail {
  messages: Array<{
    message_id: string
    sender_id: string
    body: string
    timestamp: string
  }>
  unread_count: number
}

export class ChatManager {
  constructor(private api: MirrativApi) { }

  /**
   * ### スレッド一覧を１ページ分まとめて取得
   * @param page 1〜 のページ番号
   * @returns ステータスのみを整形した ThreadSummary の配列
   */
  public async fetchThreads(page = 1): Promise<ThreadSummary[]> {
    const status: ChatThreadsStatus = await this.api.chatThreads({ page })
    return status.threads.map(t => ({
      user_id: t.user_id,
      last_message_id: t.last_message_id,
      unread_count: t.unread_count,
    }))
  }

  /**
   * ### スレッド一覧を１ページ分まるごと取得 (full response)
   * @param page 1〜 のページ番号
   * @returns axios の生レスポンス (`data` に ChatThreadsFullResponse)
   */
  public async fetchThreadsFull(
    page = 1
  ): Promise<AxiosResponse<ChatThreadsResponse>> {
    return this.api.chatThreadsFull({ page })
  }

  /**
   * ### 全ページ分のスレッド一覧を取得
   * @returns 全ページを結合した ThreadSummary の配列
   */
  public async fetchAllThreads(): Promise<ThreadSummary[]> {
    const all: ThreadSummary[] = []
    let page = 1

    while (true) {
      const pageItems = await this.fetchThreads(page)
      if (pageItems.length === 0) break
      all.push(...pageItems)
      page++
    }

    return all
  }

  /**
   * ### 特定ユーザーとのチャットスレッド詳細を取得
   * @param userId 相手のユーザーID
   * @returns ステータスのみを整形した ThreadDetail
   */
  public async fetchThreadDetail(userId: string): Promise<ThreadDetail> {
    const res: ChatThreadStatus = await this.api.chatThread({ user_id: userId })
    return {
      messages: res.messages.map(m => ({
        message_id: m.message_id,
        sender_id: m.sender_id,
        body: m.body,
        timestamp: m.timestamp,
      })),
      unread_count: res.unread_count,
    }
  }

  /**
   * ### 特定ユーザーとのチャットスレッド詳細をまるごと取得 (full response)
   * @param userId 相手のユーザーID
   * @returns axios 生レスポンス (`data` に ChatThreadFullResponse)
   */
  public async fetchThreadDetailFull(
    userId: string
  ): Promise<AxiosResponse<ChatThreadFullResponse>> {
    return this.api.chatThreadFull({ user_id: userId })
  }

  /**
   * ### 指定ユーザーのスレッドに参加 (チャットルーム生成／参加)
   * @param userId 相手のユーザーID
   */
  public async joinThread(userId: string): Promise<ChatJoinStatus> {
    return this.api.chatJoin({ user_id: userId })
  }

  /**
   * ### 参加 API の full-response
   * @param userId 相手のユーザーID
   * @returns axios 生レスポンス (`data` に ChatJoinStatus)
   */
  public async joinThreadFull(
    userId: string
  ): Promise<AxiosResponse<ChatJoinStatus>> {
    return this.api.chatJoinFull({ user_id: userId })
  }

  /**
   * ### 最後のメッセージIDまで既読化
   * @param userId 対象ユーザーID
   * @param lastMessageId 最後まで読んだ message_id
   */
  public async markAsRead(
    userId: string,
    lastMessageId: string
  ): Promise<ChatReadStatus> {
    return this.api.chatRead({
      user_id: userId,
      last_message_id: lastMessageId,
    })
  }

  /**
   * ### 既読化 API の full-response
   * @param userId 対象ユーザーID
   * @param lastMessageId 最後まで読んだ message_id
   * @returns axios 生レスポンス (`data` に ChatReadStatus)
   */
  public async markAsReadFull(
    userId: string,
    lastMessageId: string
  ): Promise<AxiosResponse<ChatReadStatus>> {
    return this.api.chatReadFull({
      user_id: userId,
      last_message_id: lastMessageId,
    })
  }
}
