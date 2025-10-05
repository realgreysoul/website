import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://greysoul.ru',
  outDir: './dist',
  publicDir: './public',
  trailingSlash: 'never',
});
