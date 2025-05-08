import { v4 as uuidv4 } from 'uuid'
import {
    MirrativApi,
    MirrativApiConfig,
} from '../mirrativApi'

export interface ApiOperationLog {
    timestamp: Date
    method: string
    params: any[]
    response?: any
    error?: any
}

export interface AccountOptions {
    mrid?: string
    xuuid?: string
    xidfv?: string
}

export class Account {
    private readonly api: MirrativApi
    private mrid = ''
    private xuuid: string
    private xidfv: string

    private authHeaders: Record<string, string> = {}
    private logs: ApiOperationLog[] = []

    /**  
     * アカウントを初期化し、mrid を取得する  
     * @param cfg MirrativApi の設定  
     * @param opts オプション (mrid, xuuid, xidfv)  
     * @returns Promise<Account>  
     */
    public static async initialize(
        cfg: MirrativApiConfig,
        opts: AccountOptions = {}
    ): Promise<Account> {
        const acct: Account = new Account(cfg, opts)

        if (opts.mrid) {
            acct.mrid = opts.mrid
            acct.rebuildAuthHeaders()
        }

        if (!acct.mrid) {
            const full = await acct.api.userMeFull()
            if (!full.mrid) {
                throw new Error('userMeFull で mr_id を取得できませんでした')
            }
            acct.mrid = full.mrid
            acct.rebuildAuthHeaders()
        }

        return acct
    }

    /**  
     * private: 絶対に `initialize` 経由でのみ呼び出される  
     */
    private constructor(
        cfg: MirrativApiConfig,
        private readonly opts: AccountOptions
    ) {
        this.api = new MirrativApi(cfg)

        // xuuid はオプション or 固定値を大文字化、xidfv は一度生成して大文字化
        this.xuuid = (opts.xuuid ?? 'CB692136-4FBA-4DB9-BB34-58AFC4FE208A').toUpperCase()
        this.xidfv = (opts.xidfv ?? uuidv4()).toUpperCase()

        this.rebuildAuthHeaders()
    }

    /**
     * 認証ヘッダーを再構築する  
     * @returns void  
     */
    private rebuildAuthHeaders(): void {
        const headers: Record<string, string> = {
            // UUIDs
            'x-uuid': this.xuuid,
            'x-idfv': this.xidfv,
        }
        // mrid がセットされているときだけ cookie ヘッダーを追加
        if (this.mrid) {
            headers.cookie = `mr_id=${this.mrid}`
        }
        this.authHeaders = headers
    }

    /**
     * ログ付きで非同期処理を実行する  
     * @param name ログに記録するメソッド名  
     * @param fn 実行する関数  
     * @returns Promise<T>  
     */
    private async logWrap<T>(name: string, fn: () => Promise<T>): Promise<T> {
        const ts: Date = new Date()
        try {
            const res: T = await fn()
            this.logs.push({ timestamp: ts, method: name, params: [], response: res })
            return res
        } catch (err: unknown) {
            this.logs.push({ timestamp: ts, method: name, params: [], error: err })
            throw err
        }
    }

    /** mrid を取得する  
     * @returns string  
     */
    public getMrid(): string {
        return this.mrid
    }

    /** xuuid を取得する  
     * @returns string  
     */
    public getXuuid(): string {
        return this.xuuid
    }

    /** xidfv を取得する  
     * @returns string  
     */
    public getXidfv(): string {
        return this.xidfv
    }

    /** mrid を設定する  
     * @param v 新しい mrid  
     * @returns void  
     */
    public setMrid(v: string): void {
        this.mrid = v
        this.rebuildAuthHeaders()
    }

    /** xuuid を設定する  
     * @param v 新しい xuuid  
     * @returns void  
     */
    public setXuuid(v: string): void {
        this.xuuid = v.toUpperCase()
        this.rebuildAuthHeaders()
    }

    /** xidfv を設定する  
     * @param v 新しい xidfv  
     * @returns void  
     */
    public setXidfv(v: string): void {
        this.xidfv = v.toUpperCase()
        this.rebuildAuthHeaders()
    }

    /** すべての操作ログを取得する  
     * @returns ApiOperationLog[]  
     */
    public getLogs(): ApiOperationLog[] {
        return [...this.logs]
    }

    /** 最後に記録されたログを取得する  
     * @returns ApiOperationLog | undefined  
     */
    public getLastLog(): ApiOperationLog | undefined {
        return this.logs.length > 0 ? this.logs[this.logs.length - 1] : undefined
    }

    /** 操作ログをクリアする  
     * @returns void  
     */
    public clearLogs(): void {
        this.logs = []
    }

    /**
     * MirrativApi のメソッドを呼び出す proxy を返す  
     * - 認証ヘッダー自動マージ  
     * - 呼び出し内容のログ記録  
     * @returns MirrativApi  
     */
    public get proxy(): MirrativApi {
        const handler: ProxyHandler<MirrativApi> = {
            get: (target: MirrativApi, prop: keyof MirrativApi) => {
                const orig: unknown = (this.api as any)[prop]
                if (typeof orig !== 'function') {
                    return orig as any
                }
                return async (
                    params: Record<string, any> = {},
                    hdr: Record<string, any> = {},
                    opts: Record<string, any> = {}
                ): Promise<any> => {
                    const ts: Date = new Date()
                    const mergedHdr: Record<string, any> = { ...this.authHeaders, ...hdr }
                    try {
                        const res: any = await (orig as (...args: any[]) => Promise<any>).call(
                            this.api,
                            params,
                            mergedHdr,
                            opts
                        )
                        this.logs.push({
                            timestamp: ts,
                            method: String(prop),
                            params: [params, hdr, opts],
                            response: res,
                        })
                        return res
                    } catch (error: unknown) {
                        this.logs.push({
                            timestamp: ts,
                            method: String(prop),
                            params: [params, hdr, opts],
                            error,
                        })
                        throw error
                    }
                }
            },
        }
        return (new Proxy(this.api, handler) as unknown) as MirrativApi
    }

    /**
     * テスト用 xuuid チェック  
     * @param testAcct テスト用 Account インスタンス  
     * @returns Promise<boolean>  
     */
    public async verifyXuuid(testAcct: Account): Promise<boolean> {
        testAcct.setXuuid(this.xuuid)
        try {
            await testAcct.api.userMeFull()
            return true
        } catch {
            return false
        }
    }
}
