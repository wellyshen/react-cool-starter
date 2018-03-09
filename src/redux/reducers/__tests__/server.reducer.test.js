import server from '../server.reducer';

describe('server data server', () => {
  test('should return the initial state', () => {
    expect(server(undefined, {})).toEqual({
      requesting: false
    });
  });

  test('should handle REQUESTING_SERVER', () => {
    expect(
      server(undefined, {
        type: 'REQUESTING_SERVER',
        data: true
      })
    ).toEqual({
      requesting: true
    });
  });
});
