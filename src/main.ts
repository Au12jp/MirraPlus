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
const API_CLIENT = path.join(ROOT, 'src', 'mirrativApi.ts')
const SPEC_FILE = path.join(ROOT, 'src', 'www.mirrativ.com.ts')
const OUT_DIR = path.join(ROOT, 'src', 'managers')

// 1) ts-morph project
const project = new Project({ tsConfigFilePath: path.join(ROOT, 'tsconfig.json') })

// 2) load both source files
const apiSF = project.addSourceFileAtPath(API_CLIENT)
const specSF = project.addSourceFileAtPath(SPEC_FILE)

// 3) build a map of every type-alias in both files
const aliasMap = new Map<string, string>()
    ;[apiSF, specSF].forEach(sf =>
        sf.getTypeAliases().forEach((ta: TypeAliasDeclaration) => {
            const name = ta.getName()
            const tn = ta.getTypeNode()
            if (tn) aliasMap.set(name, tn.getText())
        })
    )

specSF.getInterfaces().forEach(iface => {
    const name = iface.getName()
    if (!name.startsWith('Parameter$')) return
    // build a literal out of its members
    const members = iface.getMembers().map(m => m.getText()).join(' ')
    aliasMap.set(name, `{ ${members} }`)
})

// helper: extract JSDoc text
function extractJsDoc(node: Node): string | undefined {
    const docs = node.getChildrenOfKind(SyntaxKind.JSDoc)
    if (!docs.length) return undefined
    return docs[0].getInnerText().trim() || undefined
}

// helper: inline any alias (dropping "| undefined")
function inlineAlias(t: string): string {
    const bare = t.split('|')[0].trim()
    return aliasMap.get(bare) ?? t
}

// 4) load the MirrativApi class
const apiClass = apiSF.getClassOrThrow('MirrativApi')

// 5) collect every “callable” member (methods + function-typed props)
const methods: MethodInfo[] = apiClass
    .getMembers()
    .filter(member =>
        Node.isMethodDeclaration(member)
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
            // real class method
            params = member.getParameters().map(p => ({
                name: p.getName(),
                type: inlineAlias(p.getType().getText(p)),
                optional: p.isOptional(),
                jsdoc: extractJsDoc(p),
            }))
            returnType = member.getReturnType().getText()
        } else {
            // property with a call signature
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

// 6) group by “segment” (leading lowercase before first Upper or underscore)
const groups = new Map<string, MethodInfo[]>()
methods.forEach(mi => {
    const seg = mi.name.match(/^([a-z]+?)(?=[A-Z]|_)/)?.[1] ?? mi.name
    if (!groups.has(seg)) groups.set(seg, [])
    groups.get(seg)?.push(mi)
})

// 7) ensure output dir
fs.mkdirSync(OUT_DIR, { recursive: true })

// 8) emit one Manager per group
for (const [seg, mlist] of groups.entries()) {
    const className = seg[0].toUpperCase() + seg.slice(1) + 'Manager'
    const lines: string[] = []

    lines.push(`import type { AxiosRequestConfig } from 'axios'`)
    lines.push(`import { MirrativApi } from '../mirrativApi'\n`)
    lines.push(`/**`)
    lines.push(` * ${seg} 関連 API をまとめたマネージャー（${mlist.length} 件）`)
    lines.push(` */`)
    lines.push(`export class ${className} {`)
    lines.push(`  constructor(private api: MirrativApi) {}`)

    for (const mi of mlist) {
        lines.push(``)
        if (mi.jsdoc) {
            lines.push(`  /**`)
            mi.jsdoc.split(/\r?\n/).forEach(l => {
                lines.push(`   * ${l.replace(/^\s*\*?/, '')}`)
            })
            lines.push(`   */`)
        }
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
