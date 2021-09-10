import Link from 'next/link';

// clsx
import clsx from 'clsx';

import NextImage from '@/components/common/NextImage';
import Footer from '@/components/common/Footer';
import LoginForm from '../components/login/LoginForm';
import withPublicRoute from '@/hocs/withPublicRoute';

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
            <LoginForm />

            <span className={clsx('text-primary', 'cursor-pointer')}>
              Forgotten password?
            </span>

            <div
              className={clsx(
                'w-full h-px mt-5 mb-7 px-2 ',
                'bg-light-gray-darker dark:bg-dark-gray-darker'
              )}
            />
            <Link href='/register' passHref>
              <button
                className={clsx(
                  'h-12 px-4 mb-2 rounded-lg text-base font-bold outline-none',
                  'text-white bg-green-dark',
                  'transition ease-out',
                  'hover:brightness-95'
                )}>
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withPublicRoute(Login);
