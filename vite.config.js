import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "10.0.80.205",
    port: "3005",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});