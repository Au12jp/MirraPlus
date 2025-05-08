// src/main.ts

import * as path from "path";
import * as fs from "fs";
import * as Config from "./tools/config";
import { convertYamlToJson } from "./tools/convertOAS3yamlToJson";
import { generateTsCode } from "./tools/generateTsCode";
import { clean } from "./tools/clean";
import { shell } from "./tools/shell";
import { copyPackageSet } from "./tools/copyPackageSet";

/**
 * 空のインターフェイスを
 * {[key: string]: unknown} を持つものに置き換え
 */
function fixEmptyInterfaces(tsFile: string) {
  let src = fs.readFileSync(tsFile, "utf8");
  src = src.replace(
    // export interface XXX { }
    /export interface (\w[\w$<>,\s]*)\s*\{\s*\}/g,
    (_match, name) => {
      return `export interface ${name} {\n  [key: string]: unknown;\n}`;
    }
  );
  fs.writeFileSync(tsFile, src, "utf8");
}


/**
 * 生成された TS ファイル中の空オブジェクト型 `{}` を
 * `Record<string, unknown>` に置き換える
 */
function replaceEmptyObjectTypes(tsFile: string) {
  let src = fs.readFileSync(tsFile, "utf8");
  // `: {}` のパターンをすべて `: Record<string, unknown>` に置換
  src = src.replace(/:\s*{\s*}/g, ": Record<string, unknown>");
  fs.writeFileSync(tsFile, src, "utf8");
}

/**
 * 生成された TS ファイルを読み、
 * `"application/json": { ... }` ブロック内の
 * 英数字・_$ 以外を含むプロパティ名のみを
 * ダブルクオートで囲む。
 */
function quoteInvalidTsKeys(tsFile: string) {
  const lines = fs.readFileSync(tsFile, "utf8").split(/\r?\n/);
  const out: string[] = [];

  let inJsonBlock = false;
  let jsonIndent = 0;
  // プロパティ行マッチ用
  const propRe = /^(\s*)([^\s:]+?)(\??):(\s*[^;]+;?)$/;

  for (const raw of lines) {
    let line = raw;

    // "application/json": { の開始を検知
    const openMatch = raw.match(/^(\s*)"application\/json":\s*{\s*$/);
    if (openMatch) {
      inJsonBlock = true;
      jsonIndent = openMatch[1].length;
      out.push(raw);
      continue;
    }
    // ブロックを抜ける判定
    const indent = (raw.match(/^(\s*)/)?.[1] || "").length;
    if (inJsonBlock && indent <= jsonIndent) {
      inJsonBlock = false;
    }

    // ブロック内ならキーをチェック
    if (inJsonBlock) {
      const m = raw.match(propRe);
      if (m) {
        const [, pad, rawKey, opt, rest] = m;
        // JS有効な識別子ならスキップ
        if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(rawKey)) {
          const safeKey = rawKey.replace(/"/g, '\\"');
          line = `${pad}"${safeKey}"${opt}:${rest}`;
        }
      }
    }

    out.push(line);
  }

  fs.writeFileSync(tsFile, out.join("\n"), "utf8");
}

export const build = async (endpoint: string): Promise<void> => {
  const params = clean(endpoint);
  const entryPoint = path.join(Config.endpointsDir, endpoint, "index.mirrativ.yml");

  // 1) YAML → JSON
  await convertYamlToJson({
    filename: entryPoint,
    output: params.endpointJsonFile,
  });

  // 2) TS コード生成
  generateTsCode(entryPoint, params.tsFile);

  // 2.5) `{}` 型を Record<string, unknown> に置換
  console.log(`🔧 Replacing empty object types in ${params.tsFile}`);
  replaceEmptyObjectTypes(params.tsFile);
  // 2.5) 空インターフェイス対応
  console.log(`🔧 Fixing empty interfaces in ${params.tsFile}`);
  fixEmptyInterfaces(params.tsFile);

  // 3) 無効なプロパティ名をクォート
  console.log(`🔧 Quoting invalid TS keys in ${params.tsFile}`);
  quoteInvalidTsKeys(params.tsFile);

  const apiEndpoints = ["www.mirrativ.com"];
  if (apiEndpoints.includes(endpoint)) {
    console.log(`🔄 ${endpoint} では build:api を先に実行します…`);
    try {
      // 必要なファイルが揃っているか確認
      const apiScript = path.join(__dirname, 'generate-mirrativ-api.ts');
      if (!fs.existsSync(apiScript)) {
        console.warn(`⚠️ build:api スクリプトが見つからないためスキップします (${apiScript})`);
      } else {
        await shell('npm run build:api');
      }
    } catch (err) {
      console.warn(`⚠️ build:api 実行中にエラーが発生しましたがスキップします: ${err}`);
    }
  }

  // 5) ESLint で自動整形
  await shell(`eslint --fix ${params.tsFile}`);
};

const main = async () => {
  // 各エンドポイントを並列ビルド
  const promises = Config.endpoints.map(build);
  await Promise.all(promises);

  // 共通ライブラリ部分の tsc 実行
  await Promise.all([
    shell(`yarn tsc -p tsconfig.cjs.json`),
    shell(`yarn tsc -p tsconfig.esm.json`),
    shell(
      `yarn tsc -p tsconfig.esm.json -d --emitDeclarationOnly --outDir ${Config.libTypesDir}`
    ),
  ]);

  // cherry-pick 組み込み
  await shell(
    `cherry-pick --types-dir ./types --cjs-dir ./cjs --esm-dir ./esm --cwd ${Config.libDir} --input-dir ../${path.basename(
      Config.sourceDir
    )}`
  );

  // パッケージセットのコピー
  await copyPackageSet();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
