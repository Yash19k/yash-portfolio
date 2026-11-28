import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Only libraries the first screen needs; canvas-confetti (contact section) loads lazily.
          vendor: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
  server: {
    port: 5173,
    host: true,
  },
});
