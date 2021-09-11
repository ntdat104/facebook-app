import { IReduxState } from '../types';

export const authState$ = (state: IReduxState) => state.auth;
export const postsState$ = (state: IReduxState) => state.posts;
