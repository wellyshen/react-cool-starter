import _ from 'lodash';
import {
  AN_USER_REQUESTING,
  AN_USER_FAILURE,
  AN_USER_SUCCESS,
} from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case AN_USER_REQUESTING:
      return _.assign({}, state, {
        [action.userId]: {
          readyState: AN_USER_REQUESTING,
        },
      });
    case AN_USER_FAILURE:
      return _.assign({}, state, {
        [action.userId]: {
          readyState: AN_USER_FAILURE,
          err: action.err,
        },
      });
    case AN_USER_SUCCESS:
      return _.assign({}, state, {
        [action.userId]: {
          readyState: AN_USER_SUCCESS,
          info: action.data,
        },
      });
    default:
      return state;
  }
};
