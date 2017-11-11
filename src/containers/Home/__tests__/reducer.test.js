import reducer from '../reducer';

describe('users data reducer', () => {
  test('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({
      readyStatus: 'USERS_INVALID',
      err: null,
      list: [],
    });
  });

  test('should handle USERS_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: 'USERS_REQUESTING',
        err: null,
        data: [],
      }),
    ).toEqual({
      readyStatus: 'USERS_REQUESTING',
      err: null,
      list: [],
    });
  });

  test('should handle USERS_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: 'USERS_FAILURE',
        err: 'Oops! Something went wrong.',
        data: [],
      }),
    ).toEqual({
      readyStatus: 'USERS_FAILURE',
      err: 'Oops! Something went wrong.',
      list: [],
    });
  });

  test('should handle USERS_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: 'USERS_SUCCESS',
        err: null,
        data: [{ id: '1', name: 'Welly' }],
      }),
    ).toEqual({
      readyStatus: 'USERS_SUCCESS',
      err: null,
      list: [{ id: '1', name: 'Welly' }],
    });
  });
});
