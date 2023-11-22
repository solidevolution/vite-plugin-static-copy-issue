import { resolve } from 'path'

import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './public/shared',
          dest: './../../app/public',
        },
      ],
    }),
    vue(),
  ] as any[],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'Lib',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
