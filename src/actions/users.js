import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchUsers = (URL = API_URL) => async dispatch => {
  dispatch({ type: 'USERS_REQUESTING' });

  try {
    const { data } = await axios.get(URL);

    /* istanbul ignore next */
    dispatch({ type: 'USERS_SUCCESS', data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'USERS_FAILURE', err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchUsers = state => {
  if (state.home.readyStatus === 'USERS_SUCCESS') return false;

  return true;
};

/* istanbul ignore next */
export const fetchUsersIfNeeded = () => (dispatch, getState) => {
  /* istanbul ignore next */
  if (shouldFetchUsers(getState())) return dispatch(fetchUsers());

  /* istanbul ignore next */
  return null;
};
