import axios from 'axios';
import config from '../config';

import {
  ThunkDispatch,
  ThunkState,
  ThunkAction,
  AppState,
  USER_REQUESTING,
  USER_SUCCESS,
  USER_FAILURE
} from '../types';

const {
  api: { baseUrl }
} = config;
const API_URL = `${baseUrl}/users`;

// Export this for unit testing
/* istanbul ignore next */
export const fetchUser = (
  userId: string,
  URL: string = API_URL
): ThunkAction => async (dispatch: ThunkDispatch) => {
  dispatch({ type: USER_REQUESTING, userId });

  try {
    const { data } = await axios.get(`${URL}/${userId}`);

    /* istanbul ignore next */
    dispatch({ type: USER_SUCCESS, userId, data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: USER_FAILURE, userId, err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchUser = (state: AppState, userId: string): boolean => {
  const userInfo = state.userInfo[userId];

  if (userInfo && userInfo.readyStatus === 'success') return false;

  return true;
};

/* istanbul ignore next */
export const fetchUserIfNeeded = (userId: string): ThunkAction => (
  dispatch: ThunkDispatch,
  getState: ThunkState
) => {
  /* istanbul ignore next */
  if (shouldFetchUser(getState(), userId)) return dispatch(fetchUser(userId));

  /* istanbul ignore next */
  return null;
};
