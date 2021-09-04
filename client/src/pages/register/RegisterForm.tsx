import { ChangeEvent, FormEvent, useState } from 'react';

// clsx
import clsx from 'clsx';

// material ui core
import { Avatar } from '@material-ui/core';

import { registerUserForm } from '@/apis/authApi';
import { randomAvatar } from '@/apis/avatarApi';

import styles from '@/styles/utilities.module.scss';

interface IFormState {
  username: string;
  password: string;
  confirmPassword: string;
}

function RegisterForm() {
  const [avatar, setAvatar] = useState<string>('');
  const [formData, setFormData] = useState<IFormState>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerUserForm({
      username: formData.username,
      password: formData.password,
      avatar,
    });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getRandomAvatar = () => {
    setAvatar(randomAvatar());
  };

  return (
    <form onSubmit={handleSubmitForm} className={clsx('mb-3 w-full')}>
      <div>
        <input
          className={clsx(
            'w-full rounded-lg px-4 py-3 text-base outline-none border-2 border-gray-dark',
            'text-light-text'
          )}
          placeholder='Username'
          name='username'
          value={formData.username}
          onChange={handleChangeInput}
        />
      </div>
      <div className={clsx('my-4')}>
        <input
          className={clsx(
            'w-full rounded-lg px-4 py-3 text-base outline-none border-2 border-gray-dark',
            'text-light-text'
          )}
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleChangeInput}
        />
      </div>
      <div className={clsx('my-4')}>
        <input
          className={clsx(
            'w-full rounded-lg px-4 py-3 text-base outline-none border-2 border-gray-dark',
            'text-light-text'
          )}
          name='confirmPassword'
          placeholder='Confirm password'
          value={formData.confirmPassword}
          onChange={handleChangeInput}
        />
      </div>
      <div className={clsx('i-flex-center mb-4')} onClick={getRandomAvatar}>
        <Avatar
          className={clsx('cursor-pointer', styles.circleSizeLarge)}
          src={avatar}
        />
      </div>
      <button
        className={clsx(
          'h-12 rounded-lg text-xl font-bold w-full outline-none',
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
