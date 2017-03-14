/* @flow */

import type {
  Dispatch,
  GetState,
  ThunkAction,
  Reducer,
} from '../../types';

export const USERS_INVALID = 'USERS_INVALID';
export const USERS_REQUESTING = 'USERS_REQUESTING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
export const fetchData = (axios: any): ThunkAction =>
  (dispatch: Dispatch) => {
    dispatch({ type: USERS_REQUESTING });

    return axios.get(API_URL)
      .then((res) => {
        dispatch({ type: USERS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        dispatch({ type: USERS_FAILURE, err });
      });
  };

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchData = (state: Reducer): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const home = state.home;

  if (home.readyStatus === USERS_SUCCESS) return false; // Preventing double fetching data

  return true;
};

/* istanbul ignore next */
export const fetchDataIfNeeded = (): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, axios: any) => {
    /* istanbul ignore next */
    if (shouldFetchData(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchData(axios));
    }

    /* istanbul ignore next */
    return null;
  };
