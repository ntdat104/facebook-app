import axios from 'axios';

// types
import { IRegisterInfo, ILoginInfo } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_DB_API_URL;

export const registerUser = async (formData: IRegisterInfo) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, formData);

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};

export const loginUser = async (formData: ILoginInfo) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, formData);

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response.data
      : { success: false, message: error.message };
  }
};
