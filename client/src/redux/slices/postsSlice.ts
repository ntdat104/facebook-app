import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// types
import { IDataSend, IPostsInitialState } from '../types';

import * as postsApi from '@/apis/postsApi';

const initialState: IPostsInitialState = {
  posts: [],
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await postsApi.fetchGetPosts();

  return response;
});

export const createPost = createAsyncThunk(
  'post/createPost',
  async (formData: IDataSend) => {
    const response = await postsApi.fetchCreatePost(formData);

    return response;
  }
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (id: string) => {
    const response = await postsApi.fetchDeletePost(id);

    return response;
  }
);

export const likePost = createAsyncThunk(
  'post/likePost',
  async ({ id, likeCount }: { id: string; likeCount: number }) => {
    const response = await postsApi.fetchLikePost(id, likeCount);

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
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        const { deletedPost } = action.payload;

        const filteredPosts = state.posts.filter(
          (post) => post._id !== deletedPost._id
        );

        return { ...state, posts: filteredPosts };
      }
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        const { likedPost } = action.payload;

        const likedPosts = state.posts.map((post) => {
          return post._id === likedPost._id
            ? { ...post, likeCount: likedPost.likeCount }
            : post;
        });

        return { ...state, posts: likedPosts };
      }
    });
  },
});

export default postsSlice.reducer;
