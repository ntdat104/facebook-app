import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// types
import { IAuthInitialState, IFormDataLogin, IFormDataRegister } from '../types';

import * as authApi from '@/apis/authApi';
import {
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_KEY,
} from '@/constants';

const initialState: IAuthInitialState = {
  username: '',
  avatar: '',
  isAuthenticated: false,
};

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async () => {
    const response = await authApi.getCurrentUser();

    return response.data;
  }
);

export const fetchUserRegister = createAsyncThunk(
  'auth/fetchUserRegister',
  async (formData: IFormDataRegister) => {
    const response = await authApi.registerUser(formData);

    return response;
  }
);

export const fetchUserLogin = createAsyncThunk(
  'auth/fetchUserLogin',
  async (formData: IFormDataLogin) => {
    const response = await authApi.loginUser(formData);

    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        const { user } = action.payload;

        return {
          ...state,
          username: user.username,
          avatar: user.avatar,
          isAuthenticated: true,
        };
      }
    });
    builder.addCase(fetchUserRegister.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        const { accessToken, refreshToken } = action.payload;

        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, accessToken);
        localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
      }
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        const { accessToken, refreshToken } = action.payload;

        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, accessToken);
        localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
      }
    });
  },
});

export default authSlice.reducer;
