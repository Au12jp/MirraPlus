import type { AxiosRequestConfig } from "axios";
import { MirrativApi } from "../mirrativApi";

/** デバイストークン登録結果 */
export interface DeviceTokenResult {
  success: boolean;
  message?: string;
}

export class FeatureManager {
  constructor(private api: MirrativApi) {}

  /** Retry + exponential backoff */
  private async withRetry<T>(
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

  /**
   * デバイストークンを登録します
   * - `ok === 1` で成功、それ以外は例外を投げます
   */
  public async registerDeviceToken(
    deviceToken: string,
    opts?: AxiosRequestConfig
  ): Promise<DeviceTokenResult> {
    const body = { device_token: deviceToken };
    const res = await this.withRetry(() =>
      this.api.featureRegister_device_token(body, undefined, opts)
    );
    if (res.ok !== 1) {
      throw new Error(res.error ?? "Failed to register device token");
    }
    return { success: true, message: res.msg ?? res.message };
  }

  /**
   * フルレスポンスで結果を取得します
   * - 独自フィールドが必要なときに
   */
  public async registerDeviceTokenFull(
    deviceToken: string,
    opts?: AxiosRequestConfig
  ): Promise<
    NonNullable<
      Awaited<
        ReturnType<MirrativApi["featureRegister_device_tokenFull"]>
      >["status"]
    >
  > {
    const body = { device_token: deviceToken };
    const full = await this.withRetry(() =>
      this.api.featureRegister_device_tokenFull(body, undefined, opts)
    );
    if (!full.status || full.status.ok !== 1) {
      throw new Error(full.status?.error ?? "Registration failed");
    }
    return full.status;
  }
}
