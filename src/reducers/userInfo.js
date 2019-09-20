export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_REQUESTING':
      return {
        ...state,
        [action.userId]: {
          readyStatus: 'USER_REQUESTING'
        }
      };
    case 'USER_FAILURE':
      return {
        ...state,
        [action.userId]: {
          readyStatus: 'USER_FAILURE',
          err: action.err
        }
      };
    case 'USER_SUCCESS':
      return {
        ...state,
        [action.userId]: {
          readyStatus: 'USER_SUCCESS',
          info: action.data
        }
      };
    default:
      return state;
  }
};
