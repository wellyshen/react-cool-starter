import home from '../home';

describe('users data home', () => {
  it('should return the initial state', () => {
    expect(home(undefined, {})).toEqual({
      readyStatus: 'invalid',
      err: null,
      list: []
    });
  });

  it('should handle USERS_REQUESTING', () => {
    expect(
      home(undefined, {
        type: 'USERS_REQUESTING',
        err: null,
        data: []
      })
    ).toEqual({
      readyStatus: 'request',
      err: null,
      list: []
    });
  });

  it('should handle USERS_FAILURE', () => {
    expect(
      home(undefined, {
        type: 'USERS_FAILURE',
        err: 'Oops! Something went wrong.',
        data: []
      })
    ).toEqual({
      readyStatus: 'failure',
      err: 'Oops! Something went wrong.',
      list: []
    });
  });

  it('should handle USERS_SUCCESS', () => {
    expect(
      home(undefined, {
        type: 'USERS_SUCCESS',
        err: null,
        data: [{ id: '1', name: 'Welly' }]
      })
    ).toEqual({
      readyStatus: 'success',
      err: null,
      list: [{ id: '1', name: 'Welly' }]
    });
  });
});
