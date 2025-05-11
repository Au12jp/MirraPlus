#!/usr/bin/env ts-node

import fs from 'fs'
import path from 'path'
import {
    Project,
    SyntaxKind,
    Node,
    TypeAliasDeclaration,
    ParameterDeclaration,
} from 'ts-morph'

interface MethodInfo {
    name: string
    params: { name: string; type: string; optional: boolean; jsdoc?: string }[]
    returnType: string
    jsdoc?: string
}

const ROOT = process.cwd()
const API_CLIENT = path.join(ROOT, 'src', '@modules', 'mirrativApi.ts')
const SPEC_FILE = path.join(ROOT, 'src', '@core', 'www.mirrativ.com.ts')
const OUT_DIR = path.join(ROOT, 'src', '@core', 'managers')

// ── 1) Initialize ts-morph and load files
const project = new Project({ tsConfigFilePath: path.join(ROOT, 'tsconfig.json') })
const apiSF = project.addSourceFileAtPath(API_CLIENT)
const specSF = project.addSourceFileAtPath(SPEC_FILE)

// ── 2) Build a map of every alias (type & interface) so we can inline query types
const aliasMap = new Map<string, string>()

    // a) type aliases
    ;[apiSF, specSF].forEach(sf =>
        sf.getTypeAliases().forEach((ta: TypeAliasDeclaration) => {
            const name = ta.getName()
            const tn = ta.getTypeNode()
            if (tn) aliasMap.set(name, tn.getText())
        })
    )

// b) Parameter$… interfaces from the spec file
specSF.getInterfaces().forEach(iface => {
    const name = iface.getName()
    if (!name.startsWith('Parameter$')) return
    const members = iface.getMembers().map(m => m.getText()).join(' ')
    aliasMap.set(name, `{ ${members} }`)
})

// ── 3) Helpers

function extractJsDoc(node: Node): string | undefined {
    const docs = node.getChildrenOfKind(SyntaxKind.JSDoc)
    if (!docs.length) return undefined
    return docs[0].getInnerText().trim() || undefined
}

/** inline an alias (dropping any “| undefined” suffix) */
function inlineAlias(typeText: string): string {
    const bare = typeText.split('|')[0].trim()
    return aliasMap.get(bare) ?? typeText
}

// ── 4) Pull out our MirrativApi class
const apiClass = apiSF.getClassOrThrow('MirrativApi')

// ── 5) Collect everything “callable” but only keep ones that have JSDoc
const methods = apiClass
    .getMembers()
    .filter(member =>
        // either a real method …
        Node.isMethodDeclaration(member)
        // … or a function-typed property
        || (Node.isPropertyDeclaration(member)
            && member.getType().getCallSignatures().length > 0)
    )
    .map(member => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const name = member.getName()
        const jsdoc = extractJsDoc(member)

        let params: MethodInfo['params'] = []
        let returnType: string

        if (Node.isMethodDeclaration(member)) {
            params = member.getParameters().map(p => ({
                name: p.getName(),
                type: inlineAlias(p.getType().getText(p)),
                optional: p.isOptional(),
                jsdoc: extractJsDoc(p),
            }))
            returnType = member.getReturnType().getText()
        } else {
            const sig = member.getType().getCallSignatures()[0]
            returnType = sig.getReturnType().getText()
            params = sig.getParameters().map(sym => {
                const decl = sym.getDeclarations()[0]
                if (Node.isParameterDeclaration(decl)) {
                    return {
                        name: sym.getName(),
                        type: inlineAlias(decl.getType().getText(decl)),
                        optional: decl.isOptional(),
                        jsdoc: extractJsDoc(decl as ParameterDeclaration),
                    }
                }
                return { name: sym.getName(), type: 'any', optional: false }
            })
        }

        return { name, jsdoc, params, returnType }
    })
    // **filter out anything lacking JSDoc on the method itself**
    .filter(mi => typeof mi.jsdoc === 'string')

// ── 6) Group by the “segment” prefix
const groups = new Map<string, MethodInfo[]>()
methods.forEach(mi => {
    const seg = mi.name.match(/^([a-z]+?)(?=[A-Z]|_)/)?.[1] ?? mi.name
    if (!groups.has(seg)) groups.set(seg, [])
    groups.get(seg)!.push(mi)
})

// ── 7) Ensure output dir
fs.mkdirSync(OUT_DIR, { recursive: true })

// ── 8) Emit one Manager file **only** for non-empty groups
for (const [seg, mlist] of groups.entries()) {
    if (!mlist.length) continue

    const className = seg[0].toUpperCase() + seg.slice(1) + 'Manager'
    const lines: string[] = []

    lines.push(`import type { AxiosRequestConfig } from 'axios'`)
    lines.push(`import { MirrativApi } from '../@core/mirrativApi'\n`)
    lines.push(`/**`)
    lines.push(` * ${seg} 関連 API をまとめたマネージャー（${mlist.length} 件）`)
    lines.push(` */`)
    lines.push(`export class ${className} {`)
    lines.push(`  constructor(private api: MirrativApi) {}`)

    for (const mi of mlist) {
        lines.push(``)
        // method‐level JSDoc
        lines.push(`  /**`)
        mi.jsdoc!.split(/\r?\n/).forEach(l => {
            lines.push(`   * ${l.replace(/^\s*\*?/, '')}`)
        })
        lines.push(`   */`)

        lines.push(`  async ${mi.name}(`)
        mi.params.forEach(p => {
            if (p.jsdoc) lines.push(`    /** ${p.jsdoc} */`)
            lines.push(`    ${p.name}${p.optional ? '?' : ''}: ${p.type},`)
        })
        lines.push(`  ): ${mi.returnType} {`)
        const args = mi.params.map(p => p.name).join(', ')
        lines.push(`    return this.api.${mi.name}(${args});`)
        lines.push(`  }`)
    }

    lines.push(`}`)
    const outPath = path.join(OUT_DIR, `${className}.ts`)
    fs.writeFileSync(outPath, lines.join('\n'), 'utf8')
    console.log(`✅ ${className}.ts`)
}

console.log('🎉 All managers generated.')
