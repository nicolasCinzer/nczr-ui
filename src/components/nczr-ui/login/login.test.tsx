import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Login } from './Login';

describe('Login', () => {
  it('renderiza con props por defecto', () => {
    render(<Login />);

    expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument();
    expect(screen.getByText('Ingresa tus credenciales para acceder')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
  });

  it('renderiza con title y description personalizados', () => {
    render(
      <Login
        title='Bienvenido'
        description='Por favor ingresa tus datos'
        submitText='Entrar'
      />
    );

    expect(screen.getByText('Bienvenido')).toBeInTheDocument();
    expect(screen.getByText('Por favor ingresa tus datos')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  it('llama a onSubmit cuando se envía el formulario', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<Login onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Iniciar Sesión' });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('muestra link de "Olvidaste tu contraseña" por defecto', () => {
    render(<Login />);

    expect(screen.getByText('¿Olvidaste tu contraseña?')).toBeInTheDocument();
  });

  it('oculta link de "Olvidaste tu contraseña" cuando showForgotPassword es false', () => {
    render(<Login showForgotPassword={false} />);

    expect(screen.queryByText('¿Olvidaste tu contraseña?')).not.toBeInTheDocument();
  });

  it('muestra checkbox "Recordarme" cuando showRememberMe es true', () => {
    render(<Login showRememberMe={true} />);

    expect(screen.getByLabelText('Recordarme')).toBeInTheDocument();
  });

  it('no muestra checkbox "Recordarme" por defecto', () => {
    render(<Login />);

    expect(screen.queryByLabelText('Recordarme')).not.toBeInTheDocument();
  });

  it('muestra botones de login social cuando showSocialLogin es true', () => {
    render(<Login showSocialLogin={true} />);

    expect(screen.getByText('O continúa con')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Google' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'GitHub' })).toBeInTheDocument();
  });

  it('renderiza variante simple sin Card', () => {
    const { container } = render(<Login variant='simple' />);

    // En variante simple, el título es un h2, no está dentro de CardTitle
    expect(screen.getByRole('heading', { level: 2, name: 'Iniciar Sesión' })).toBeInTheDocument();
    // En variante simple NO hay elementos Card de shadcn
    expect(container.querySelector('.rounded-xl.border.bg-card')).not.toBeInTheDocument();
  });

  it('renderiza variante card con Card por defecto', () => {
    const { container } = render(<Login variant='card' />);

    // Verifica que existe el Card de shadcn
    expect(container.querySelector('.rounded-xl.border.bg-card')).toBeInTheDocument();
    expect(screen.getByText('Ingresa tus credenciales para acceder')).toBeInTheDocument();
  });

  it('renderiza variante elevated con sombra', () => {
    const { container } = render(<Login variant='elevated' />);

    // La variante elevated agrega clase shadow-lg al Card
    const card = container.querySelector('.shadow-lg');
    expect(card).toBeInTheDocument();
  });

  it('aplica size sm correctamente', () => {
    const { container } = render(<Login size='sm' />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('max-w-sm');
  });

  it('aplica size lg correctamente', () => {
    const { container } = render(<Login size='lg' />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('max-w-lg');
  });

  it('aplica className adicional cuando se proporciona', () => {
    const { container } = render(<Login className='custom-class' />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-class');
  });
});
