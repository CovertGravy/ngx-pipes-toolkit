/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [angular()],
    test: {
      globals: true,
      environment: 'node',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
      // NOTE: prevent Vitest timeout in GitHub Action
      pool: 'forks',
      coverage: {
        reporter: ['lcov'],
        enabled: false,
        reportOnFailure: true,
      },
    },
  };
});
