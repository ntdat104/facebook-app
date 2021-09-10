import { authAxios } from './axiosClient';

// types
import { IRegisterInfo, ILoginInfo } from './types';

export const getCurrentUser = async () => {
  try {
    const response = await authAxios.get('/auth/user');

    return response;
  } catch (error: any) {
    return error.response
      ? error.response
      : { success: false, message: error.message };
  }
};

export const registerUser = async (formData: IRegisterInfo) => {
  try {
    const response = await authAxios.post('/auth/register', formData);

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};

export const loginUser = async (formData: ILoginInfo) => {
  try {
    const response = await authAxios.post('/auth/login', formData);

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};

export const getNewAccessToken = async (refreshToken: string) => {
  try {
    const response = await authAxios.post('/auth/token', { refreshToken });

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};
