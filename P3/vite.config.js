import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react' // or your framework's plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})   