// Mirrativ/src/managers/RewardManager.ts
import { Account } from './Account'
import type {
    Reward_adAvailable_reward_ad_idsStatus,
    Reward_adAvailable_reward_ad_idsResponse,
    Reward_adCheck_available_deviceStatus,
    Reward_adCheck_available_deviceResponse,
    Reward_adCompleteStatus,
    Reward_adCompleteResponse,
} from '../../source/mirrativApi'

export interface UsageStats {
    claimedToday: number      // 今日クレーム済み回数
    remainingToday: number    // 今日残りクレーム回数
    msUntilReset: number      // 次リセットまでのミリ秒
    msUntilNextClaim: number  // 次クレーム可能までのミリ秒
}

/**
 * 報酬（広告）取得を管理するManager
 * - 毎日午前4時にリセット
 * - 1日最大15回までクレーム可
 * - クールダウン10分
 */
export class RewardManager {
    private claimTimestamps: Date[] = []
    private readonly MAX_PER_DAY = 15
    private readonly COOLDOWN_MS = 10 * 60 * 1000
    private readonly RESET_HOUR = 4

    constructor(private acct: Account) { }

    /** 「当日キー」を YYYY-MM-DD 形式で取得（午前4時が境） */
    private getTodayKey(): string {
        const now = new Date()
        if (now.getHours() < this.RESET_HOUR) {
            now.setDate(now.getDate() - 1)
        }
        return now.toISOString().slice(0, 10)
    }

    /** 必要なら日跨ぎリセットを行う */
    private ensureReset(): void {
        const key = this.getTodayKey()
        if (this.claimTimestamps.length > 0) {
            const firstKey = this.claimTimestamps[0].toISOString().slice(0, 10)
            if (firstKey !== key) {
                this.claimTimestamps = []
            }
        }
    }

    /** 次リセットまでのミリ秒 */
    public getTimeUntilReset(): number {
        const now = new Date()
        const rst = new Date()
        rst.setHours(this.RESET_HOUR, 0, 0, 0)
        if (rst <= now) rst.setDate(rst.getDate() + 1)
        return rst.getTime() - now.getTime()
    }

    /** クールダウンが終わるまでのミリ秒 */
    private getCooldownRemaining(): number {
        if (this.claimTimestamps.length === 0) return 0
        const last = this.claimTimestamps.at(-1)!
        return Math.max(0, last.getTime() + this.COOLDOWN_MS - Date.now())
    }

    /** 今すぐクレーム可能か */
    public canClaimNow(): boolean {
        this.ensureReset()
        return (
            this.claimTimestamps.length < this.MAX_PER_DAY &&
            this.getCooldownRemaining() === 0
        )
    }

    /** 今日の利用統計を取得 */
    public getUsageStats(): UsageStats {
        this.ensureReset()
        return {
            claimedToday: this.claimTimestamps.length,
            remainingToday: this.MAX_PER_DAY - this.claimTimestamps.length,
            msUntilReset: this.getTimeUntilReset(),
            msUntilNextClaim: this.getCooldownRemaining(),
        }
    }

    /** デバイスで広告視聴可能か */
    public async isAdAvailable(): Promise<boolean> {
        const status: Reward_adAvailable_reward_ad_idsStatus =
            await this.acct.proxy.reward_adCheck_available_device()
        return status.ok === 1
    }

    /** 利用可能な報酬ID一覧を取得 */
    public async listRewardIds(): Promise<string[]> {
        const full: Reward_adAvailable_reward_ad_idsResponse =
            await this.acct.proxy.reward_adAvailable_reward_ad_idsFull()
        return full.reward_ad_ids as unknown as string[]
    }

    /**
     * 指定IDをクレーム  
     * - 制限チェック（当日上限＆クールダウン）
     * - 成功時にタイムスタンプ登録
     */
    public async claimReward(id: string): Promise<Reward_adCompleteResponse> {
        this.ensureReset()
        if (this.claimTimestamps.length >= this.MAX_PER_DAY) {
            throw new Error('本日のクレーム上限（15回）に達しました')
        }
        const cd = this.getCooldownRemaining()
        if (cd > 0) {
            throw new Error(`次のクレームまであと${Math.ceil(cd / 1000)}秒必要です`)
        }
        const full: Reward_adCompleteResponse =
            await this.acct.proxy.reward_adCompleteFull({ reward_id: id })
        this.claimTimestamps.push(new Date())
        return full
    }

    /**
     * 自動クレーム  
     * - canClaimNow() になるまで待機し、IDを先頭から取得して順次クレーム
     */
    public async autoClaim(): Promise<Reward_adCompleteResponse> {
        // ポーリングで待機
        while (!this.canClaimNow()) {
            const wait = Math.min(this.getCooldownRemaining(), 1000)
            await new Promise(r => setTimeout(r, wait))
        }
        const ids = await this.listRewardIds()
        if (ids.length === 0) {
            throw new Error('利用可能な報酬IDが見つかりませんでした')
        }
        return this.claimReward(ids[0])
    }
}
