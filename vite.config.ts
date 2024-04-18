/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx'],
    globals: true,
    environment: "happy-dom",
  },
});
