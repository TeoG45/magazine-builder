import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Forțăm adaptorul să nu mai folosească vechiul Node 18
    functionPerRoute: false,
  }),
  vite: {
    plugins: [tailwind()]
  }
});
