/* @flow */

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchUsers = (
  axios: any,
  URL: string = API_URL
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'USERS_REQUESTING' });

  try {
    const res = await axios.get(URL);

    /* istanbul ignore next */
    dispatch({ type: 'USERS_SUCCESS', data: res.data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'USERS_FAILURE', err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchUsers = (state: ReduxState): boolean => {
  // On development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  // Fetching data once on production
  if (state.home.readyStatus === 'USERS_SUCCESS') return false;

  return true;
};

/* istanbul ignore next */
export const fetchUsersIfNeeded = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  axios: any
) => {
  /* istanbul ignore next */
  if (shouldFetchUsers(getState())) {
    /* istanbul ignore next */
    return dispatch(fetchUsers(axios));
  }

  /* istanbul ignore next */
  return null;
};
