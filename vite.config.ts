import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/blog-attempt-v2/'; // Change to your repo name
  }

  return config;
});
