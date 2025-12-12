import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Test de ejemplo para verificar que todo funciona
describe('Testing Setup', () => {
  it('debe renderizar un elemento simple', () => {
    render(<div>Hello Testing!</div>);
    expect(screen.getByText('Hello Testing!')).toBeInTheDocument();
  });
});
