import { RouterState } from 'connected-react-router';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

// Reducers
export interface HomeState {
  readyStatus: string;
  err: any;
  list: Array<{ id: string; name: string }>;
}

export interface UserInfoState {
  [userId: string]: {
    readyStatus: string;
    err: any;
    info: {
      name: string;
      phone: string;
      email: string;
      website: string;
    };
  };
}

export interface AppState {
  home: HomeState;
  userInfo: UserInfoState;
  router: RouterState;
}

// Actions
export const USERS_REQUESTING = 'USERS_REQUESTING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export const USER_REQUESTING = 'USER_REQUESTING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export interface UsersAction {
  type: typeof USERS_REQUESTING | typeof USERS_SUCCESS | typeof USERS_FAILURE;
  data: Array<object>;
  err: any;
}

export interface UserAction {
  type: typeof USER_REQUESTING | typeof USER_SUCCESS | typeof USER_FAILURE;
  userId: string;
  data: object;
  err: any;
}

export type MyAction = UsersAction | UserAction;

export type ThunkAction = ThunkAction<void, AppState, null, Action<string>>;

export type ThunkDispatch = ThunkDispatch<AppState, void, MyAction>;
