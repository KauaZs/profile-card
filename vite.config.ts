import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config()
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      "/api": {
        target: process.env.API_URL,
        changeOrigin: true,
      },
    } : {}
  }
})
