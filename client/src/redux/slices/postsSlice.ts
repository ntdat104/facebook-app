import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// types
import { IFormDataSender, IPostsInitialState } from '../types';

import * as postsApi from '@/apis/postsApi';

const initialState: IPostsInitialState = {
  posts: [],
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await postsApi.fetchPosts();

  return response;
});

export const createPost = createAsyncThunk(
  'post/createPost',
  async (formData: IFormDataSender) => {
    const response = await postsApi.fetchCreatePost(formData);

    return response;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        const { posts } = action.payload;

        return { ...state, posts };
      }
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        const { post } = action.payload;

        state.posts.unshift(post);
      }
    });
  },
});

export default postsSlice.reducer;
