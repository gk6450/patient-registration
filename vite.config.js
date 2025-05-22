import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Don’t pre-bundle PGlite — let Vite load its WASM at runtime
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },

  // Build web-workers as ES modules (no IIFE/UMD) so Rollup can code-split
  worker: {
    format: 'es',
  },

  // Prefer browser entrypoints in dependencies (skip Node-only code)
  resolve: {
    browserField: true,
  },

  // Target modern browsers so top-level await & WASM can work
  build: {
    target: 'esnext',
  },
})
