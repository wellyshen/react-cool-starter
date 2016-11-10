import reducer from '../reducer';
import {
  USERS_INVALID,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from '../action';

describe('reducer:Home', () => {
  it('should handle the initial state', () => {
    expect(
      reducer(undefined, {}).toJS(),
    ).to.deep.equal({
      readyState: USERS_INVALID, list: null,
    });
  });

  it('should handle USERS_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: USERS_REQUESTING,
      },
    ).toJS()).to.deep.equal({
      readyState: USERS_REQUESTING, list: null,
    });
  });

  it('should handle USERS_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: USERS_FAILURE,
        err: 'Oops! Something went wrong.',
      }).toJS(),
    ).to.deep.equal({
      readyState: USERS_FAILURE,
      list: null,
      err: 'Oops! Something went wrong.',
    });
  });

  it('should handle USERS_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: USERS_SUCCESS,
        data: [{ id: '1', name: 'Welly' }],
      }).toJS(),
    ).to.deep.equal({
      readyState: USERS_SUCCESS,
      list: [{ id: '1', name: 'Welly' }],
    });
  });
});
