import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User, getUserData } from "../services/jsonPlaceholder";
import { AppThunk, AppState } from ".";

interface UserDate {
  [id: string]: {
    readyStatus: string;
    item?: User;
    error?: string;
  };
}

interface Success {
  id: string;
  item: User;
}

interface Failure {
  id: string;
  error: string;
}

const userData = createSlice({
  name: "userData",
  initialState: {} as UserDate,
  reducers: {
    getRequesting: (state, { payload }: PayloadAction<string>) => {
      state[payload] = { readyStatus: "request" };
    },
    getSuccess: (state, { payload }: PayloadAction<Success>) => {
      state[payload.id] = { readyStatus: "success", item: payload.item };
    },
    getFailure: (state, { payload }: PayloadAction<Failure>) => {
      state[payload.id] = { readyStatus: "failure", error: payload.error };
    },
  },
});

export default userData.reducer;
export const { getRequesting, getSuccess, getFailure } = userData.actions;

export const fetchUserData = (id: string): AppThunk => async (dispatch) => {
  dispatch(getRequesting(id));

  const { error, data } = await getUserData(id);

  if (error) {
    dispatch(getFailure({ id, error: error.message }));
  } else {
    dispatch(getSuccess({ id, item: data }));
  }
};

const shouldFetchUserData = (state: AppState, id: string) =>
  state.userData[id]?.readyStatus !== "success";

export const fetchUserDataIfNeed = (id: string): AppThunk => (
  dispatch,
  getState
) => {
  if (shouldFetchUserData(getState(), id)) return dispatch(fetchUserData(id));

  return null;
};
