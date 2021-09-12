import React, { useState } from 'react';
import { useRouter } from 'next/router';

// clsx
import clsx from 'clsx';

// react hook form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// types
import { ILoginInputs } from './types';

import { loginSchema } from '@/utils/formSchemas';
import useMyDispatch from '@/hooks/useMyDispatch';
import { fetchUserLogin } from '@/redux/slices/authSlice';

import FormInput from '@/components/common/FormInput';

function LoginForm() {
  const [serverError, setServerError] = useState<string>('');
  const dispatch = useMyDispatch();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onHandleSubmit = async (data: ILoginInputs) => {
    const { username, password } = data;

    try {
      const response = await dispatch(
        fetchUserLogin({
          username,
          password,
        })
      ).unwrap();

      if (!response.success) {
        setServerError(response.message);
        return;
      }

      router.push('/');
      reset();
      setServerError('');
    } catch (error: any) {
      console.log(error.message);
    }
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
