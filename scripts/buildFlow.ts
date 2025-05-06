#!/usr/bin/env ts-node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
// import { merge, isErrorResult } from 'openapi-merge';
// import type { Swagger } from 'atlassian-openapi';

/* ------------------------------------------------------------------ */
/*  ★ ヘルパー                                                          */
/* ------------------------------------------------------------------ */

/** パス＋メソッド → operationId（空セグメント安全化済み） */
function toOperationId(method: string, p: string): string {
  const segments = p.replace(/^\//, '').replace(/\/$/, '').split('/').filter(Boolean);
  return method + segments.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

/** CamelCase を分割して空白を挿入 */
const splitCamelCase = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

/* ------------------------------------------------------------------ */
/*  ★ パッチ群                                                          */
/* ------------------------------------------------------------------ */

function fillEmptyArrayItems(obj: any): void {
  if (obj && typeof obj === 'object') {
    if (obj.type === 'array' && obj.items && !Object.keys(obj.items).length) {
      obj.items.type = 'object';
    }
    for (const v of Object.values(obj)) fillEmptyArrayItems(v);
  }
}

function sanitizeFallbackedProperties(doc: any): void {
  const schemas = (doc.components?.schemas as Record<string, any>) || {};
  for (const sch of Object.values(schemas) as any[]) {
    if (!sch.properties) continue;
    for (const key of Object.keys(sch.properties)) {
      if (key.startsWith('fallbacked_')) {
        sch.properties[key] = {
          type: 'object',
          additionalProperties: { type: 'array', items: { type: 'string' } },
        };
      }
    }
  }
}

function sanitizeUrlEncodedFormData(doc: any): void {
  const valid = (n: string) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(n);
  for (const pi of Object.values<any>(doc.paths)) {
    for (const op of Object.values<any>(pi)) {
      const form = op.requestBody?.content?.['application/x-www-form-urlencoded'];
      if (!form) continue;
      delete form.example;
      delete form.examples;
      const orig = form.schema as { properties?: Record<string, any>; required?: string[] };
      const props: Record<string, any> = {};
      for (const [name, sch] of Object.entries(orig.properties ?? {})) {
        if (!valid(name)) continue;
        props[name] = sch.type === 'array'
          ? { type: 'array', items: { type: 'string' }, ...(sch.description && { description: sch.description }) }
          : { type: 'string', ...(sch.description && { description: sch.description }), ...(sch.enum && { enum: (sch.enum as any[]).map(String) }) };
      }
      form.schema = Object.keys(props).length
        ? { type: 'object', properties: props, required: orig.required ?? [], additionalProperties: false }
        : { type: 'object', additionalProperties: { type: 'string' } };
    }
  }
}

function patchYml(file: string): void {
  const doc = yaml.load(fs.readFileSync(file, 'utf8')) as any;

  // paths ソート
  if (doc.paths) {
    const sorted: Record<string, any> = {};
    for (const k of Object.keys(doc.paths).sort()) sorted[k] = doc.paths[k];
    doc.paths = sorted;
  }
  // operationId / summary 自動付与
  for (const [p, item] of Object.entries<any>(doc.paths)) {
    for (const m of ['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'trace'] as const) {
      const op = item[m];
      if (!op) continue;
      if (!op.operationId) op.operationId = toOperationId(m, p);
      if (!op.summary && typeof op.operationId === 'string') {
        const text = splitCamelCase(op.operationId).trim();
        op.summary = text.charAt(0).toUpperCase() + text.slice(1);
      }
    }
  }
  fillEmptyArrayItems(doc);
  sanitizeFallbackedProperties(doc);
  sanitizeUrlEncodedFormData(doc);

  fs.writeFileSync(file, yaml.dump(doc, { lineWidth: 1000 }), 'utf8');
}

/* ------------------------------------------------------------------ */
/*  ★ mitmproxy2swagger 一括実行                                         */
/* ------------------------------------------------------------------ */

function genSwagger(inputs: string[], outFile: string, baseUrl: string): void {
  const inArgs = inputs.map(f => `-i "${f.replace(/"/g, '\\"')}"`).join(' \\\n      ');
  const cmd = [inArgs, `-o "${outFile}"`, `-p "${baseUrl}"`, `--format flow`].join(' \\\n      ');
  console.log(`🛠 Generating ${path.basename(outFile)}`);
  execSync(`mitmproxy2swagger \\\n      ${cmd}`, { stdio: 'inherit' });
  // ignore: 行を除去して再実行
  const buf = fs.readFileSync(outFile, 'utf8').replace(/ignore:/g, '');
  fs.writeFileSync(outFile, buf, 'utf8');
  execSync(`mitmproxy2swagger \\\n      ${cmd}`, { stdio: 'inherit' });
}

/* ------------------------------------------------------------------ */
/*  ★ メイン                                                            */
/* ------------------------------------------------------------------ */

async function main(): Promise<void> {
  const rootList = path.resolve(__dirname, '..', 'list');
  const rootOut = path.resolve(__dirname, '..', 'endpoints');

  for (const host of fs.readdirSync(rootList)) {
    const listDir = path.join(rootList, host);
    if (!fs.statSync(listDir).isDirectory()) continue;
    console.log(`\n=== [${host}] Processing ===`);

    const outDir = path.join(rootOut, host);
    const indexYaml = path.join(outDir, 'index.mirrativ.yml');
    const tmpYaml = path.join(outDir, '.tmp.yml');
    const pathsJson = path.join(outDir, 'index.paths.json');
    fs.mkdirSync(outDir, { recursive: true });

    // 1) 全ファイル取得
    const inputs = fs
      .readdirSync(listDir, { withFileTypes: true })
      .filter(d => d.isFile())
      .map(d => path.join(listDir, d.name));
    if (!inputs.length) {
      console.warn(`⚠ No inputs in ${listDir}`);
      continue;
    }

    // 2) 新規分を一時ファイルに生成 & パッチ
    genSwagger(inputs, tmpYaml, `https://${host}`);
    patchYml(tmpYaml);

    // 3) 既存 index をロードまたはスケルトン作成
    let existing: any;
    if (fs.existsSync(indexYaml)) {
      existing = yaml.load(fs.readFileSync(indexYaml, 'utf8')) as any;
    } else {
      existing = { openapi: '3.0.0', info: { title: host, version: '1.0.0' }, paths: {} };
    }

    // 4) tmp から追加分ロード
    const tmpDoc = yaml.load(fs.readFileSync(tmpYaml, 'utf8')) as any;

    // 5) 重複しないパスだけを追加
    for (const [p, def] of Object.entries(tmpDoc.paths || {})) {
      if (!existing.paths[p]) {
        existing.paths[p] = def;
        console.log(`   + Added new path: ${p}`);
      }
    }

    // 6) index に書き出し & tmp 削除
    fs.writeFileSync(indexYaml, yaml.dump(existing, { lineWidth: 1000 }), 'utf8');
    fs.unlinkSync(tmpYaml);
    console.log(`✅ Updated index: ${path.relative(rootOut, indexYaml)}`);

    // 7) パスサマリー出力
    const pathDetails = Object.entries(existing.paths).map(([p, mo]: [string, any]) => {
      const methods = Object.keys(mo)
        .filter(m => ['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'trace'].includes(m))
        .map(m => m.toUpperCase());
      const paramsCount = Object.values<any>(mo)
        .reduce((sum, op) => sum + (Array.isArray(op.parameters) ? op.parameters.length : 0), 0);
      return { path: p, methods, operationCount: methods.length, parametersCount: paramsCount };
    });
    const summary = {
      host,
      generatedAt: new Date().toISOString(),
      totalPaths: pathDetails.length,
      paths: pathDetails,
    };
    fs.writeFileSync(pathsJson, JSON.stringify(summary, null, 2), 'utf8');
    console.log(`✅ Wrote paths summary: ${path.relative(rootOut, pathsJson)}`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
