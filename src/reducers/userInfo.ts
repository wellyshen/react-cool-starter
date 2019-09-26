import {
  UserInfoState,
  UserAction,
  USER_REQUESTING,
  USER_SUCCESS,
  USER_FAILURE
} from '../types';

export default (state: UserInfoState = {}, action: UserAction) => {
  switch (action.type) {
    case USER_REQUESTING:
      return {
        ...state,
        [action.userId]: {
          readyStatus: 'request'
        }
      };
    case USER_SUCCESS:
      return {
        ...state,
        [action.userId]: {
          readyStatus: 'success',
          info: action.data
        }
      };
    case USER_FAILURE:
      return {
        ...state,
        [action.userId]: {
          readyStatus: 'failure',
          err: action.err
        }
      };
    default:
      return state;
  }
};
