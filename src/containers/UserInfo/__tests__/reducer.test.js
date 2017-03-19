import reducer from '../reducer';
import {
  USER_REQUESTING,
  USER_FAILURE,
  USER_SUCCESS,
} from '../action';

describe('user data reducer', () => {
  it('should handle the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle USER_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: USER_REQUESTING,
        userId: '1',
      }),
    ).toEqual({ 1: { readyStatus: USER_REQUESTING } });
  });

  it('should handle USER_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: USER_FAILURE,
        userId: '1',
        err: 'Oops! Something went wrong.',
      }),
    ).toEqual({
      1: {
        readyStatus: USER_FAILURE,
        err: 'Oops! Something went wrong.',
      },
    });
  });

  it('should handle USER_SUCCESS', () => {
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
    ).toEqual({
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
