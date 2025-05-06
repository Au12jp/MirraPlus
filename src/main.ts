#!/usr/bin/env ts-node
import { Account, AccountOptions } from './managers/Account'
import { MirrativApiConfig } from '../source/mirrativApi'

/**
 * サンプル main.ts
 *  – Account.initialize はログに残さず認証情報をセット
 *  – 以降は proxy 経由で API 呼び出しを行うと操作ログを記録
 */
async function main(): Promise<void> {
    // 1) MirrativApiConfig を用意
    const cfg: MirrativApiConfig = {
        baseUrl: 'https://www.mirrativ.com',
        // axiosConfig, retryOptions, logRequests などもここで指定可能
    }

    // 2) AccountOptions（必要なら上書き）
    const opts: AccountOptions = {
        // mrid: '既知のmrid',
        xuuid: 'CB692136-4FBA-4DB9-BB34-58AFC4FE208A',
        // xidfv: '既知のxidfv',
    }

    // 3) Account を初期化（userMeFull は直接呼び出すのでログに残らない）
    const acct = await Account.initialize(cfg, opts)

    // 4) 認証情報の確認
    console.log('mrid :', acct.getMrid())
    console.log('xuuid:', acct.getXuuid())
    console.log('xidfv:', acct.getXidfv())

    // 5) 以降は proxy 経由で呼ぶとログを残す
    //    例：ライブ一覧のステータスを取得する場合
    const livesStatus = await acct.proxy.catalogLives({ tab_id: 1 })
    console.log('CatalogLivesStatus:', livesStatus)

    // 例として、userMe をフルレスポンスではなく通常呼び出し
    const me = await acct.proxy.userMe({}, {})
    console.log('ユーザー情報:', me)

    // 6) 最後に操作ログを表示
    console.log('API 操作ログ:')
    for (const logEntry of acct.getLogs()) {
        console.log(`- [${logEntry.timestamp.toISOString()}] ${logEntry.method}`, {
            params: logEntry.params,
            response: logEntry.response,
            error: logEntry.error,
        })
    }
}

main().catch(err => {
    console.error('エラー発生:', err)
    process.exit(1)
})
