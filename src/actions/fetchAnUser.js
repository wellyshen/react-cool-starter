export const AN_USER_FETCHING = 'AN_USER_FETCHING';
export const AN_USER_FETCHED = 'AN_USER_FETCHED';
export const AN_USER_FETCH_FAILED = 'AN_USER_FETCH_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// export this function for testing
export const fetchAnUser = (userId, axios) => (dispatch) => {
  dispatch({ type: AN_USER_FETCHING, userId });

  return axios.get(`${API_URL}/${userId}`)
    .then((res) => {
      dispatch({ type: AN_USER_FETCHED, userId, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: AN_USER_FETCH_FAILED, userId, err });
    });
};

/* istanbul ignore next */
const shouldFetchAnUser = (state, userId) => {
  /* istanbul ignore next */
  const anUser = state.getIn(['anUser', userId]);

  /* istanbul ignore if */
  if (!anUser || anUser.readyState === AN_USER_FETCH_FAILED) return true;

  /* istanbul ignore next */
  return false;
};

/* istanbul ignore next */
export function fetchAnUserIfNeeded(userId) {
  /* istanbul ignore next */
  return (dispatch, getState, axios) => {
    /* istanbul ignore if */
    if (shouldFetchAnUser(getState(), userId)) {
      return dispatch(fetchAnUser(userId, axios));
    }

    /* istanbul ignore next */
    return null;
  };
}
