import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // Trecem pe hybrid: paginile normale sunt statice, iar cele dinamice rulează pe server
  output: 'hybrid',
  adapter: vercel(),
  vite: {
    plugins: [tailwind()]
  }
});
