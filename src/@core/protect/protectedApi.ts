// protectedApi.ts
import { EventEmitter } from 'events'

/** サーキットブレーカー設定 */
export interface CircuitBreakerOptions {
    failureThreshold: number   // 連続失敗でオープンにする回数
    openDurationMs: number     // オープン状態継続時間(ms)
}

/** リトライ設定 */
export interface RetryOptions {
    retries: number            // 最大リトライ回数
    backoffMs: number          // 初回バックオフ(ms)
    jitter?: boolean           // ジッターを乗せるか
}

/** メソッドごとのオーバーライド設定 */
export interface MethodConfig {
    capacity?: number          // RateLimiter: ウィンドウ当たり最大トークン数
    windowMs?: number          // RateLimiter: トークン全回復時間(ms)
    cbOptions?: CircuitBreakerOptions
    cacheTTL?: number          // キャッシュ有効期間(ms)
    timeoutMs?: number         // タイムアウト(ms)
    retryOptions?: RetryOptions
    concurrency?: number       // 同時実行上限
}

/** 全体オプション */
export interface ProtectedApiOptions {
    capacity?: number
    windowMs?: number
    cbOptions?: CircuitBreakerOptions
    cacheTTL?: number
    retryOptions?: RetryOptions
    methodConfig?: Record<string, MethodConfig>
}

/** 発行されるイベント種別 */
export type ApiEvent =
    | { type: 'call'; method: string }
    | { type: 'success'; method: string; durationMs: number }
    | { type: 'error'; method: string; error: any }
    | { type: 'retry'; method: string; attempt: number; delayMs: number }
    | { type: 'timeout'; method: string; timeoutMs: number }
    | { type: 'cacheHit'; method: string }
    | { type: 'cacheMiss'; method: string }
    | { type: 'circuitOpen'; method: string; until: number }
    | { type: 'rateLimit'; method: string; waitedMs: number }
    | { type: 'concurrencyWait'; method: string; waitedMs: number }

/** トークンバケット式 RateLimiter */
class RateLimiter {
    private tokens: number
    private lastRefill: number

    constructor(private capacity: number, private refillMs: number) {
        this.tokens = capacity
        this.lastRefill = Date.now()
    }

    async removeToken(): Promise<number> {
        const start = Date.now()
        // eslint-disable-next-line no-constant-condition
        while (true) {
            this.refill()
            if (this.tokens > 0) {
                this.tokens--
                return Date.now() - start
            }
            await new Promise(r => setTimeout(r, 50))
        }
    }

    private refill() {
        const now = Date.now()
        if (now - this.lastRefill >= this.refillMs) {
            this.tokens = this.capacity
            this.lastRefill = now
        }
    }
}

/** ProtectedApi: RateLimit + CircuitBreaker + Cache + Retry + Timeout + Concurrency + Events */
export class ProtectedApi<T extends object> {
    private globalLimiter: RateLimiter
    private state = new Map<string, {
        limiter: RateLimiter
        failures: number
        openUntil: number
        running: number
        queue: (() => void)[]
    }>()
    private cache = new Map<string, { value: any; expire: number }>()
    private emitter = new EventEmitter()

    constructor(
        private target: T,
        private opts: ProtectedApiOptions = {}
    ) {
        const cap = opts.capacity ?? 10
        const win = opts.windowMs ?? 1000
        this.globalLimiter = new RateLimiter(cap, win)
    }

    /** イベント購読 */
    on(listener: (e: ApiEvent) => void) {
        this.emitter.on('event', listener)
    }

    /** イベント購読解除 */
    off(listener: (e: ApiEvent) => void) {
        this.emitter.off('event', listener)
    }

    /** キャッシュクリア */
    clearCache(method?: string) {
        if (!method) this.cache.clear()
        else {
            for (const key of this.cache.keys())
                if (key.startsWith(method + '|')) this.cache.delete(key)
        }
    }

    /** サーキットリセット */
    resetCircuit(method?: string) {
        if (!method) this.state.clear()
        else this.state.delete(method)
    }

    /** 全メトリクスリセット */
    resetAll() {
        this.clearCache()
        this.resetCircuit()
    }

