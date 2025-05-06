// scripts/specs-to-har-manual.ts
import { promises as fs } from 'fs';
import path from 'path';

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';

interface Swagger2 {
  swagger: string;
  host?: string;
  basePath?: string;
  schemes?: string[];
  paths: Record<string, Record<string, any>>;
}

interface OpenAPI3 {
  openapi: string;
  servers?: { url: string }[];
  paths: Record<string, Record<string, any>>;
}

// HAR の最低構造
interface HarEntry {
  request: {
    method: string;
    url: string;
    httpVersion: string;
    headers: any[];
    queryString: any[];
    cookies: any[];
    headersSize: number;
    bodySize: number;
    postData?: { mimeType: string; text: string };
  };
  response: any;
  timings: any;
}

async function ensureDir(dir: string) {
  try { await fs.access(dir) }
  catch { await fs.mkdir(dir, { recursive: true }) }
}

async function main() {
  const srcDir = path.resolve('docs/endpoints');
  const outBase = path.resolve('list');

  const files = (await fs.readdir(srcDir)).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const host = path.basename(file, '.json');      // e.g. "www.mirrativ.com"
    const inPath = path.join(srcDir, file);
    const outDir = path.join(outBase, host);
    const outPath = path.join(outDir, `${host}.har`);

    await ensureDir(outDir);

    let specRaw: any;
    try {
      specRaw = JSON.parse(await fs.readFile(inPath, 'utf8'));
    } catch (err) {
      console.error(`❌ ${file} の読み込み失敗: ${(err as Error).message}`);
      continue;
    }

    // ベース URL を自前で組み立て
    let baseUrl = '';
    if ('openapi' in specRaw) {
      // OpenAPI 3.x
      const oa3 = specRaw as OpenAPI3;
      if (oa3.servers && oa3.servers.length > 0) {
        baseUrl = oa3.servers[0].url.replace(/\/$/, '');
      }
    } else if ('swagger' in specRaw) {
      // Swagger 2.0
      const s2 = specRaw as Swagger2;
      const scheme = (s2.schemes && s2.schemes[0]) || 'https';
      const host = s2.host || 'localhost';
      const bp = s2.basePath || '';
      baseUrl = `${scheme}://${host}${bp}`.replace(/\/$/, '');
    } else {
      console.warn(`⚠ このファイルは未対応の仕様です: ${file}`);
      continue;
    }

    const paths = specRaw.paths as Record<string, any>;
    const entries: HarEntry[] = [];

    for (const [p, methods] of Object.entries(paths)) {
      for (const method of Object.keys(methods) as HttpMethod[]) {
        // メソッド／パス定義がなければスキップ
        if (!methods[method]) continue;

        const url = baseUrl + p;
        const req: HarEntry['request'] = {
          method: method.toUpperCase(),
          url,
          httpVersion: 'HTTP/1.1',
          headers: [],
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0
        };

        // (オプション) requestBody がある場合のダミー
        const op = methods[method];
        if (op.requestBody || op.parameters?.some((p: any) => p.in === 'body')) {
          req.postData = {
            mimeType: 'application/json',
            text: '{}'
          };
        }

        entries.push({
          request: req,
          response: {},
          timings: {}
        });
      }
    }

    const har = {
      log: {
        version: '1.2',
        creator: {
          name: 'mitmproxy',
          version: '11.1.3',
          comment: ''
        },
        pages: [],
        entries
      }
    };

    try {
      await fs.writeFile(outPath, JSON.stringify(har, null, 2), 'utf8');
      console.log(`✅ ${host}.har を出力しました (entries: ${entries.length})`);
    } catch (err) {
      console.error(`❌ 書き込み失敗 ${outPath}:`, (err as Error).message);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
