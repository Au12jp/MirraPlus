#!/usr/bin/env ts-node

import path from 'path'
import fs from 'fs'
import {
    Project,
    QuoteKind,
    IndentationText,
    SyntaxKind,
    Node,
} from 'ts-morph'

// MRID を付与したい full-response メソッドの rawKey を列挙
const MRID_KEYS = new Set<string>([
    'userMe',
    'googleConnect',
    // 必要に応じてここに追加／削除
]);

type HttpVerb = 'get' | 'post' | 'put' | 'delete' | 'patch'

interface Stats {
    total: number
    generated: number
    skipped: Record<string, number>
}

interface Endpoint {
    rawKey: string            // 元の key（衝突チェック前）
    key: string               // 出力時のメソッド名
    methodName: string        // GeneratedClient のメソッド名
    httpVerb: HttpVerb
    reqWrap?: string
    respWrap: string
    mediaType?: string
    paramType?: string
    reqProps?: string        // JSDoc 用：body のプロパティ一覧
    paramProps?: string      // JSDoc 用：query のプロパティ一覧
}

async function main() {
    const ROOT = process.cwd()
    const IN = path.join(ROOT, 'src/@modules/www.mirrativ.com.ts')
    const OUT = path.join(ROOT, 'src/@core/mirrativApi.ts')

    const args = process.argv.slice(2)
    const dryRun = args.includes('--dry')

    const stats: Stats = { total: 0, generated: 0, skipped: {} }
    const incrSkip = (reason: string) => {
        stats.skipped[reason] = (stats.skipped[reason] || 0) + 1
    }

    // ── 既存ファイル削除
    if (!dryRun && fs.existsSync(OUT)) {
        fs.unlinkSync(OUT)
        console.log(`🗑️  Deleted existing ${OUT}`)
    }

    // ── ts-morph プロジェクト準備
    const project = new Project({
        tsConfigFilePath: path.join(ROOT, 'tsconfig.json'),
        manipulationSettings: {
            quoteKind: QuoteKind.Single,
            indentationText: IndentationText.TwoSpaces,
        },
    })

    // ── 元クライアント読み込み
    const src = project.addSourceFileAtPath(IN)
    const clientClass = src.getClassOrThrow('Client')
    // include every public method (except constructor)
    const apiMethods = clientClass.getMethods().filter(m => m.getName() !== 'constructor')


    const preferredTypes = [
        'application/x-www-form-urlencoded',
        'application/json',
        'multipart/form-data',
    ]

    // ── 各メソッドを解析
    const endpoints: Endpoint[] = []
    for (const m of apiMethods) {
        stats.total++
        const methodName = m.getName()
        const httpVerb = (methodName.match(/^(get|post|put|delete|patch)/)?.[1] || 'post') as HttpVerb

        // rawKey: “postApiFoo”→“foo”
        const base = methodName.replace(/^[a-z]+(?:Api)?/, '')
        const rawKey = base.charAt(0).toLowerCase() + base.slice(1)

        // Response interface
        const respIf = src.getInterface(i => i.getName().startsWith(`Response$${methodName}$`))
        if (!respIf) {
            incrSkip('no Response interface')
            continue
        }
        const respWrap = respIf.getName()

        // RequestBody interface (optional)
        const reqIf = src.getInterface(i => i.getName() === `RequestBody$${methodName}`)
        let reqWrap: string | undefined
        let mediaType: string | undefined
        let reqProps: string | undefined
        if (reqIf) {
            reqWrap = reqIf.getName()
            // pick preferred mediaType
            const names = reqIf.getProperties().map(p => {
                const nn = p.getNameNode()
                if (Node.isStringLiteral(nn)) {
                    return nn.getLiteralValue()
                }
                return p.getName()
            })
            mediaType = names
                .sort((a, b) => preferredTypes.indexOf(a) - preferredTypes.indexOf(b))[0]
            if (!mediaType) {
                incrSkip('no preferred mediaType')
                continue
            }
            // build JSDoc props list
            reqProps = reqIf.getProperties()
                .map(p => {
                    const nn = p.getNameNode()
                    const name = Node.isStringLiteral(nn)
                        ? nn.getLiteralValue()
                        : p.getName()
                    const typeText = p.getType().getText(p)
                    return `${name}${p.hasQuestionToken() ? '?' : ''}: ${typeText}`
                })
                .join('; ')
        }

        // Parameter type (optional)
        const paramAlias = `Parameter$${methodName}`
        const paramIf = src.getInterface(i => i.getName() === paramAlias)
        const paramTa = src.getTypeAlias(i => i.getName() === paramAlias)
        let paramType: string | undefined
        let paramProps: string | undefined
        if (paramIf || paramTa) {
            paramType = paramAlias
            if (paramIf) {
                paramProps = paramIf.getProperties()
                    .map(p => {
                        const nn = p.getNameNode()
                        const name = Node.isStringLiteral(nn)
                            ? nn.getLiteralValue()
                            : p.getName()
                        const typeText = p.getType().getText(p)
                        return `${name}${p.hasQuestionToken() ? '?' : ''}: ${typeText}`
                    })
                    .join('; ')
            } else if (paramTa) {
                const tn = paramTa.getTypeNode()
                if (tn) {
                    paramProps = tn.getText()
                }
            }
        }

        endpoints.push({
            rawKey,
            key: rawKey,
            methodName,
            httpVerb,
            reqWrap,
            respWrap,
            mediaType,
            paramType,
            reqProps,
            paramProps,
        })
        stats.generated++
    }

    if (dryRun) {
        console.log('--- dry-run stats ---')
        console.log(`total methods:   ${stats.total}`)
        console.log(`to generate:     ${stats.generated}`)
        console.table(stats.skipped)
        process.exit(0)
    }

    // ── key の衝突解消
    const countRaw: Record<string, number> = {}
    endpoints.forEach(e => {
        countRaw[e.rawKey] = (countRaw[e.rawKey] || 0) + 1
    })
    endpoints.forEach(e => {
        if (countRaw[e.rawKey] > 1) {
            e.key = `${e.httpVerb}${capitalize(e.rawKey)}`
        }
    })

    // ── 出力ファイルを生成
    project.createSourceFile(OUT, writer => {
        // --- imports ---
        writer.writeLine(`import fs from 'fs';`);
        writer.writeLine(`import path from 'path';`);
        writer.writeLine(`import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';`)
        writer.writeLine(`import {`)
        writer.writeLine(`  ApiClient,`)
        writer.writeLine(`  Client as GeneratedClient,`)
        writer.writeLine(`  HttpMethod,`)
        endpoints.forEach(e => {
            if (e.reqWrap) writer.writeLine(`  ${e.reqWrap},`)
            writer.writeLine(`  ${e.respWrap},`)
            if (e.paramType) writer.writeLine(`  ${e.paramType},`)
        })
        writer.writeLine(`} from '../@modules/www.mirrativ.com';\n`)

        // ── imports の直後あたりに挿入
        writer.writeLine(`// MRID を取得したい full-response メソッドの key (rawKey) を列挙`);
        writer.writeLine(`const MRID_KEYS = new Set<string>([`);
        writer.writeLine(`  'userMe',`);
        writer.writeLine(`  'googleConnect',`);
        writer.writeLine(`  // ここに追加／削除したい key を書くだけ`);
        writer.writeLine(`]);\n`);

        // --- config interface ---
        writer.writeLine(`export interface MirrativApiConfig {`)
        writer.writeLine(`  baseUrl?: string;`)
        writer.writeLine(`  axiosConfig?: AxiosRequestConfig;`)
        writer.writeLine(`  retryOptions?: { retries: number; delay: number };`)
        writer.writeLine(`  logRequests?: boolean;`)
        writer.writeLine(`}\n`)

        // --- status extractor ---
        writer.writeLine(`export type ExtractStatus<T> =`);
        writer.writeLine(`  T extends { 'application/json': { status?: infer S } }`);
        writer.writeLine(`    ? S`);
        writer.writeLine(`    : never;\n`);

        // --- status aliases ---
        endpoints.forEach(({ key, respWrap }) => {
            const alias = capitalize(key) + 'Status';
            writer.writeLine(
                `export type ${alias} = ExtractStatus<${respWrap}>;\n`
            );
        });

        // --- query-param 型エイリアス ---
        endpoints.forEach(({ key, paramType }) => {
            if (!paramType) return;
            const name = capitalize(key);
            // e.g. export type CatalogLivesParams = Parameter$getApiCatalogLives;
            writer.writeLine(`export type ${name}Params = ${paramType};\n`);
        });

        // --- request‐body 型エイリアス ---
        endpoints.forEach(({ key, reqWrap, mediaType }) => {
            if (!reqWrap || !mediaType) return;
            const name = capitalize(key);
            writer.writeLine(`export type ${name}Request = NonNullable<${reqWrap}['${mediaType}']>;\n`);
        });

        // --- full-response 型エイリアス ---
        endpoints.forEach(({ key, respWrap }) => {
            const name = capitalize(key)
            writer.writeLine(`export type ${name}Response = NonNullable<${respWrap}['application/json']>;\n`)
        })

        // --- MEDIA_TYPES ---
        writer.writeLine(`const MEDIA_TYPES = {`)
        endpoints.forEach(({ key, mediaType }) => {
            writer.writeLine(`  ${key}: '${mediaType ?? ''}',`)
        })
        writer.writeLine(`} as const;\n`)

        // --- HTTP_VERBS ---
        writer.writeLine(`const HTTP_VERBS = {`)
        endpoints.forEach(({ key, httpVerb }) => {
            writer.writeLine(`  ${key}: '${httpVerb}',`)
        })
        writer.writeLine(`} as const;\n`)

        // --- ENDPOINTS ---
        writer.writeLine(`const ENDPOINTS = {`)
        endpoints.forEach(({ key, methodName }) => {
            writer.writeLine(`  ${key}: {`)
            writer.writeLine(`    methodName: '${methodName}' as const,`)
            writer.writeLine(`    extractStatus: (j: any) => {`)
            writer.writeLine(`      if (j.status == null) throw new Error('no status');`)
            writer.writeLine(`      return j.status as any;`)
            writer.writeLine(`    },`)
            writer.writeLine(`  },`)
        })
        writer.writeLine(`} as const;\n`)

        // --- MirrativApi クラス ---
        writer.writeLine(`export class MirrativApi {`)
        writer.writeLine(`  private client: GeneratedClient<AxiosRequestConfig & { fullResponse?: boolean }>;`)
        writer.writeLine(`  private axios: AxiosInstance;`)
        writer.writeLine(`  private retryOptions: { retries: number; delay: number };`)
        writer.writeLine(`  private logRequests: boolean;\n`)

        writer.writeLine(`  constructor(config: MirrativApiConfig = {}) {`)
        writer.writeLine(`    const baseUrl = config.baseUrl ?? 'https://www.mirrativ.com';`)
        writer.writeLine(`    const axiosInst: AxiosInstance = axios.create({`)
        writer.writeLine(`      baseURL: baseUrl,`)
        writer.writeLine(`      // デフォルト User-Agent を追加`)
        writer.writeLine(`      headers: { 'user-agent': 'MR_APP/11.16.0/iOS/iPhone15,2/16.1.1' },`)
        writer.writeLine(`      ...config.axiosConfig,`)
        writer.writeLine(`    });\n`)
        writer.writeLine(`    this.axios        = axiosInst;`)
        writer.writeLine(`    this.retryOptions = config.retryOptions ?? { retries: 0, delay: 0 };`)
        writer.writeLine(`    this.logRequests  = config.logRequests ?? false;\n`)

        writer.writeLine(`    const { retries, delay } = this.retryOptions;`)
        writer.writeLine(`    const logReq         = this.logRequests;\n`)

        writer.writeLine(`    const apiClient: ApiClient<AxiosRequestConfig & { fullResponse?: boolean }> = {`)
        writer.writeLine(`      async request(method: HttpMethod, url: string, headers: any, body: any, qp: unknown, opts?: any) {`)
        writer.writeLine(`        const { fullResponse, ...restOpts } = opts || {};`)
        writer.writeLine(`        const qpMap = qp as Record<string,{value:any}>;`)
        writer.writeLine(`        for (let i = 0; i <= retries; i++) {`)
        writer.writeLine(`          try {`)
        writer.writeLine(`            if (logReq) console.log(\`[MirrativApi] \${method} \${url}\`, { headers, body, params: qpMap });`)
        writer.writeLine(`            const res = await axiosInst.request({`)
        writer.writeLine(`              method,`)
        writer.writeLine(`              url,`)
        writer.writeLine(`              headers,`)
        writer.writeLine(`              data: body,`)
        writer.writeLine(`              params: qpMap ? Object.fromEntries(Object.entries(qpMap).map(([k,v])=>[k,v.value])) : undefined,`)
        writer.writeLine(`              ...restOpts,`)
        writer.writeLine(`            });`)
        writer.writeLine(`            return fullResponse ? res : res.data;`)
        writer.writeLine(`          } catch (err:any) {`)
        writer.writeLine(`            if (i < retries) { await new Promise(r=>setTimeout(r,delay)); continue; }`)
        writer.writeLine(`            throw err;`)
        writer.writeLine(`          }`)
        writer.writeLine(`        }`)
        writer.writeLine(`      },`)
        writer.writeLine(`    };\n`)

        writer.writeLine(`    this.client = new GeneratedClient(apiClient, baseUrl);\n`)

        writer.writeLine(`    // 各エンドポイントメソッドを生成`)
        writer.writeLine(`    for (const k of Object.keys(ENDPOINTS) as Array<keyof typeof ENDPOINTS>) {`)
        writer.writeLine(`      if (HTTP_VERBS[k] === 'get') {`)
        writer.writeLine(`        (this as any)[k]      = this.createGetMethod(k);`)
        writer.writeLine(`        (this as any)[\`\${k}Full\`] = this.createGetFullMethod(k);`)
        writer.writeLine(`      } else {`)
        writer.writeLine(`        (this as any)[k]      = this.createBodyMethod(k);`)
        writer.writeLine(`        (this as any)[\`\${k}Full\`] = this.createFullMethod(k);`)
        writer.writeLine(`      }`)
        writer.writeLine(`    }\n`)

        writer.writeLine(`  }\n`)

        // --- POST/PUT/... 用メソッドビルダー ---
        writer.writeLine(`  private createBodyMethod<K extends keyof typeof ENDPOINTS>(key: K) {`)
        writer.writeLine(`    const fn = ENDPOINTS[key].methodName;`)
        writer.writeLine(`    return async (`)
        writer.writeLine(`      body: any,`)
        writer.writeLine(`      extraHeaders: Record<string,string> = {},`)
        writer.writeLine(`      axiosOpts?: AxiosRequestConfig`)
        writer.writeLine(`    ) => {`)
        writer.writeLine(`      const mediaType = MEDIA_TYPES[key];`)
        writer.writeLine(`      const params    = { parameter: extraHeaders, requestBody: { [mediaType]: body } };`)
        writer.writeLine(`      try {`)
        writer.writeLine(`        const json = await (this.client as any)[fn](params as any, axiosOpts);`)
        writer.writeLine(`        if ((json as any).ok === 0) throw new Error(\`[MirrativApi][\${fn}] ok=0\`);`)
        writer.writeLine(`        // ステータスのみ返す`)
        writer.writeLine(`        return ENDPOINTS[key].extractStatus(json as any);`)
        writer.writeLine(`      } catch (err:any) {`)
        writer.writeLine(`        const info: Record<string,unknown> = { message: err.message };`)
        writer.writeLine(`        if (err.config)   { info.method = err.config.method; info.url = err.config.url; }`)
        writer.writeLine(`        if (err.response) { info.status = err.response.status; info.responseMessage = err.response.data?.message ?? err.response.data; }`)
        writer.writeLine(`        console.error(\`[MirrativApi][\${fn}] Error:\`, info);`)
        writer.writeLine(`        throw err;`)
        writer.writeLine(`      }`)
        writer.writeLine(`    }`)
        writer.writeLine(`  }\n`)

        // --- GET 用メソッドビルダー ---
        writer.writeLine(`  private createGetMethod<K extends keyof typeof ENDPOINTS>(key: K) {`)
        writer.writeLine(`    const fn = ENDPOINTS[key].methodName;`)
        writer.writeLine(`    return async (`)
        writer.writeLine(`      query: Record<string, any> = {},`)
        writer.writeLine(`      extraHeaders: Record<string,string> = {},`)
        writer.writeLine(`      axiosOpts?: AxiosRequestConfig`)
        writer.writeLine(`    ) => {`)
        writer.writeLine(`      const qpMap = Object.fromEntries(`)
        writer.writeLine(`        Object.entries(query).map(([k,v]) => [k, { value: v }])`)
        writer.writeLine(`      );`)
        writer.writeLine(`      try {`)
        writer.writeLine(`        const json = await (this.client as any)[fn]({parameter: extraHeaders, query: qpMap} as any, axiosOpts);`)
        writer.writeLine(`        // ステータスのみ返す`)
        writer.writeLine(`        return ENDPOINTS[key].extractStatus(json);`)
        writer.writeLine(`      } catch (err:any) {`)
        writer.writeLine(`        const info: Record<string,unknown> = { message: err.message };`)
        writer.writeLine(`        if (err.config)   { info.method = err.config.method; info.url = err.config.url; }`)
        writer.writeLine(`        if (err.response) { info.status = err.response.status; info.responseMessage = err.response.data?.message ?? err.response.data; }`)
        writer.writeLine(`        console.error(\`[MirrativApi][\${fn}] GET Error:\`, info);`)
        writer.writeLine(`        throw err;`)
        writer.writeLine(`      }`)
        writer.writeLine(`    }`)
        writer.writeLine(`  }\n`)

        // --- POST/PUT/... fullレスポンス ---
        writer.writeLine(`  private createFullMethod<K extends keyof typeof ENDPOINTS>(key: K) {`)
        writer.writeLine(`    const fn = ENDPOINTS[key].methodName;`)
        writer.writeLine(`    return async (`)
        writer.writeLine(`      body: any,`)
        writer.writeLine(`      extraHeaders: Record<string,string> = {},`)
        writer.writeLine(`      axiosOpts?: AxiosRequestConfig`)
        writer.writeLine(`    ) => {`)
        writer.writeLine(`      const mediaType = MEDIA_TYPES[key];`)
        writer.writeLine(`      const params    = { parameter: extraHeaders, requestBody: { [mediaType]: body } };`)
        writer.writeLine(`      const optsFull = { ...(axiosOpts || {}), fullResponse: true };`)
        writer.writeLine(`      return (this.client as any)[fn](params as any, optsFull) as Promise<NonNullable<any>>;`)
        writer.writeLine(`    }`)
        writer.writeLine(`  }\n`)

        // --- GET fullレスポンス (userMe 特殊処理付き) ---
        writer.writeLine(`  private createGetFullMethod<K extends keyof typeof ENDPOINTS>(key: K) {`);
        writer.writeLine(`    const verb = HTTP_VERBS[key] as any;`);
        writer.writeLine(`    const pathName = String(key).replace(/([A-Z])/g, '/$1').toLowerCase();`);
        writer.writeLine(`    const route = \`/api/\${pathName}\`;`);
        writer.writeLine(`    return async (`);
        writer.writeLine(`      query: Record<string, any> = {},`);
        writer.writeLine(`      extraHeaders: Record<string,string> = {},`);
        writer.writeLine(`      axiosOpts?: AxiosRequestConfig`);
        writer.writeLine(`    ) => {`);
        writer.writeLine(`      const res = await this.axios.request({`);
        writer.writeLine(`        method: verb,`);
        writer.writeLine(`        url: route,`);
        writer.writeLine(`        headers: extraHeaders,`);
        writer.writeLine(`        params: query,`);
        writer.writeLine(`        ...axiosOpts,`);
        writer.writeLine(`      }) as AxiosResponse<any>;`);
        writer.writeLine(``);
        writer.writeLine(`      // ログ用オブジェクト`);
        writer.writeLine(`      const { config: req, status, statusText, headers: resHeaders, data: resBody } = res;`);
        writer.writeLine(`      const logObject = {`);
        writer.writeLine(`        request:  { url: req.url, method: req.method, headers: req.headers, params: req.params, body: req.data },`);
        writer.writeLine(`        response: { status, statusText, headers: resHeaders, body: resBody },`);
        writer.writeLine(`      };`);
        writer.writeLine(``);
        writer.writeLine(`      // ./api/<key>.json に書き出し`);
        writer.writeLine(`      const dir = path.resolve(process.cwd(), 'api');`);
        writer.writeLine(`      if (!fs.existsSync(dir)) fs.mkdirSync(dir);`);
        writer.writeLine(`      fs.writeFileSync(path.join(dir, \`\${key}.json\`), JSON.stringify(logObject, null, 2));`);
        writer.writeLine(``);
        writer.writeLine(`      // 戻り値を整形`);
        writer.writeLine(`      if (MRID_KEYS.has(key as string)) {`);
        writer.writeLine(`        const sc = resHeaders['set-cookie'];`);
        writer.writeLine(`        const raw = Array.isArray(sc) ? sc[0] : sc;`);
        writer.writeLine(`        const m = raw?.match(/mr_id=([^;]+)/);`);
        writer.writeLine(`        return {`);
        writer.writeLine(`          body: resBody as NonNullable<typeof resBody>,`);
        writer.writeLine(`          mrid: m ? m[1] : undefined,`);
        writer.writeLine(`        };`);
        writer.writeLine(`      }`);
        writer.writeLine(`      return { body: resBody as NonNullable<typeof resBody> };`);
        writer.writeLine(`    };`);
        writer.writeLine(`  }`);

        // --- public declarations + JSDoc ---
        endpoints.forEach(ep => {
            const {
                rawKey,
                key,
                httpVerb,
                mediaType,
                reqProps,
                paramProps,
                paramType,
                reqWrap,
            } = ep

            const alias = capitalize(key) + 'Status'
            const returns = `Promise<${alias}>`
            // full-response の戻り型を MRID_KEYS を参照して決定
            const payloadType = MRID_KEYS.has(key)
                ? `${capitalize(key)}Response & { mrid?: string }`
                : `${capitalize(key)}Response`;
            const fullReturns = `Promise<${payloadType}>`;
            // props → JSDoc 用型表記に変換
            const toDocShape = (props?: string, mType?: string): string => {
                if (!props || !props.trim()) {
                    return 'Record<string, any>'
                }
                if (mType && props.startsWith(`${mType}:`)) {
                    const inner = props.slice(mType.length + 1).trim()
                    return inner.startsWith('{') ? inner : `{ ${inner} }`
                }
                return `{ ${props} }`
            }

            const queryDoc = toDocShape(paramProps)
            const bodyDoc = toDocShape(reqProps, mediaType)

            const endpoint = rawKey
                // a→A の間だけスラッシュを入れる
                .replace(/([a-z0-9])([A-Z])/g, '$1/$2')
                .toLowerCase();

            /* ──────────────── JSDoc ──────────────── */
            writer.writeLine('  /**')
            writer.writeLine(`   * ### ${httpVerb.toUpperCase()} /${endpoint}`)
            if (mediaType) writer.writeLine(`   * **Content-Type**: \`${mediaType}\``)
            writer.writeLine('   *')
            if (httpVerb === 'get') {
                writer.writeLine(`   * @param query - ${queryDoc} URL クエリパラメータ (任意)`)
            } else {
                writer.writeLine(`   * @param body - ${bodyDoc} リクエストボディ`)
            }
            writer.writeLine('   * @param extraHeaders 追加ヘッダー (任意)')
            writer.writeLine('   * @param axiosOpts   Axios オプション (任意)')
            writer.writeLine(`   * @returns ${returns} ステータスのみを返します`)
            writer.writeLine('   * @throws AxiosError ネットワーク／HTTP エラー')
            if (httpVerb !== 'get') {
                writer.writeLine('   * @throws Error Mirrativ API が `ok = 0` を返した場合')
            }
            writer.writeLine('   * @example')
            writer.writeLine('   * ```ts')
            if (httpVerb === 'get') {
                writer.writeLine(`   * const res = await api.${key}(${paramType ? queryDoc : '{}'});`)
            } else {
                writer.writeLine(`   * const res = await api.${key}(${bodyDoc});`)
            }
            writer.writeLine('   * console.log(res);')
            writer.writeLine('   * ```')
            writer.writeLine('   */')

            /* ───────── メソッド宣言 ───────── */
            writer.writeLine(`  public ${key}!: (`)
            if (httpVerb === 'get') {
                if (paramType) {
                    const name = capitalize(key);
                    // use the new alias
                    writer.writeLine(`    query?: ${name}Params,`);
                } else {
                    writer.writeLine(`    query?: Record<string, any>,`);
                }
            } else {
                if (reqWrap && mediaType) {
                    const name = capitalize(key);
                    writer.writeLine(`    body: ${name}Request,`);
                } else {
                    writer.writeLine(`    body?: any,`);
                }
            }
            writer.writeLine('    extraHeaders?: Record<string, string>,')
            writer.writeLine('    axiosOpts?: AxiosRequestConfig')
            writer.writeLine(`  ) => ${returns};\n`)

            /* ────────── Full 用 JSDoc ───────── */
            writer.writeLine('  /**')
            writer.writeLine(`   * ### ${httpVerb.toUpperCase()} /${endpoint} (full response)`)
            if (mediaType) writer.writeLine(`   * **Content-Type**: \`${mediaType}\``)
            writer.writeLine('   *')
            if (httpVerb === 'get') {
                writer.writeLine(`   * @param query - ${queryDoc} URL クエリパラメータ (任意)`)
            } else {
                writer.writeLine(`   * @param body - ${bodyDoc} リクエストボディ`)
            }
            writer.writeLine('   * @param extraHeaders 追加ヘッダー (任意)')
            writer.writeLine('   * @param axiosOpts   Axios オプション (任意)')
            writer.writeLine(`   * @returns ${fullReturns}`)
            writer.writeLine('   * @throws AxiosError ネットワーク／HTTP エラー')
            writer.writeLine('   * @example')
            writer.writeLine('   * ```ts')
            if (httpVerb === 'get') {
                writer.writeLine(`   * const res = await api.${key}Full(${paramType ? queryDoc : '{}'});`)
            } else {
                writer.writeLine(`   * const res = await api.${key}Full(${bodyDoc});`)
            }
            writer.writeLine('   * console.log(res);')
            writer.writeLine('   * ```')
            writer.writeLine('   */')

            /* ───────── “Full” メソッド宣言 ───────── */
            writer.writeLine(`  public ${key}Full!: (`)
            if (httpVerb === 'get') {
                if (paramType) {
                    const name = capitalize(key);
                    writer.writeLine(`    query?: ${name}Params,`);
                } else {
                    writer.writeLine(`    query?: Record<string, any>,`);
                }
            } else {
                if (reqWrap && mediaType) {
                    const name = capitalize(key);
                    writer.writeLine(`    body: ${name}Request,`);
                } else {
                    writer.writeLine(`    body?: any,`);
                }
            }
            writer.writeLine('    extraHeaders?: Record<string, string>,')
            writer.writeLine('    axiosOpts?: AxiosRequestConfig')
            writer.writeLine(`  ) => ${fullReturns};\n`)
        })

        writer.writeLine(`}`)
    })

    // ── 後処理: 空 interface → Record<string,unknown>
    const outFile = project.getSourceFileOrThrow(OUT)
    outFile.getInterfaces().forEach(iface => {
        if (iface.getMembers().length === 0) {
            iface.addIndexSignature({ keyName: 'key', keyType: 'string', returnType: 'unknown' })
        }
    })
    outFile.getDescendantsOfKind(SyntaxKind.TypeLiteral).forEach(tl => {
        if (tl.getMembers().length === 0) {
            tl.replaceWithText('Record<string, unknown>')
        }
    })

    await project.save()
    console.log('✅ Generated', OUT)
}

function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

main().catch(err => {
    console.error(err)
    process.exit(1)
})
