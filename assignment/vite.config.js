import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ This is required for Vercel
  plugins: [tailwindcss(), react()],
});
