import store from '../store';

export interface IDataLogin {
  username: string;
  password: string;
}

export interface IDataRegister {
  username: string;
  password: string;
  avatar: string;
}

export interface IAuthInitialState {
  userId: string;
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

export interface IDataSend {
  content: string;
  attachment?: string;
}

export type IMyDispatch = typeof store.dispatch;

export type IReduxState = ReturnType<typeof store.getState>;
