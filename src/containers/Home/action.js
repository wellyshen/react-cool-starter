export const USERS_INVALID = 'USERS_INVALID';
export const USERS_REQUESTING = 'USERS_REQUESTING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
let prevState;

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
  /* istanbul ignore next */
  const home = state.get('home');

  if (home.get('list') && home.get('readyState') === USERS_SUCCESS) {
    if (prevState === home) return true;  // Dispatch action if data changed

    /* istanbul ignore next */
    prevState = home;
    /* istanbul ignore next */
    return false;
  }

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
