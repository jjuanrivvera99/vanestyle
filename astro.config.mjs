// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://vanestyle.com.co',
  output: 'static',

  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/test'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, './src/styles'),
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@config': path.resolve(__dirname, './src/config'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@types': path.resolve(__dirname, './src/types'),
      },
    },
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['alpinejs', 'aos'],
          },
        },
      },
    },
  },
});
