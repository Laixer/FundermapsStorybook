import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: [
      {find: '@assets', replacement: fileURLToPath( new URL('./src/assets', import.meta.url))},
      {find: '@components', replacement: fileURLToPath( new URL('./src/components', import.meta.url))},
    ]
  }
})
