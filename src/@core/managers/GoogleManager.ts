import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** Google 接続結果 */
export interface GoogleConnectResult {
  /** Mirrativ 内部のユーザー ID */
  mrid: string;
}

/** API 共通ステータス */
interface ApiStatus {
  ok?: number;
  error?: string;
  error_code?: number;
}

/** リトライ付きヘルパー */
async function withRetry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delayMs = 200
): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
    }
  }
  throw lastErr;
}

export class GoogleManager {
  constructor(private api: MirrativApi) {}

  /**
   * Google アカウントと Mirrativ を連携し、内部 ID を返す
   */
  public async connect(
    idToken: string,
    opts?: AxiosRequestConfig
  ): Promise<GoogleConnectResult> {
    const resp = await withRetry(() =>
      this.api.googleConnectFull({ id_token: idToken }, undefined, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1 || !resp.mrid) {
      throw new Error(status?.error || "Google connect failed");
    }
    return { mrid: resp.mrid };
  }

  /**
   * 連携解除
   */
  public async disconnect(opts?: AxiosRequestConfig): Promise<void> {
    const resp = await withRetry(() =>
      this.api.googleDisconnectFull({}, undefined, opts)
    );
    const status = resp.status as ApiStatus | undefined;
    if (status?.ok !== 1) {
      throw new Error(status?.error || "Google disconnect failed");
    }
  }
}
