import axios from 'axios';

// types
import { IRegisterInfo } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_DB_API_URL;

export const registerUserForm = async (formData: IRegisterInfo) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, formData);

    console.log('response', response);
  } catch (error: any) {
    console.log(error.response.data);
    if (error.response.data) return error.response.data;
    else return { success: false, message: error.message };
  }
};
