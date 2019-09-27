import {
  HomeState,
  UsersAction,
  USERS_REQUESTING,
  USERS_SUCCESS,
  USERS_FAILURE
} from '../types';

const initialState: HomeState = {
  readyStatus: 'invalid',
  err: null,
  list: []
};

export default (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case USERS_REQUESTING:
      return {
        ...state,
        readyStatus: 'request'
      };
    case USERS_SUCCESS:
      return {
        ...state,
        readyStatus: 'success',
        list: action.data
      };
    case USERS_FAILURE:
      return {
        ...state,
        readyStatus: 'failure',
        err: action.err
      };
    default:
      return state;
  }
};
