// utils.ts

export type AllSettledResult<T> =
    | { status: 'fulfilled'; value: T }
    | { status: 'rejected'; reason: any };

/**
 * Promise.allSettled のポリフィル版
 */
export function myAllSettled<T>(
    promises: Promise<T>[],
): Promise<AllSettledResult<T>[]> {
    return Promise.all(
        promises.map(p =>
            p.then<AllSettledResult<T>, AllSettledResult<T>>(
                (value) => ({ status: 'fulfilled', value }),
                (reason) => ({ status: 'rejected', reason }),
            ),
        ),
    );
}
