// axios
import axios from 'axios';

import {
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_KEY,
} from '@/constants';
import { getNewAccessToken } from './authApi';

export const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DB_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

authAxios.interceptors.request.use((config) => {
  const token = localStorage[LOCAL_STORAGE_TOKEN_KEY];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;

    if (error.response) {
      // Invalid token
      if (error.response.status === 403) {
        try {
          const refreshToken = localStorage[LOCAL_STORAGE_REFRESH_TOKEN_KEY];

          // If refresh token not exist then block new access token request
          if (!refreshToken) {
            const errorMessage = {
              data: { success: false, message: 'Refresh token not found' },
            };

            return errorMessage;
          }

          const { accessToken } = await getNewAccessToken(refreshToken);

          localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, accessToken);

          // Add new access token to header for re-request
          originalConfig.headers.Authorization = `Bearer ${accessToken}`;

          return authAxios(originalConfig);
        } catch (error: any) {
          if (error.response?.data) {
            console.log('Auth error', error.response.data);
          }
        }
      } else {
        return error.response;
      }
    }
  }
);
