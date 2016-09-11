import reducer from '../../reducers/users';
import {
  USERS_INVALID,
  USERS_FETCHING,
  USERS_FETCH_FAILED,
  USERS_FETCHED,
} from '../../actions/fetchUsers';

describe('reducer_users', () => {
  it('should handle the initial state', () => {
    expect(
      reducer(undefined, {}).toJS()
    ).to.deep.equal({
      readyState: USERS_INVALID, list: null,
    });
  });

  it('should handle USERS_FETCHING', () => {
    expect(
      reducer(undefined, {
        type: USERS_FETCHING,
      }
    ).toJS()).to.deep.equal({
      readyState: USERS_FETCHING, list: null,
    });
  });

  it('should handle USERS_FETCH_FAILED', () => {
    expect(
      reducer(undefined, {
        type: USERS_FETCH_FAILED,
        err: 'Oops! Something went wrong.',
      }).toJS()
    ).to.deep.equal({
      readyState: USERS_FETCH_FAILED,
      list: null,
      err: 'Oops! Something went wrong.',
    });
  });

  it('should handle USERS_FETCHED', () => {
    expect(
      reducer(undefined, {
        type: USERS_FETCHED,
        data: [{ id: '1', name: 'Welly' }],
      }).toJS()
    ).to.deep.equal({
      readyState: USERS_FETCHED,
      list: [{ id: '1', name: 'Welly' }],
    });
  });
});
