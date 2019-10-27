import axios from 'axios';

import {
  ThunkDispatch,
  ThunkState,
  ThunkAction,
  AppState,
  USERS_REQUESTING,
  USERS_SUCCESS,
  USERS_FAILURE,
} from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing
/* istanbul ignore next */
export const fetchUsers = (URL: string = API_URL): ThunkAction => async (
  dispatch: ThunkDispatch
) => {
  dispatch({ type: USERS_REQUESTING });

  try {
    const { data } = await axios.get(URL);

    /* istanbul ignore next */
    dispatch({ type: USERS_SUCCESS, data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: USERS_FAILURE, err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchUsers = (state: AppState): boolean => {
  return state.home.readyStatus !== 'success';
};

/* istanbul ignore next */
export const fetchUsersIfNeeded = (): ThunkAction => (
  dispatch: ThunkDispatch,
  getState: ThunkState
) => {
  /* istanbul ignore next */
  if (shouldFetchUsers(getState())) return dispatch(fetchUsers());

  /* istanbul ignore next */
  return null;
};
