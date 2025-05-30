import * as path from "path";
import * as fs from "fs";

export const pkgRoot = path.resolve(__dirname, "../../");

export const licenseFile = path.resolve(pkgRoot, "../../LICENSE");

export const endpointsDir = path.resolve(pkgRoot, "endpoints");

export const endpoints = fs.readdirSync(endpointsDir)
    .filter(name => {
        const full = path.join(endpointsDir, name);
        return fs.statSync(full).isDirectory();
    });

export const docsDir = path.resolve(pkgRoot, "docs");

export const distDir = path.resolve(pkgRoot, "dist");

export const sourceDir = path.resolve(pkgRoot, "src");

export const coreDir = path.resolve(sourceDir, "@core");

export const modulesDir = path.resolve(sourceDir, "@modules");

export const endpointsOutputDir = path.join(docsDir, "endpoints");

export const libDir = path.resolve(pkgRoot, "lib");

export const libCjsDir = path.resolve(libDir, "cjs");

export const libEsmDir = path.resolve(libDir, "esm");

export const libTypesDir = path.resolve(libDir, "types");

export const redocDir = path.join(docsDir, "redoc");

export const tmpSwaggerUiDir = ".tmp_swagger-ui";
