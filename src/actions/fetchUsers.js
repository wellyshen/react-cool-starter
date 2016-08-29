import axios from 'axios';

export const USERS_INVALID = 'USERS_INVALID';
export const USERS_FETCHING = 'USERS_FETCHING';
export const USERS_FETCHED = 'USERS_FETCHED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = () => dispatch => {
  dispatch({ type: USERS_FETCHING });

  return axios.get(API_URL)
    .then(res => {
      dispatch({ type: USERS_FETCHED, data: res.data });
    })
    .catch(err => {
      dispatch({ type: USERS_FETCH_FAILED, err });
    });
};

const shouldFetchUsers = state => {
  const users = state.get('users');

  if (!users.get('list') ||
      users.readyState === USERS_INVALID ||
      users.readyState === USERS_FETCH_FAILED) return true;

  return false;
};

export function fetchUsersIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    }

    return null;
  };
}
