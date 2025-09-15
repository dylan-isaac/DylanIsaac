import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://dylanisa.ac/',
  integrations: [tailwind(), sitemap(), mdx(), react()],
  output: 'hybrid',
  vite: {
    define: {
      'process.env.UPLOADTHING_TOKEN': JSON.stringify(process.env.UPLOADTHING_TOKEN),
    },
  },
});