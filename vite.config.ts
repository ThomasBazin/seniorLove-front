import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 3000, // or any port you prefer
  },
  plugins: [react()],
})
