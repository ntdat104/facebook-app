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

export type IMyDispatch = typeof store.dispatch;

export type IReduxState = ReturnType<typeof store.getState>;
