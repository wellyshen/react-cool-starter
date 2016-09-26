export const AN_USER_FETCHING = 'AN_USER_FETCHING';
export const AN_USER_FETCHED = 'AN_USER_FETCHED';
export const AN_USER_FETCH_FAILED = 'AN_USER_FETCH_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
let prevState;

// Export this function for testing
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
  const anUser = state.getIn(['anUser', userId]);

  if (anUser && anUser.get('readyState') === AN_USER_FETCHED) {
    if (prevState === anUser) return true;

    prevState = anUser;
    return false;
  }

  return true;
};

/* istanbul ignore next */
export function fetchAnUserIfNeeded(userId) {
  return (dispatch, getState, axios) => {
    if (shouldFetchAnUser(getState(), userId)) {
      return dispatch(fetchAnUser(userId, axios));
    }

    return null;
  };
}
