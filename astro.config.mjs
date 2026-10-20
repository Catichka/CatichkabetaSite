import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://catichkabeta.com',
  markdown: {
    shikiConfig: { theme: 'catppuccin-mocha' },
  },
  vite: {
    // three.js (the 3D hero) is one ~500 KB file, loaded only on the home page.
    build: { chunkSizeWarningLimit: 600 },
  },
});