    /** 保護されたインスタンスを返す */
    wrap(): T {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this
        return new Proxy(this.target as T, {
            // p は string | symbol
            get: (target, p, receiver): any => {
                if (typeof p === 'symbol' || !(p in target))
                    return Reflect.get(target, p, receiver);

                const prop = p as keyof T;        // ← ここで keyof T にキャスト
                const orig = (target as T)[prop];
                if (typeof orig !== 'function') return orig

                return async (...args: any[]) => {
                    const method = String(prop)
                    const mc = self.opts.methodConfig?.[method] ?? {}
                    const cb = mc.cbOptions ?? self.opts.cbOptions
                    const retryOpts = mc.retryOptions ?? self.opts.retryOptions
                    const ttl = mc.cacheTTL ?? self.opts.cacheTTL ?? 0
                    const timeoutMs = mc.timeoutMs
                    const concurrencyLimit = mc.concurrency ?? Infinity

                    self.emitter.emit('event', { type: 'call', method })

                    // 初期 state
                    if (!self.state.has(method)) {
                        const cap = mc.capacity ?? self.opts.capacity ?? 10
                        const win = mc.windowMs ?? self.opts.windowMs ?? 1000
                        self.state.set(method, {
                            limiter: new RateLimiter(cap, win),
                            failures: 0,
                            openUntil: 0,
                            running: 0,
                            queue: []
                        })
                    }
                    const st = self.state.get(method)!

                    // サーキットオープン?
                    if (Date.now() < st.openUntil) {
                        self.emitter.emit('event', { type: 'circuitOpen', method, until: st.openUntil })
                        throw new Error(`Circuit open for ${method}`)
                    }

                    // キャッシュチェック
                    const key = method + '|' + JSON.stringify(args)
                    const now = Date.now()
                    if (ttl > 0 && self.cache.has(key)) {
                        const e = self.cache.get(key)!
                        if (e.expire > now) {
                            self.emitter.emit('event', { type: 'cacheHit', method })
                            return e.value
                        }
                        self.cache.delete(key)
                    }
                    if (ttl > 0) self.emitter.emit('event', { type: 'cacheMiss', method })

                    // RateLimiter (global + method)
                    const waitGlobal = await self.globalLimiter.removeToken()
                    if (waitGlobal > 0) self.emitter.emit('event', { type: 'rateLimit', method, waitedMs: waitGlobal })
                    const waitMethod = await st.limiter.removeToken()
                    if (waitMethod > 0) self.emitter.emit('event', { type: 'rateLimit', method, waitedMs: waitMethod })

                    // Concurrency queue
                    if (st.running >= concurrencyLimit) {
                        const startWait = Date.now()
                        await new Promise<void>(r => st.queue.push(r))
                        const waited = Date.now() - startWait
                        self.emitter.emit('event', { type: 'concurrencyWait', method, waitedMs: waited })
                    }
                    st.running++

                    // 実行用ヘルパー
                    const execute = async (): Promise<any> => {
                        let attempt = 0
                        const doCall = async (): Promise<any> => {
                            attempt++
                            // タイムアウト付き呼び出し
                            const callPromise = Reflect.apply(orig as Function, target, args);
                            let result: any
                            if (timeoutMs != null) {
                                result = await Promise.race([
                                    callPromise,
                                    new Promise((_, rej) => setTimeout(() => rej(new Error('Timeout')), timeoutMs))
                                ]).catch(err => {
                                    if (err.message === 'Timeout')
                                        self.emitter.emit('event', { type: 'timeout', method, timeoutMs })
                                    throw err
                                })
                            } else {
                                result = await callPromise
                            }
                            return result
                        }

                        // eslint-disable-next-line no-constant-condition
                        while (true) {
                            try {
                                const start = Date.now()
                                const res = await doCall()
                                const duration = Date.now() - start
                                self.emitter.emit('event', { type: 'success', method, durationMs: duration })
                                st.failures = 0
                                if (ttl > 0) self.cache.set(key, { value: res, expire: now + ttl })
                                return res
                            } catch (err) {
                                self.emitter.emit('event', { type: 'error', method, error: err })
                                st.failures++
                                // CircuitBreaker 開放判定
                                if (cb && st.failures >= cb.failureThreshold) {
                                    st.openUntil = Date.now() + cb.openDurationMs
                                }
                                // Retry 判定
                                if (retryOpts && attempt <= retryOpts.retries) {
                                    const backoff = retryOpts.backoffMs * Math.pow(2, attempt - 1)
                                    const jitter = retryOpts.jitter
                                        ? Math.random() * retryOpts.backoffMs
                                        : 0
                                    const delay = backoff + jitter
                                    self.emitter.emit('event', { type: 'retry', method, attempt, delayMs: delay })
                                    await new Promise(r => setTimeout(r, delay))
                                    continue
                                }
                                throw err
                            }
                        }
                    }

                    try {
                        return await execute()
                    } finally {
                        st.running--
                        if (st.queue.length > 0) st.queue.shift()!()
                    }
                }
            }
        })
    }
}

/** 簡易ファクトリ */
export function protect<T extends object>(
    target: T,
    opts?: ProtectedApiOptions
): T {
    return new ProtectedApi(target, opts).wrap()
}
