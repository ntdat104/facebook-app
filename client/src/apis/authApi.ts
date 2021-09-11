import { axiosClient } from './axiosClient';

// types
import { IRegisterData, ILoginData } from './types';

export const getCurrentUser = async () => {
  try {
    const response = await axiosClient.get('/auth/user');

    return response;
  } catch (error: any) {
    return error.response
      ? error.response
      : { success: false, message: error.message };
  }
};

export const registerUser = async (formData: IRegisterData) => {
  try {
    const response = await axiosClient.post('/auth/register', formData);

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};

export const loginUser = async (formData: ILoginData) => {
  try {
    const response = await axiosClient.post('/auth/login', formData);

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};

export const getNewAccessToken = async (refreshToken: string) => {
  try {
    const response = await axiosClient.post('/auth/token', { refreshToken });

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};
