import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base = process.env.VITE_PUBLIC_BASE_PATH?.trim() || '/'

export default defineConfig({
  base,
  build: {
    outDir: 'docs',
  },
  plugins: [react(), tailwindcss()]
})
