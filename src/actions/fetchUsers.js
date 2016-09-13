import axios from 'axios';

export const USERS_INVALID = 'USERS_INVALID';
export const USERS_FETCHING = 'USERS_FETCHING';
export const USERS_FETCHED = 'USERS_FETCHED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// export this function for testing
export const fetchUsers = () => (dispatch) => {
  dispatch({ type: USERS_FETCHING });

  return axios.get(API_URL)
    .then((res) => {
      dispatch({ type: USERS_FETCHED, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: USERS_FETCH_FAILED, err });
    });
};

/* istanbul ignore next */
const shouldFetchUsers = (state) => {
  /* istanbul ignore next */
  const users = state.get('users');

  /* istanbul ignore if */
  if (!users.get('list') ||
      users.readyState === USERS_INVALID ||
      users.readyState === USERS_FETCH_FAILED) return true;

  /* istanbul ignore next */
  return false;
};

/* istanbul ignore next */
export function fetchUsersIfNeeded() {
  /* istanbul ignore next */
  return (dispatch, getState) => {
    /* istanbul ignore if */
    if (shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    }

    /* istanbul ignore next */
    return null;
  };
}
