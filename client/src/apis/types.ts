export interface IRegisterData {
  username: string;
  password: string;
  avatar: string;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface ISendData {
  content: string;
  attachment?: string;
}
