import type { AxiosRequestConfig } from 'axios'
import { MirrativApi } from '../mirrativApi'

/**
 * create 関連 API をまとめたマネージャー（4 件）
 */
export class CreateManager {
  constructor(private api: MirrativApi) {}

  async createBodyMethod(
    key: K,
  ): (body: any, extraHeaders?: Record<string, string>, axiosOpts?: import("/Users/hinonaoki/node_modules/axios/index").AxiosRequestConfig<any> | undefined) => Promise<any> {
    return this.api.createBodyMethod(key);
  }

  async createGetMethod(
    key: K,
  ): (query?: Record<string, any>, extraHeaders?: Record<string, string>, axiosOpts?: import("/Users/hinonaoki/node_modules/axios/index").AxiosRequestConfig<any> | undefined) => Promise<any> {
    return this.api.createGetMethod(key);
  }

  async createFullMethod(
    key: K,
  ): (body: any, extraHeaders?: Record<string, string>, axiosOpts?: import("/Users/hinonaoki/node_modules/axios/index").AxiosRequestConfig<any> | undefined) => Promise<any> {
    return this.api.createFullMethod(key);
  }

  async createGetFullMethod(
    key: K,
  ): (query?: Record<string, any>, extraHeaders?: Record<string, string>, axiosOpts?: import("/Users/hinonaoki/node_modules/axios/index").AxiosRequestConfig<any> | undefined) => Promise<{ body: any; mrid: string | undefined; } | { body: any; mrid?: undefined; }> {
    return this.api.createGetFullMethod(key);
  }
}