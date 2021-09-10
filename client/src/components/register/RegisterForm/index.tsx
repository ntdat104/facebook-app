import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// clsx
import clsx from 'clsx';

// material ui core
import { Avatar } from '@material-ui/core';

// react hook form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// types
import { IRegisterFormInputs } from './types';

import { randomAvatar } from '@/apis/avatarApi';
import { registerSchema } from '@/utils/formSchemas';
import { fetchUserRegister } from '@/redux/slices/authSlice';
import useMyDispatch from '@/hooks/useMyDispatch';

import FormInput from '@/components/common/FormInput';

import styles from '@/styles/utilities.module.scss';

function RegisterForm() {
  const [avatar, setAvatar] = useState<string>('');
  const [serverError, setServerError] = useState<string>('');
  const dispatch = useMyDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onHandleSubmit = async (data: IRegisterFormInputs) => {
    const { username, password } = data;

    try {
      const response = await dispatch(
        fetchUserRegister({
          username,
          password,
          avatar,
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

  const getRandomAvatar = async () => {
    const avatar = await randomAvatar();

    setAvatar(avatar as string);
  };

  // get init random avatar
  useEffect(() => {
    getRandomAvatar();
  }, []);

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
        errors={errors}
        register={register}
        handleChange={(e) => {
          register('password').onChange(e);
        }}
      />
      <FormInput
        placeholder='Confirm password'
        name='confirmPassword'
        errors={errors}
        register={register}
        handleChange={(e) => {
          register('confirmPassword').onChange(e);
        }}
      />
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
