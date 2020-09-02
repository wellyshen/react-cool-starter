import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User, getUserList } from "../services/jsonPlaceholder";
import { AppThunk, AppState } from ".";

interface UserList {
  readyStatus: string;
  items: User[];
  error: string | null;
}

export const initialState: UserList = {
  readyStatus: "invalid",
  items: [],
  error: null,
};

const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getRequesting: (state: UserList) => {
      state.readyStatus = "request";
    },
    getSuccess: (state, { payload }: PayloadAction<User[]>) => {
      state.readyStatus = "success";
      state.items = payload;
    },
    getFailure: (state, { payload }: PayloadAction<string>) => {
      state.readyStatus = "failure";
      state.error = payload;
    },
  },
});

export default userList.reducer;
export const { getRequesting, getSuccess, getFailure } = userList.actions;

export const fetchUserList = (): AppThunk => async (dispatch) => {
  dispatch(getRequesting());

  const { error, data } = await getUserList();

  if (error) {
    dispatch(getFailure(error.message));
  } else {
    dispatch(getSuccess(data as User[]));
  }
};

const shouldFetchUserList = (state: AppState) =>
  state.userList.readyStatus !== "success";

export const fetchUserListIfNeed = (): AppThunk => (dispatch, getState) => {
  if (shouldFetchUserList(getState())) return dispatch(fetchUserList());

  return null;
};
