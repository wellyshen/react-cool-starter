export const USERS_INVALID = 'USERS_INVALID';
export const USERS_FETCHING = 'USERS_FETCHING';
export const USERS_FETCHED = 'USERS_FETCHED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
export const fetchUsers = axios => (dispatch) => {
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
  const users = state.get('users');

  if (users.get('list') && users.get('readyState') === USERS_FETCHED) return false;

  return true;
};

/* istanbul ignore next */
export function fetchUsersIfNeeded() {
  return (dispatch, getState, axios) => {
    if (shouldFetchUsers(getState())) {
      return dispatch(fetchUsers(axios));
    }

    return null;
  };
}
