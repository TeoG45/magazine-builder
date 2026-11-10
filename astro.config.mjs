import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwind()]
  }
});
