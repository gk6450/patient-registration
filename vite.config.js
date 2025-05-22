import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['@electric-sql/pglite']  // Don't pre-bundle it — let Vite handle the WASM
  },
  build: {
    target: 'esnext', // Enable top-level await & modern features
  },
})
