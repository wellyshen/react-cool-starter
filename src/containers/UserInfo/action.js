export const AN_USER_REQUESTING = 'AN_USER_REQUESTING';
export const AN_USER_SUCCESS = 'AN_USER_SUCCESS';
export const AN_USER_FAILURE = 'AN_USER_FAILURE';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
export const fetchData = (userId, axios) => (dispatch) => {
  dispatch({ type: AN_USER_REQUESTING, userId });

  return axios.get(`${API_URL}/${userId}`)
    .then((res) => {
      dispatch({ type: AN_USER_SUCCESS, userId, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: AN_USER_FAILURE, userId, err });
    });
};

// Using for preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchData = (state, userId) => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  /* istanbul ignore next */
  if (__DEV__) return true;

  /* istanbul ignore next */
  const userInfo = state.getIn(['userInfo', userId]);

  // Preventing dobule fetching data in production
  /* istanbul ignore next */
  if (userInfo && userInfo.get('readyState') === AN_USER_SUCCESS) return false;

  /* istanbul ignore next */
  return true;
};

/* istanbul ignore next */
export const fetchDataIfNeeded = userId => (dispatch, getState, axios) => {
  /* istanbul ignore next */
  if (shouldFetchData(getState(), userId)) {
    /* istanbul ignore next */
    return dispatch(fetchData(userId, axios));
  }

  /* istanbul ignore next */
  return null;
};
