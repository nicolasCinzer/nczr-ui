import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // Entorno de testing
    environment: 'happy-dom',

    // Archivo de configuración global para tests
    setupFiles: ['./src/test/setup.ts'],

    // Cobertura de código
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/', '**/*.config.*', '**/.*', 'dist/'],
    },

    // Archivos de test a incluir
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    // Excluir de tests
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],

    // Mostrar output detallado
    reporter: ['verbose'],

    // Timeout de tests (en ms)
    testTimeout: 10000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
