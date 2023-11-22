# vite-plugin-static-copy

This repo reproduces the issue: https://github.com/sapphi-red/vite-plugin-static-copy/issues/65

## Setup

```bash
npm install
```

## Reproduce it

```bash
npm run dev -w lib
npm run dev -w app
```

results in this error:

[vite-plugin-static-copy:build] ENOENT: no such file or directory, unlink '/path/to/repo/vite-plugin-static-copy/packages/app/public/shared/fonts/Inter-Bold.woff2'
