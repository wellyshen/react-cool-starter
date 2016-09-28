export const USERS_INVALID = 'USERS_INVALID';
export const USERS_REQUESTING = 'USERS_REQUESTING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
export const fetchData = axios => (dispatch) => {
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
const shouldFetchData = (state) => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  /* istanbul ignore next */
  if (__DEV__) return true;

  /* istanbul ignore next */
  const home = state.get('home');

  /* istanbul ignore next */
  if (home.get('readyState') === USERS_SUCCESS) return false; // Preventing double fetching data

  /* istanbul ignore next */
  return true;
};

/* istanbul ignore next */
export function fetchDataIfNeeded() {
  /* istanbul ignore next */
  return (dispatch, getState, axios) => {
    if (shouldFetchData(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchData(axios));
    }

    /* istanbul ignore next */
    return null;
  };
}
