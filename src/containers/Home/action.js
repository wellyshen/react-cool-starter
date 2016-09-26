export const DATA_INVALID = 'DATA_INVALID';
export const DATA_REQUESTING = 'DATA_REQUESTING';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILED = 'DATA_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
let prevState;

// Export this function for testing
export const fetchData = axios => (dispatch) => {
  dispatch({ type: DATA_REQUESTING });

  return axios.get(API_URL)
    .then((res) => {
      dispatch({ type: DATA_SUCCESS, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: DATA_FAILED, err });
    });
};

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchData = (state) => {
  /* istanbul ignore next */
  const home = state.get('home');

  /* istanbul ignore if */
  if (home.get('list') && home.get('readyState') === DATA_SUCCESS) {
    /* istanbul ignore if */
    if (prevState === home) return true;

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
    /* istanbul ignore if */
    if (shouldFetchData(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchData(axios));
    }

    /* istanbul ignore next */
    return null;
  };
}
