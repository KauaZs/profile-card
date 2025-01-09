import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config()
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'import.meta.env.API_URL': JSON.stringify(process.env.API_URL)
  },
  server: {
    proxy: {
     /*  "/api": {
        target: process.env.API_URL,
        changeOrigin: true,
      }, */
    },
  },
})
