import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Variantes del componente Login usando CVA
const loginVariants = cva(
  'w-full', // Clase base
  {
    variants: {
      variant: {
        // Login sin card (minimalista)
        simple: '',
        // Login con card (default)
        card: '',
        // Login con card y sombra elevada
        elevated: '',
      },
      size: {
        default: 'max-w-md',
        sm: 'max-w-sm',
        lg: 'max-w-lg',
      },
    },
    defaultVariants: {
      variant: 'card',
      size: 'default',
    },
  }
);

export interface LoginProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'>, VariantProps<typeof loginVariants> {
  /** Título del formulario de login */
  title?: string;
  /** Descripción del formulario */
  description?: string;
  /** Texto del botón de submit */
  submitText?: string;
  /** Callback cuando se hace submit */
  onSubmit?: (email: string, password: string) => void;
  /** Mostrar opción de "Recordarme" */
  showRememberMe?: boolean;
  /** Mostrar link "Olvidé mi contraseña" */
  showForgotPassword?: boolean;
  /** Mostrar separador y opción de login social */
  showSocialLogin?: boolean;
}

export const Login = React.forwardRef<HTMLDivElement, LoginProps>(
  (
    {
      className,
      variant,
      size,
      title = 'Iniciar Sesión',
      description = 'Ingresa tus credenciales para acceder',
      submitText = 'Iniciar Sesión',
      onSubmit,
      showRememberMe = false,
      showForgotPassword = true,
      showSocialLogin = false,
      ...props
    },
    ref
  ) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(email, password);
    };

    // Contenido del formulario (reutilizable)
    const formContent = (
      <form
        onSubmit={handleSubmit}
        className='space-y-4'
      >
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='tu@email.com'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <Label htmlFor='password'>Contraseña</Label>
            {showForgotPassword && (
              <a
                href='#'
                className='text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline'
              >
                ¿Olvidaste tu contraseña?
              </a>
            )}
          </div>
          <Input
            id='password'
            type='password'
            placeholder='••••••••'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </div>

        {showRememberMe && (
          <div className='flex items-center space-x-2'>
            <input
              id='remember'
              type='checkbox'
              className='h-4 w-4 rounded border-input'
            />
            <Label
              htmlFor='remember'
              className='text-sm font-normal cursor-pointer'
            >
              Recordarme
            </Label>
          </div>
        )}

        <Button
          type='submit'
          className='w-full'
        >
          {submitText}
        </Button>

        {showSocialLogin && (
          <>
            <div className='relative'>
              <Separator className='my-4' />
              <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground'>
                O continúa con
              </span>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <Button
                variant='outline'
                type='button'
              >
                Google
              </Button>
              <Button
                variant='outline'
                type='button'
              >
                GitHub
              </Button>
            </div>
          </>
        )}
      </form>
    );

    // Renderizado condicional según la variante
    if (variant === 'simple') {
      return (
        <div
          ref={ref}
          className={cn(loginVariants({ variant, size }), className)}
          {...props}
        >
          <div className='mb-6 space-y-2'>
            <h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
            <p className='text-sm text-muted-foreground'>{description}</p>
          </div>
          {formContent}
        </div>
      );
    }

    // Variantes 'card' y 'elevated'
    return (
      <div
        ref={ref}
        className={cn(loginVariants({ variant, size }), className)}
        {...props}
      >
        <Card className={variant === 'elevated' ? 'shadow-lg' : ''}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{formContent}</CardContent>
        </Card>
      </div>
    );
  }
);

Login.displayName = 'Login';
