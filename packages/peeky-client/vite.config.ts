import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: [
      /@apollo/,
      /@vue\/apollo/,
      /graphql/,
    ],
    include: [
      'fast-json-stable-stringify',
      'zen-observable',
      'graphql-tag',
      'subscriptions-transport-ws',
    ],
  },
  alias: {
    tslib: 'tslib/tslib.es6.js',
  },
  build: {
    outDir: resolve(__dirname, '../peeky-client-dist/dist'),
  },
})
