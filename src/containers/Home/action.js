/* @flow */

import type {
  Dispatch,
  GetState,
  ThunkAction,
  Reducer,
} from '../../types';

export const USERS_INVALID = 'USERS_INVALID';
export const USERS_REQUESTING = 'USERS_REQUESTING';
export const USERS_FAILURE = 'USERS_FAILURE';
export const USERS_SUCCESS = 'USERS_SUCCESS';

export const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing more easily
export const fetchUsers = (axios: any, URL: string = API_URL): ThunkAction => ({
  promise: client => client.get(URL).then(value => ({ data: value.data })),
  events: [USERS_REQUESTING, USERS_SUCCESS, USERS_FAILURE],
});

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchUsers = (state: Reducer): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const home = state.home;

  if (home.readyStatus === USERS_SUCCESS) return false; // Preventing double fetching data

  return true;
};

/* istanbul ignore next */
export const fetchUsersIfNeeded = (): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, axios: any) => {
    /* istanbul ignore next */
    if (shouldFetchUsers(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchUsers(axios));
    }

    /* istanbul ignore next */
    return null;
  };
