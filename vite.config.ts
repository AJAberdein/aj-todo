import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path";
import Datahub from "macaca-datahub";
import datahubMiddleware from "datahub-proxy-middleware";

import datahub from './vite-plugin-vue-datahub'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), datahub()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3010',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        }
      },
    }
  },


})
