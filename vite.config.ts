import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'motion', test: /node_modules\/framer-motion/ },
            { name: 'react-vendor', test: /node_modules\/(react|react-dom|react-router|scheduler)\// },
          ],
        },
      },
    },
  },
})
