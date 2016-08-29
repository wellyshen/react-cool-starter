import axios from 'axios';

export const AN_USER_FETCHING = 'AN_USER_FETCHING';
export const AN_USER_FETCHED = 'AN_USER_FETCHED';
export const AN_USER_FETCH_FAILED = 'AN_USER_FETCH_FAILED';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchAnUser = userId => dispatch => {
  dispatch({ type: AN_USER_FETCHING, userId });

  return axios.get(`${API_URL}/${userId}`)
    .then(res => {
      dispatch({ type: AN_USER_FETCHED, userId, data: res.data });
    })
    .catch(err => {
      dispatch({ type: AN_USER_FETCH_FAILED, userId, err });
    });
};

const shouldFetchAnUser = (state, userId) => {
  const anUser = state.getIn(['anUser', userId]);

  if (!anUser || anUser.readyState === AN_USER_FETCH_FAILED) return true;

  return false;
};

export function fetchAnUserIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchAnUser(getState(), userId)) {
      return dispatch(fetchAnUser(userId));
    }

    return null;
  };
}
