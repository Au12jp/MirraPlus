import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * axios 関連 API をまとめたマネージャー（1 件）
 */
export class AxiosManager {
  constructor(private api: MirrativApi) {}

  async axios(
    config: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.api.axios(config);
  }
}