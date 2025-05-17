#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import {
  Project,
  QuoteKind,
  IndentationText,
  SyntaxKind,
  Node,
} from "ts-morph";

/* ──────────────── CLI & constants ──────────────── */

const argv = process.argv.slice(2);
const hostArg = argv.find((a) => a.startsWith("--host=")) ?? "";
const HOST = hostArg.replace("--host=", "") || "www.mirrativ.com";
const ROOT = process.cwd();
const IN = path.join(ROOT, "src", "@modules", `${HOST}.ts`);
const OUT = path.join(ROOT, "src", "@core", `${toPascal(HOST)}Api.ts`);
const DRY_RUN = argv.includes("--dry");

type HttpVerb = "get" | "post" | "put" | "delete" | "patch";
interface Stats {
  total: number;
  generated: number;
  skipped: Record<string, number>;
}
interface Endpoint {
  rawKey: string;
  key: string;
  methodName: string;
  httpVerb: HttpVerb;
  reqWrap?: string;
  respWrap: string;
  mediaType?: string;
  paramType?: string;
  reqProps?: string;
  paramProps?: string;
}

async function main(): Promise<void> {
  const stats: Stats = { total: 0, generated: 0, skipped: {} };
  const incrSkip = (reason: string) =>
    (stats.skipped[reason] = (stats.skipped[reason] || 0) + 1);

  // ── 既存ファイル削除
  if (!DRY_RUN && fs.existsSync(OUT)) {
    fs.unlinkSync(OUT);
    console.log(`🗑️  Deleted existing ${path.relative(ROOT, OUT)}`);
  }

  // ── ts-morph プロジェクト準備
  const project = new Project({
    tsConfigFilePath: path.join(ROOT, "tsconfig.json"),
    manipulationSettings: {
      quoteKind: QuoteKind.Single,
      indentationText: IndentationText.TwoSpaces,
    },
  });

  // ── 元クライアント読み込み
  const src = project.addSourceFileAtPath(IN);
  const clientClass = src.getClassOrThrow("Client");
  const apiMethods = clientClass
    .getMethods()
    .filter((m) => m.getName() !== "constructor");

  const preferredTypes = [
    "application/x-www-form-urlencoded",
    "application/json",
    "multipart/form-data",
  ];

  // ── Pass1: エンドポイント情報を収集
  const endpoints: Endpoint[] = [];
  for (const m of apiMethods) {
    stats.total++;
    const methodName = m.getName();
    if (/^options/i.test(methodName)) continue;

    const httpVerb = (methodName.match(/^(get|post|put|delete|patch)/)?.[1] ||
      "post") as HttpVerb;
    const base = methodName.replace(/^[a-z]+(?:Api)?/, "");
    const rawKey = lcFirst(base);

    // Response interface (必須)
    const respIf = src.getInterface((i) =>
      i.getName().startsWith(`Response$${methodName}$`)
    );
    if (!respIf) {
      incrSkip("no Response interface");
      continue;
    }
    const respWrap = respIf.getName();

    // RequestBody interface (任意)
    let reqWrap: string | undefined,
      mediaType: string | undefined,
      reqProps: string | undefined;
    const reqIf = src.getInterface(
      (i) => i.getName() === `RequestBody$${methodName}`
    );
    if (reqIf) {
      reqWrap = reqIf.getName();
      const names = reqIf.getProperties().map((p) => {
        const nn = p.getNameNode();
        if (Node.isStringLiteral(nn)) {
          return nn.getLiteralValue();
        }
        return p.getName();
      });
      mediaType = pickPreferred(names, preferredTypes);
      if (!mediaType) {
        incrSkip("no preferred mediaType");
        continue;
      }
      reqProps = propsToDoc(reqIf);
    }

    // Parameter type (任意)
    const paramAlias = `Parameter$${methodName}`;
    const paramIf = src.getInterface((i) => i.getName() === paramAlias);
    const paramTa = src.getTypeAlias((i) => i.getName() === paramAlias);
    let paramType: string | undefined, paramProps: string | undefined;
    if (paramIf || paramTa) {
      paramType = paramAlias;
      paramProps = paramIf
        ? propsToDoc(paramIf)
        : paramTa?.getTypeNode()?.getText();
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
    });
    stats.generated++;
  }

  // ── dry-run 終了
  if (DRY_RUN) {
    console.log("--- dry-run stats ---");
    console.table(stats);
    return;
  }

  // ── Pass2: key 重複解消
  const dup: Record<string, number> = {};
  endpoints.forEach((e) => (dup[e.rawKey] = (dup[e.rawKey] || 0) + 1));
  endpoints.forEach((e) => {
    if (dup[e.rawKey] > 1) e.key = `${e.httpVerb}${ucFirst(e.rawKey)}`;
  });

  // ── Pass3: 一気に出力
  project.createSourceFile(
    OUT,
    (writer) => {
      // ── ESLint disable + imports ──
      writer.writeLine(
        `/* eslint-disable @typescript-eslint/no-unused-vars */`
      );
      writer.writeLine(`import fs from 'fs';`);
      writer.writeLine(`import path from 'path';`);
      writer.writeLine(
        `import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';`
      );
      writer.writeLine(
        `import { ApiClient, Client as GeneratedClient, HttpMethod,`
      );
      endpoints.forEach((e) => {
        if (e.reqWrap) writer.writeLine(`  ${e.reqWrap},`);
        writer.writeLine(`  ${e.respWrap},`);
        if (e.paramType) writer.writeLine(`  ${e.paramType},`);
      });
      writer.writeLine(`} from '../@modules/${HOST}';`);
      writer.writeLine("");

      // ── Config interface ──
      const className = `${toPascal(HOST)}Api`;
      writer.writeLine(`export interface ${className}Config {`);
      writer.writeLine(`  baseUrl?: string;`);
      writer.writeLine(`  axiosConfig?: AxiosRequestConfig;`);
      writer.writeLine(`  retryOptions?: { retries: number; delay: number };`);
      writer.writeLine(`  logRequests?: boolean;`);
      writer.writeLine(`}`);
      writer.writeLine("");

      // ── ExtractStatus ＆ status aliases ──
      writer.writeLine(`export type ExtractStatus<T> =`);
      writer.writeLine(
        `  T extends { 'application/json': { status?: infer S } } ? S : never;`
      );
      writer.writeLine("");
      endpoints.forEach((e) => {
        writer.writeLine(
          `export type ${ucFirst(e.key)}Status = ExtractStatus<${e.respWrap}>;`
        );
      });
      writer.writeLine("");

      // ── params/body/response aliases ──
      endpoints.forEach((e) => {
        const nm = ucFirst(e.key);
        if (e.paramType)
          writer.writeLine(`export type ${nm}Params  = ${e.paramType};`);
        if (e.reqWrap && e.mediaType)
          writer.writeLine(
            `export type ${nm}Request = NonNullable<${e.reqWrap}['${e.mediaType}']>;`
          );
        writer.writeLine(
          `export type ${nm}Response = NonNullable<${e.respWrap}['application/json']>;`
        );
        writer.writeLine("");
      });

      // ── MEDIA_TYPES / HTTP_VERBS / ENDPOINTS ──
      writer.writeLine(`const MEDIA_TYPES = {`);
      endpoints.forEach((e) =>
        writer.writeLine(`  ${e.key}: '${e.mediaType || ""}',`)
      );
      writer.writeLine(`} as const;`);
      writer.writeLine("");
      writer.writeLine(`const HTTP_VERBS = {`);
      endpoints.forEach((e) =>
        writer.writeLine(`  ${e.key}: '${e.httpVerb}',`)
      );
      writer.writeLine(`} as const;`);
      writer.writeLine("");
      writer.writeLine(`const ENDPOINTS = {`);
      endpoints.forEach((e) => {
        writer.writeLine(`  ${e.key}: {`);
        writer.writeLine(`    methodName: '${e.methodName}' as const,`);
        writer.writeLine(
          `    extractStatus: (j:any) => { if (j.status == null) throw new Error('no status'); return j.status as any },`
        );
        writer.writeLine(`  },`);
      });
      writer.writeLine(`} as const;`);
      writer.writeLine("");

      // ── Api class ──
      writer.writeLine(`export class ${className} {`);
      writer.writeLine(
        `  private client: GeneratedClient<AxiosRequestConfig & { fullResponse?: boolean }>;`
      );
      writer.writeLine(`  private axios:   AxiosInstance;`);
      writer.writeLine(
        `  private retryOptions: { retries: number; delay: number };`
      );
      writer.writeLine(`  private logRequests: boolean;`);
      writer.writeLine("");

      // constructor
      writer.writeLine(`  constructor(config: ${className}Config = {}) {`);
      writer.writeLine(
        `    const baseUrl = config.baseUrl ?? 'https://${HOST}';`
      );
      writer.writeLine(
        `    this.axios        = axios.create({ baseURL: baseUrl, ...config.axiosConfig });`
      );
      writer.writeLine(
        `    this.retryOptions = config.retryOptions ?? { retries: 0, delay: 0 };`
      );
      writer.writeLine(`    this.logRequests  = config.logRequests ?? false;`);
      writer.writeLine("");
      writer.writeLine(
        `    const apiClient: ApiClient<AxiosRequestConfig & { fullResponse?: boolean }> = {`
      );
      writer.writeLine(
        `      async request(method, url, headers, body, qp, opts = {}) {`
      );
      writer.writeLine(`        const { fullResponse, ...rest } = opts;`);
      writer.writeLine(
        `        const res = await axios.request({ method, url, headers, data: body, params: qp, ...rest });`
      );
      writer.writeLine(`        return fullResponse ? res : res.data;`);
      writer.writeLine(`      },`);
      writer.writeLine(`    };`);
      writer.writeLine(
        `    this.client = new GeneratedClient(apiClient, baseUrl);`
      );
      writer.writeLine("");
      writer.writeLine(`    // 各エンドポイントを bind`);
      writer.writeLine(
        `    for (const k of Object.keys(ENDPOINTS) as Array<keyof typeof ENDPOINTS>) {`
      );
      writer.writeLine(`      const verb = HTTP_VERBS[k] as string;`);
      writer.writeLine(`      if (verb === 'get') {`);
      writer.writeLine(
        `        (this as any)[k]      = this.createGetMethod(k);`
      );
      writer.writeLine(
        `        (this as any)[\`\${k}Full\`] = this.createFullMethod(k);`
      );
      writer.writeLine(`      } else {`);
      writer.writeLine(
        `        (this as any)[k]      = this.createBodyMethod(k);`
      );
      writer.writeLine(
        `        (this as any)[\`\${k}Full\`] = this.createFullMethod(k);`
      );
      writer.writeLine(`      }`);
      writer.writeLine(`    }`);
      writer.writeLine(`  }`);
      writer.writeLine("");

      // createBodyMethod
      writer.writeLine(
        `  private createBodyMethod<K extends keyof typeof ENDPOINTS>(key:K) {`
      );
      writer.writeLine(`    const fn = ENDPOINTS[key].methodName;`);
      writer.writeLine(
        `    return async (body:any, headers={}, opts?:AxiosRequestConfig) => {`
      );
      writer.writeLine(
        `      const params = { parameter: headers, requestBody: { [MEDIA_TYPES[key]]: body } };`
      );
      writer.writeLine(
        `      const json = await (this.client as any)[fn](params, opts);`
      );
      writer.writeLine(`      if (json.ok === 0) throw new Error('ok=0');`);
      writer.writeLine(`      return ENDPOINTS[key].extractStatus(json);`);
      writer.writeLine(`    };`);
      writer.writeLine(`  }`);
      writer.writeLine("");

      // createGetMethod
      writer.writeLine(
        `  private createGetMethod<K extends keyof typeof ENDPOINTS>(key:K) {`
      );
      writer.writeLine(`    const fn = ENDPOINTS[key].methodName;`);
      writer.writeLine(
        `    return async (query={}, headers={}, opts?:AxiosRequestConfig) => {`
      );
      writer.writeLine(
        `      const json = await (this.client as any)[fn]({ parameter: headers, query }, opts);`
      );
      writer.writeLine(`      return ENDPOINTS[key].extractStatus(json);`);
      writer.writeLine(`    };`);
      writer.writeLine(`  }`);
      writer.writeLine("");

      // createFullMethod
      writer.writeLine(
        `  private createFullMethod<K extends keyof typeof ENDPOINTS>(key:K) {`
      );
      writer.writeLine(`    const fn = ENDPOINTS[key].methodName;`);
      writer.writeLine(
        `    return async (arg:any={}, headers={}, opts?:AxiosRequestConfig) => {`
      );
      writer.writeLine(
        `      const fullOpts = { ...(opts||{}), fullResponse:true };`
      );
      writer.writeLine(`      if (HTTP_VERBS[key] === 'get') {`);
      writer.writeLine(
        `        return (this.client as any)[fn]({ parameter: headers, query: arg }, fullOpts);`
      );
      writer.writeLine(`      } else {`);
      writer.writeLine(
        `        const params = { parameter: headers, requestBody: { [MEDIA_TYPES[key]]: arg } };`
      );
      writer.writeLine(
        `        return (this.client as any)[fn](params, fullOpts);`
      );
      writer.writeLine(`      }`);
      writer.writeLine(`    };`);
      writer.writeLine(`  }`);
      writer.writeLine("");

      // public methods + JSDoc
      endpoints.forEach((ep) => {
        const {
          rawKey,
          key,
          httpVerb,
          mediaType,
          reqProps,
          paramProps,
          paramType,
          reqWrap,
        } = ep;

        const name = capitalize(key);
        const statRt = `Promise<${name}Status>`;
        const fullRt = `Promise<${name}Response>`;
        const queryDoc = toDocShape(paramProps);
        const bodyDoc = toDocShape(reqProps, mediaType);
        const endpointUrl = toEndpointPath(rawKey);

        // ─── status-only JSDoc ───
        writer.writeLine("  /**");
        writer.writeLine(`   * ### ${httpVerb.toUpperCase()} /${endpointUrl}`);
        if (mediaType)
          writer.writeLine(`   * **Content-Type**: \`${mediaType}\``);
        writer.writeLine("   *");
        if (httpVerb === "get") {
          writer.writeLine(
            `   * @param query - ${queryDoc} URL クエリパラメータ (任意)`
          );
        } else {
          writer.writeLine(`   * @param body - ${bodyDoc} リクエストボディ`);
        }
        writer.writeLine("   * @param extraHeaders 追加ヘッダー (任意)");
        writer.writeLine("   * @param axiosOpts    Axios オプション (任意)");
        writer.writeLine(`   * @returns ${statRt} ステータスのみを返します`);
        writer.writeLine("   * @throws AxiosError ネットワーク／HTTP エラー");
        if (httpVerb !== "get") {
          writer.writeLine("   * @throws Error API が `ok = 0` を返した場合");
        }
        writer.writeLine("   * @example");
        writer.writeLine("   * ```ts");
        if (httpVerb === "get") {
          writer.writeLine(
            `   * const res = await api.${key}(${
              paramType ? name + "Params" : "{}"
            });`
          );
        } else {
          writer.writeLine(`   * const res = await api.${key}(${bodyDoc});`);
        }
        writer.writeLine("   * console.log(res)");
        writer.writeLine("   * ```");
        writer.writeLine("   */");
        writer.writeLine(`  public ${key}!: (`);
        if (httpVerb === "get") {
          writer.writeLine(
            `    query?: ${
              paramType ? name + "Params" : "Record<string, any>"
            },`
          );
        } else {
          writer.writeLine(
            `    body:  ${reqWrap && mediaType ? name + "Request" : "any"},`
          );
        }
        writer.writeLine("    extraHeaders?: Record<string, string>,");
        writer.writeLine("    axiosOpts?:    AxiosRequestConfig");
        writer.writeLine(`  ) => ${statRt};`);
        writer.writeLine("");

        // ─── full-response JSDoc ───
        writer.writeLine("  /**");
        writer.writeLine(
          `   * ### ${httpVerb.toUpperCase()} /${endpointUrl} (full response)`
        );
        if (mediaType)
          writer.writeLine(`   * **Content-Type**: \`${mediaType}\``);
        writer.writeLine("   *");
        if (httpVerb === "get") {
          writer.writeLine(
            `   * @param query - ${queryDoc} URL クエリパラメータ (任意)`
          );
        } else {
          writer.writeLine(`   * @param body - ${bodyDoc} リクエストボディ`);
        }
        writer.writeLine("   * @param extraHeaders 追加ヘッダー (任意)");
        writer.writeLine("   * @param axiosOpts    Axios オプション (任意)");
        writer.writeLine(
          `   * @returns ${fullRt} full axios response を返します`
        );
        writer.writeLine("   * @throws AxiosError ネットワーク／HTTP エラー");
        writer.writeLine("   * @example");
        writer.writeLine("   * ```ts");
        if (httpVerb === "get") {
          writer.writeLine(
            `   * const full = await api.${key}Full(${
              paramType ? name + "Params" : "{}"
            });`
          );
        } else {
          writer.writeLine(
            `   * const full = await api.${key}Full(${bodyDoc});`
          );
        }
        writer.writeLine("   * console.log(full)");
        writer.writeLine("   * ```");
        writer.writeLine("   */");
        writer.writeLine(`  public ${key}Full!: (`);
        if (httpVerb === "get") {
          writer.writeLine(
            `    query?: ${
              paramType ? name + "Params" : "Record<string, any>"
            },`
          );
        } else {
          writer.writeLine(
            `    body:  ${reqWrap && mediaType ? name + "Request" : "any"},`
          );
        }
        writer.writeLine("    extraHeaders?: Record<string, string>,");
        writer.writeLine("    axiosOpts?:    AxiosRequestConfig");
        writer.writeLine(`  ) => ${fullRt};`);
        writer.writeLine("");
      });

      writer.writeLine(`}`); // end class
    },
    { overwrite: true }
  );

  // ── 空 interface/型リテラルを Record<string,unknown> に
  const outFile = project.getSourceFileOrThrow(OUT);
  outFile.getInterfaces().forEach((i) => {
    if (i.getMembers().length === 0) {
      i.addIndexSignature({
        keyName: "k",
        keyType: "string",
        returnType: "unknown",
      });
    }
  });
  outFile.getDescendantsOfKind(SyntaxKind.TypeLiteral).forEach((tl) => {
    if (tl.getMembers().length === 0) {
      tl.replaceWithText("Record<string, unknown>");
    }
  });

  await project.save();
  console.log("✅ Generated", path.relative(ROOT, OUT));
}

