import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ command }) => {
  // Dynamic base path:
  // - In dev server (AI Studio): '/'
  // - In Cloudflare Pages (CF_PAGES=1): '/' (hosted at root domain)
  // - On GitHub Pages / default: '/Dhaka-Night-Market/'
  const getBasePath = () => {
    if (command === 'serve') return '/';
    if (process.env.CF_PAGES === '1' || process.env.CF_PAGES_COMMIT_SHA) return '/';
    if (process.env.VITE_BASE_PATH) return process.env.VITE_BASE_PATH;
    if (process.env.BASE_PATH) return process.env.BASE_PATH;
    if (process.env.GITHUB_ACTIONS === 'true') return '/Dhaka-Night-Market/';
    return '/Dhaka-Night-Market/';
  };

  return {
    base: getBasePath(),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          events: path.resolve(__dirname, 'events.html'),
          experience: path.resolve(__dirname, 'experience.html'),
          gallery: path.resolve(__dirname, 'gallery.html'),
          partners: path.resolve(__dirname, 'partners.html'),
          stories: path.resolve(__dirname, 'stories.html'),
          vendors: path.resolve(__dirname, 'vendors.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
