//import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

/*
// https://vite.dev/config/
export default defineConfig({




  
})
*/
export default {

  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/react-useless-button",

  root: resolve(__dirname, ''),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 5173
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}