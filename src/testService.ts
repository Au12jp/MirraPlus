// testService.ts
export class TestService {
    // eslint-disable-next-line no-irregular-whitespace
    /** 50 ms 後に値を返すだけ（キャッシュ検証用） */
    async echo<T>(value: T): Promise<T> {
        await delay(50);
        return value;
    }

    /** 50% で失敗するメソッド（リトライ／CB 検証用） */
    async randomFail(label = 'rng'): Promise<string> {
        await delay(50);
        if (Math.random() < 0.5) throw new Error(`[${label}] unlucky`);
        return `[${label}] success`;
    }

    /** 常に失敗（サーキットブレーカ検証用） */
    async alwaysFail(): Promise<never> {
        await delay(30);
        throw new Error('always fails');
    }

    /** 少し時間がかかる処理（同時実行制限の可視化用） */
    async slow(id: number): Promise<string> {
        await delay(300);
        return `slow-${id}`;
    }
}

/* 小さなユーティリティ */
const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
