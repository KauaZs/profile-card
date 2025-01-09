/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly API_KEY: string
    readonly API_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }