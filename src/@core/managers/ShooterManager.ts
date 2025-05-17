/* eslint-disable no-constant-condition */
import { MirrativApi } from "../mirrativApi";

/**
 * shooter 関連 API をまとめたマネージャー（2 件）
 */
export class ShooterManager {
  constructor(private api: MirrativApi) {}

  /**
   * is_matching_enabled が true になるまでポーリング
   */
  public async waitForMatchingEnabled(
    intervalMs = 5000,
    timeoutMs = 600_000
  ): Promise<void> {
    const start = Date.now();
    while (true) {
      const res = await this.api.shooterMatchingFull({}, undefined, undefined);
      if (res.status?.ok !== 1) {
        throw new Error(
          res.status?.error || "Failed to fetch shooter matching status"
        );
      }
      if (res.is_matching_enabled) {
        return;
      }
      if (Date.now() - start > timeoutMs) {
        throw new Error(`Shooter matching not enabled within ${timeoutMs}ms`);
      }
      await new Promise((r) => setTimeout(r, intervalMs));
    }
  }

  /**
   * 現在マッチング可能なストリーマー数を数値で取得
   */
  public async getMatchingStreamerCount(): Promise<number> {
    const res = await this.api.shooterMatchingFull({}, undefined, undefined);
    const text = res.streamer_num_text ?? "";
    const m = text.match(/\d+/);
    return m ? parseInt(m[0], 10) : 0;
  }

  /**
   * 現在マッチング中のストリーマーのアイコンURLとビューワー数を取得
   */
  public async listMatchingStreamersWithViewerCounts(): Promise<
    Array<{ streamerIconUrl: string; viewerCount: number }>
  > {
    const res = await this.api.shooterMatchingFull({}, undefined, undefined);
    if (!res.streamer_icon_urls) return [];
    return (res.streamer_icon_urls as any[]).map((item) => ({
      streamerIconUrl: String(item.icon_url ?? item.image_url ?? ""),
      viewerCount: Number(item.viewer_num ?? item.count ?? 0),
    }));
  }

  /**
   * 現在のビューワーID一覧を取得
   */
  public async listViewerIds(): Promise<string[]> {
    const res = await this.api.shooterMatchingFull({}, undefined, undefined);
    return (res.viewers ?? []).map((v) => String((v as any).user_id ?? ""));
  }
}
