import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://catichkabeta.com',
  markdown: {
    shikiConfig: { theme: 'catppuccin-mocha' },
  },
});
