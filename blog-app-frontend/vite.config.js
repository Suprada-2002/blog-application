import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(
  {
    proxy: {
      '/blogs': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        
      },
  },
  plugins: [ tailwindcss(), react()],
  }
)
