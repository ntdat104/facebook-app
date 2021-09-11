import { axiosClient } from './axiosClient';

// types
import { ISendData } from './types';

export const fetchPosts = async () => {
  try {
    const response = await axiosClient.get('/posts');

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response
      : { success: false, message: error.message };
  }
};

export const fetchCreatePost = async (formData: ISendData) => {
  try {
    const response = await axiosClient.post('/posts', formData);

    return response.data;
  } catch (error: any) {
    return error.response
      ? error.response
      : { success: false, message: error.message };
  }
};
