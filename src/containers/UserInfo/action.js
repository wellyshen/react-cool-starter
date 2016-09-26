export const DATA_REQUESTING = 'DATA_REQUESTING';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILED = 'DATA_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
let prevState;

// Export this function for testing
export const fetchData = (userId, axios) => (dispatch) => {
  dispatch({ type: DATA_REQUESTING, userId });

  return axios.get(`${API_URL}/${userId}`)
    .then((res) => {
      dispatch({ type: DATA_SUCCESS, userId, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: DATA_FAILED, userId, err });
    });
};

// Using for preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchData = (state, userId) => {
  /* istanbul ignore next */
  const userInfo = state.getIn(['userInfo', userId]);

  /* istanbul ignore if */
  if (userInfo && userInfo.get('readyState') === DATA_SUCCESS) {
    /* istanbul ignore if */
    if (prevState === userInfo) return true;  // Dispatch action if data changed

    /* istanbul ignore next */
    prevState = userInfo;
    /* istanbul ignore next */
    return false;
  }

  /* istanbul ignore next */
  return true;
};

/* istanbul ignore next */
export function fetchDataIfNeeded(userId) {
  /* istanbul ignore next */
  return (dispatch, getState, axios) => {
    /* istanbul ignore if */
    if (shouldFetchData(getState(), userId)) {
      /* istanbul ignore next */
      return dispatch(fetchData(userId, axios));
    }

    /* istanbul ignore next */
    return null;
  };
}
