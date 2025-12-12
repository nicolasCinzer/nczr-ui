import { Login } from '@/components/nczr-ui/login';
import './App.css';

function App() {
  const handleSubmit = (email: string, password: string) => {
    console.log('Login submitted:', { email, password });
    alert(`Login: ${email}`);
  };

  return (
    <div className='min-h-screen bg-background p-8'>
      <div className='max-w-7xl mx-auto space-y-12'>
        <div className='text-center space-y-2'>
          <h1 className='text-4xl font-bold'>nCZr/ui - Login Component</h1>
          <p className='text-muted-foreground'>Diferentes variantes del componente Login</p>
        </div>

        {/* Variante Card (default) */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Variante: Card (default)</h2>
          <div className='flex justify-center'>
            <Login onSubmit={handleSubmit} />
          </div>
        </section>

        {/* Variante Elevated con Social Login */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Variante: Elevated + Social Login</h2>
          <div className='flex justify-center'>
            <Login
              variant='elevated'
              showSocialLogin
              showRememberMe
              onSubmit={handleSubmit}
            />
          </div>
        </section>

        {/* Variante Simple */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Variante: Simple (sin card)</h2>
          <div className='flex justify-center'>
            <Login
              variant='simple'
              title='Acceso Rápido'
              description='Ingresa para continuar'
              submitText='Entrar'
              showForgotPassword={false}
              onSubmit={handleSubmit}
            />
          </div>
        </section>

        {/* Size variants */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Tamaños: sm, default, lg</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Login
              size='sm'
              submitText='Small'
              onSubmit={handleSubmit}
            />
            <Login
              size='default'
              submitText='Default'
              onSubmit={handleSubmit}
            />
            <Login
              size='lg'
              submitText='Large'
              onSubmit={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
