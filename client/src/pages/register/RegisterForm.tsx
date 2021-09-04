// clsx
import clsx from 'clsx';

// material ui core
import { Avatar } from '@material-ui/core';

import styles from '@/styles/utilities.module.scss';

function RegisterForm() {
  return (
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
      <div className={clsx('my-4')}>
        <input
          className={clsx(
            'w-full rounded-lg px-4 py-3 text-base outline-none border-2 border-gray-dark',
            'text-light-text'
          )}
          placeholder='Confirm password'
        />
      </div>
      <div className={clsx('i-flex-center mb-4')}>
        <Avatar
          className={clsx('cursor-pointer', styles.circleSizeLarge)}
          src='https://avatars.dicebear.com/api/micah/123.svg'
        />
      </div>
      <button
        className={clsx(
          'h-12 rounded-lg text-xl font-bold w-full',
          'text-white bg-primary',
          'transition ease-out',
          'hover:brightness-95'
        )}>
        Sign Up
      </button>
    </form>
  );
}

export default RegisterForm;
