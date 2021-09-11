import store from '../store';

export interface IFormDataLogin {
  username: string;
  password: string;
}

export interface IFormDataRegister {
  username: string;
  password: string;
  avatar: string;
}

export interface IAuthInitialState {
  username: string;
  avatar: string;
  isAuthenticated: boolean;
}

export interface IPost {
  user: {
    _id: string;
    username: string;
    avatar: string;
  };
  _id: string;
  content: string;
  attachment: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface IPostsInitialState {
  posts: IPost[];
}

export interface IFormDataSender {
  content: string;
  attachment?: string;
}

export type IMyDispatch = typeof store.dispatch;

export type IReduxState = ReturnType<typeof store.getState>;
