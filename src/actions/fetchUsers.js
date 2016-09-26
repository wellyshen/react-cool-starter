export const USERS_INVALID = 'USERS_INVALID';
export const USERS_FETCHING = 'USERS_FETCHING';
export const USERS_FETCHED = 'USERS_FETCHED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
let prevState;

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

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchUsers = (state) => {
  /* istanbul ignore next */
  const users = state.get('users');

  /* istanbul ignore if */
  if (users.get('list') && users.get('readyState') === USERS_FETCHED) {
    /* istanbul ignore if */
    if (prevState === users) return true;

    /* istanbul ignore next */
    prevState = users;
    /* istanbul ignore next */
    return false;
  }

  /* istanbul ignore next */
  return true;
};

/* istanbul ignore next */
export function fetchUsersIfNeeded() {
  /* istanbul ignore next */
  return (dispatch, getState, axios) => {
    /* istanbul ignore if */
    if (shouldFetchUsers(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchUsers(axios));
    }

    /* istanbul ignore next */
    return null;
  };
}
