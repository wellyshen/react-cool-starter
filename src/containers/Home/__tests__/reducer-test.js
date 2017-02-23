import reducer from '../reducer';
import {
  USERS_INVALID,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from '../action';

describe('reducer:Home', () => {
  it('should handle the initial state', () => {
    expect(reducer(undefined, {
      err: null,
      list: [],
    })).to.deep.equal({
      readyState: USERS_INVALID,
      err: null,
      list: [],
    });
  });

  it('should handle USERS_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: USERS_REQUESTING,
        err: null,
        list: [],
      }),
    ).to.deep.equal({
      readyState: USERS_REQUESTING,
      err: null,
      list: [],
    });
  });

  it('should handle USERS_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: USERS_FAILURE,
        err: 'Oops! Something went wrong.',
        list: [],
      }),
    ).to.deep.equal({
      readyState: USERS_FAILURE,
      err: 'Oops! Something went wrong.',
      list: [],
    });
  });

  it('should handle USERS_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: USERS_SUCCESS,
        err: null,
        data: [{ id: '1', name: 'Welly' }],
      }),
    ).to.deep.equal({
      readyState: USERS_SUCCESS,
      err: null,
      list: [{ id: '1', name: 'Welly' }],
    });
  });
});
