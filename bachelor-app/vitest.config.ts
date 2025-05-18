// vitest.config.ts
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      // same as your tsconfig “paths”
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
