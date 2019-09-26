import userInfo from '../userInfo';

describe('user data userInfo', () => {
  it('should handle the initial state', () => {
    expect(userInfo(undefined, {})).toEqual({});
  });

  it('should handle USER_REQUESTING', () => {
    expect(
      userInfo(undefined, {
        type: 'USER_REQUESTING',
        userId: '1'
      })
    ).toEqual({ 1: { readyStatus: 'request' } });
  });

  it('should handle USER_FAILURE', () => {
    expect(
      userInfo(undefined, {
        type: 'USER_FAILURE',
        userId: '1',
        err: 'Oops! Something went wrong.'
      })
    ).toEqual({
      1: {
        readyStatus: 'failure',
        err: 'Oops! Something went wrong.'
      }
    });
  });

  it('should handle USER_SUCCESS', () => {
    expect(
      userInfo(undefined, {
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
      1: {
        readyStatus: 'success',
        info: {
          name: 'Welly',
          phone: '007',
          email: 'test@gmail.com',
          website: 'www.test.com'
        }
      }
    });
  });
});