// ───────────── helper functions ─────────────

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function lcFirst(s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
function ucFirst(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function toPascal(s: string) {
  return s
    .replace(/[^a-z0-9]+/gi, " ")
    .split(" ")
    .map(ucFirst)
    .join("");
}
function pickPreferred(arr: string[], pref: string[]) {
  return arr.sort((a, b) => pref.indexOf(a) - pref.indexOf(b))[0];
}
function propsToDoc(iface: import("ts-morph").InterfaceDeclaration) {
  return iface
    .getProperties()
    .map((p) => {
      const nn = p.getNameNode();
      const name = Node.isStringLiteral(nn)
        ? nn.getLiteralValue()
        : p.getName();
      const typeText = p.getType().getText(p);
      return `${name}${p.hasQuestionToken() ? "?" : ""}: ${typeText}`;
    })
    .join("; ");
}
function toDocShape(props?: string, mt?: string): string {
  if (!props) return "Record<string,any>";
  if (mt && props.startsWith(mt + ":")) {
    const inner = props.slice(mt.length + 1).trim();
    return inner.startsWith("{") ? inner : `{ ${inner} }`;
  }
  return `{ ${props} }`;
}
function toEndpointPath(k: string) {
  return k.replace(/([a-z0-9])([A-Z])/g, "$1/$2").toLowerCase();
}

/* kick-off */
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
