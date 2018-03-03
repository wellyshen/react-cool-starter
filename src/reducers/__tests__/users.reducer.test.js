import users from '../users.reducer';

describe('users data users', () => {
  test('should return the initial state', () => {
    expect(users(undefined, {})).toEqual({
      err: null,
      list: [],
      readyStatus: 'USERS_INVALID',
      userInfo: {}
    });
  });

  test('should handle USERS_REQUESTING', () => {
    expect(
      users(undefined, {
        type: 'USERS_REQUESTING',
        err: null,
        data: []
      })
    ).toEqual({
      err: null,
      list: [],
      readyStatus: 'USERS_REQUESTING',
      userInfo: {}
    });
  });

  test('should handle USERS_FAILURE', () => {
    expect(
      users(undefined, {
        type: 'USERS_FAILURE',
        err: 'Oops! Something went wrong.',
        data: []
      })
    ).toEqual({
      err: 'Oops! Something went wrong.',
      list: [],
      readyStatus: 'USERS_FAILURE',
      userInfo: {}
    });
  });

  test('should handle USERS_SUCCESS', () => {
    expect(
      users(undefined, {
        type: 'USERS_SUCCESS',
        err: null,
        data: [{ id: '1', name: 'Welly' }]
      })
    ).toEqual({
      readyStatus: 'USERS_SUCCESS',
      err: null,
      list: [{ id: '1', name: 'Welly' }],
      userInfo: {}
    });
  });
});

describe('user data UserInfo', () => {
  test('should handle the initial state', () => {
    expect(users(undefined, {})).toEqual({
      err: null,
      list: [],
      readyStatus: 'USERS_INVALID',
      userInfo: {}
    });
  });

  test('should handle USER_REQUESTING', () => {
    expect(
      users(undefined, {
        type: 'USER_REQUESTING',
        userId: '1'
      })
    ).toEqual({
      err: null,
      list: [],
      readyStatus: 'USERS_INVALID',
      userInfo: {
        '1': { readyStatus: 'USER_REQUESTING' }
      }
    });
  });

  test('should handle USER_FAILURE', () => {
    expect(
      users(undefined, {
        type: 'USER_FAILURE',
        userId: '1',
        err: 'Oops! Something went wrong.'
      })
    ).toEqual({
      err: null,
      list: [],
      readyStatus: 'USERS_INVALID',
      userInfo: {
        '1': {
          err: 'Oops! Something went wrong.',
          readyStatus: 'USER_FAILURE'
        }
      }
    });
  });

  test('should handle USER_SUCCESS', () => {
    expect(
      users(undefined, {
        type: 'USER_SUCCESS',
        userId: '1',
        data: {
          name: 'Welly',
          phone: '007',
          email: 'test@gmail.com',
          website: 'www.test.com'
        }
      })
    ).toEqual({
      err: null,
      list: [],
      readyStatus: 'USERS_INVALID',
      userInfo: {
        '1': {
          readyStatus: 'USER_SUCCESS',
          info: {
            name: 'Welly',
            phone: '007',
            email: 'test@gmail.com',
            website: 'www.test.com'
          }
        }
      }
    });
  });
});
