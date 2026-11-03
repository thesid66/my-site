// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gautamsiddhartha.com.np',
  vite: {
    plugins: [tailwindcss()]
  }
});
