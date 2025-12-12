import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Cleanup automático después de cada test
afterEach(() => {
  cleanup();
});

// Configuración global para todos los tests
// Puedes agregar mocks globales o configuraciones adicionales aquí
