import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
        termsOfUse: resolve(__dirname, 'terms-of-use.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        dataPrivacy: resolve(__dirname, 'data-privacy.html'),
      },
    },
  },
});
