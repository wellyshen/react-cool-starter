// import { toJS } from 'immutable';
import reducer from '../../reducers/reducer_users';
import {
  USERS_INVALID,
  USERS_FETCHING,
  USERS_FETCHED,
  USERS_FETCH_FAILED,
} from '../../actions/fetchUsers';

describe('reducer_users', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}).toJS()).to.deep.equal({
      readyState: USERS_INVALID, list: null,
    });
  });
});
