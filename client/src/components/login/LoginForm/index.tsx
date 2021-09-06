import React, { useState } from 'react';

// clsx
import clsx from 'clsx';

// react hook form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// types
import { ILoginFormInputs } from './types';

import { loginUser } from '@/apis/authApi';
import { loginSchema } from '@/utils/formSchemas';

import FormInput from '@/components/common/FormInput';

function LoginForm() {
  const [serverError, setServerError] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onHandleSubmit = async (data: ILoginFormInputs) => {
    const { username, password } = data;

    const response = await loginUser({
      username,
      password,
    });

    if (!response.success) {
      setServerError(response.message);
      return;
    }

    reset();
    setServerError('');
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className={clsx('mb-3 w-full')}>
      <FormInput
        placeholder='Username'
        name='username'
        register={register}
        errors={errors}
        serverError={serverError}
        handleChange={(e) => {
          register('username').onChange(e);
          setServerError('');
        }}
      />
      <FormInput
        placeholder='Password'
        name='password'
        register={register}
        errors={errors}
        serverError={serverError}
        handleChange={(e) => {
          register('password').onChange(e);
          setServerError('');
        }}
      />
      <button
        className={clsx(
          'h-12 rounded-lg text-xl font-bold w-full outline-none',
          'text-white bg-primary',
          'transition ease-out',
          'hover:brightness-95'
        )}>
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
