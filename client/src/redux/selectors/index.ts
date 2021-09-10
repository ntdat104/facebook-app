import { IReduxState } from '../types';

export const authState$ = (state: IReduxState) => state.auth;
