// main.ts
import { ProtectedApi } from './protectedApi';
import { TestService } from './testService';
import { myAllSettled } from './utils';    // ← 追加

/* 1) サービスを生成してラップ */
const raw = new TestService();
const api = new ProtectedApi(raw, {
    capacity: 5,
    windowMs: 1000,
    cbOptions: { failureThreshold: 3, openDurationMs: 8000 },
    cacheTTL: 3000,
    retryOptions: { retries: 2, backoffMs: 200, jitter: true },
    methodConfig: {
        randomFail: { retryOptions: { retries: 4, backoffMs: 100, jitter: true } },
        slow: { concurrency: 2 },
    },
});
api.on(e => console.log('[event]', e));
const svc = api.wrap();

/* ---- 内部 util ---- */
function delay(ms: number) {
    return new Promise<void>(r => setTimeout(r, ms));
}

; (async () => {
    /* --- 実験① : キャッシュ動作 ------------------------ */
    console.log('\n--- cache test (echo) ---');
    await svc.echo('hello');      // miss
    await svc.echo('hello');      // hit
    await delay(3100);
    await svc.echo('hello');      // TTL 切れ → miss

    /* --- 実験② : リトライ & サーキットブレーカー ------ */
    console.log('\n--- retry / circuit-breaker test ---');
    for (let i = 0; i < 6; i++) {
        svc.randomFail('test').then(
            r => console.log(' random:', r),
            e => console.log(' random:', e.message)
        );
    }
    for (let i = 0; i < 4; i++) {
        svc.alwaysFail().catch(e => console.log(' always:', e.message));
    }
    await delay(9000);            // CB open → close 待ち

    /* --- 実験③ : レート制限 & 同時実行制御 ------------ */
    console.log('\n--- rate-limit / concurrency test ---');
    const results = await myAllSettled(
        Array.from({ length: 8 }, (_, i) => svc.slow(i))
    );
    console.log('slow results:', results);

    console.log('\n◎ すべて完了');
})();