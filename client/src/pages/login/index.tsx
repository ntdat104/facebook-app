// clsx
import clsx from 'clsx';

import NextImage from '@/components/NextImage';
import Footer from '@/components/Footer';

import logo from '@/assets/svgs/facebook-logo.svg';

function Login() {
  return (
    <>
      <div className={clsx('pt-32 pb-48', 'bg-light-body')}>
        <div className={clsx('flex m-auto w-content-login')}>
          <div className={clsx('pr-20 mt-12')}>
            <div className={clsx('w-75 -ml-7 -mb-2')}>
              <NextImage src={logo.src} alt='Logo' />
            </div>
            <h1 className={clsx('text-2.1xl leading-8')}>
              Facebook helps you connect and share with the people in your life.
            </h1>
          </div>

          <div
            className={clsx(
              'i-flex-center flex-shrink-0 p-4 flex-col w-99 rounded-lg shadow-form',
              'bg-white'
            )}>
            <form className={clsx('mb-3 w-full')}>
              <div>
                <input
                  className={clsx(
                    'w-full rounded-lg px-4 py-3 text-base outline-none border-2 border-gray-dark',
                    'text-light-text'
                  )}
                  placeholder='Email address or phone number'
                />
              </div>
              <div className={clsx('my-4')}>
                <input
                  className={clsx(
                    'w-full rounded-lg px-4 py-3 text-base outline-none border-2 border-gray-dark',
                    'text-light-text'
                  )}
                  placeholder='Password'
                />
              </div>
              <button
                className={clsx(
                  'h-12 rounded-lg text-xl font-bold w-full',
                  'text-white bg-primary',
                  'transition ease-out',
                  'hover:brightness-95'
                )}>
                Log In
              </button>
            </form>
            <span className={clsx('text-primary', 'cursor-pointer')}>
              Forgotten password?
            </span>

            <div
              className={clsx(
                'w-full h-px mt-5 mb-7 px-2 ',
                'bg-light-gray-darker dark:bg-dark-gray-darker'
              )}
            />

            <button
              className={clsx(
                'h-12 px-4 mb-2 rounded-lg text-base font-bold',
                'text-white bg-green-dark',
                'transition ease-out',
                'hover:brightness-95'
              )}>
              Create New Account
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
