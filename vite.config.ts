import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Para GitHub Pages user/organization repo, base debe ser '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
});
