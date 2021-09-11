import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
