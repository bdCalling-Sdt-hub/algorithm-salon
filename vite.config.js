import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.10.11",
    port: "3005",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});