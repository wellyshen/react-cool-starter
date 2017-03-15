import reducer from '../reducer';
import {
  USER_REQUESTING,
  USER_FAILURE,
  USER_SUCCESS,
} from '../action';

describe('reducer:userInfo', () => {
  it('should handle the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({});
  });

  it('should handle AN_USER_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: USER_REQUESTING,
        userId: '1',
      }),
    ).to.deep.equal({ 1: { readyStatus: USER_REQUESTING } });
  });

  it('should handle AN_USER_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: USER_FAILURE,
        userId: '1',
        err: 'Oops! Something went wrong.',
      }),
    ).to.deep.equal({
      1: {
        readyStatus: USER_FAILURE,
        err: 'Oops! Something went wrong.',
      },
    });
  });

  it('should handle AN_USER_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: USER_SUCCESS,
        userId: '1',
        data: {
          name: 'Welly',
          phone: '007',
          email: 'test@gmail.com',
          website: 'www.test.com',
        },
      }),
    ).to.deep.equal({
      1: {
        readyStatus: USER_SUCCESS,
        info: {
          name: 'Welly',
          phone: '007',
          email: 'test@gmail.com',
          website: 'www.test.com',
        },
      },
    });
  });
});
