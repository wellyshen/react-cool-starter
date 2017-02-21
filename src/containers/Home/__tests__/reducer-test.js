import reducer from '../reducer';
import {
  USERS_INVALID,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from '../action';

describe('reducer:Home', () => {
  it('should handle the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      readyState: USERS_INVALID,
    });
  });

  it('should handle USERS_REQUESTING', () => {
    expect(
      reducer(undefined, { type: USERS_REQUESTING }),
    ).to.deep.equal({
      readyState: USERS_REQUESTING,
    });
  });

  it('should handle USERS_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: USERS_FAILURE,
        err: 'Oops! Something went wrong.',
      }),
    ).to.deep.equal({
      readyState: USERS_FAILURE,
      err: 'Oops! Something went wrong.',
    });
  });

  it('should handle USERS_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: USERS_SUCCESS,
        data: [{ id: '1', name: 'Welly' }],
      }),
    ).to.deep.equal({
      readyState: USERS_SUCCESS,
      list: [{ id: '1', name: 'Welly' }],
    });
  });
});
