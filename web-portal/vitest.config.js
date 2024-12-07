// web-portal/vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    watchExclude: [
      'node_modules/**',
      'dist/**'
    ]
  }
});

// web-portal/src/test/setup.js
import '@testing-library/jest-dom';

// This is where you can add any global test setup
