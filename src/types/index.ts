import { RouterState } from "connected-react-router";
import { Action } from "redux";
import { ThunkAction as Act, ThunkDispatch as Dispatch } from "redux-thunk";

// Common
type UserList = Array<{ id: string; name: string }>;
type UserInfo = {
  name: string;
  phone: string;
  email: string;
  website: string;
};

// Reducers
export interface HomeState {
  readyStatus: string;
  err: any;
  list: UserList;
}

export interface UserInfoState {
  [userId: string]: {
    readyStatus: string;
    err: any;
    info: UserInfo;
  };
}

export interface AppState {
  home: HomeState;
  userInfo: UserInfoState;
  router: RouterState;
}

export type ThunkState = () => AppState;

// Actions
export const USERS_REQUESTING = "USERS_REQUESTING";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILURE = "USERS_FAILURE";

export const USER_REQUESTING = "USER_REQUESTING";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

export interface UsersAction {
  type: typeof USERS_REQUESTING | typeof USERS_SUCCESS | typeof USERS_FAILURE;
  data?: UserList;
  err?: any;
}

export interface UserAction {
  type: typeof USER_REQUESTING | typeof USER_SUCCESS | typeof USER_FAILURE;
  userId: string;
  data?: UserInfo;
  err?: any;
}

export type MyAction = UsersAction | UserAction;

export type ThunkAction = Act<void, AppState, unknown, Action<string>>;

export type ThunkDispatch = Dispatch<AppState, void, MyAction>;
