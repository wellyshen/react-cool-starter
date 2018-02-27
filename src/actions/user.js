/* @flow */

/* istanbul ignore next */
export const fetchUser = (userId: string) => ({
  types: 'USER',
  url: `/users/${userId}`,
  method: 'get',
  userId
});

export const fetchUserIfNeeded = (params: string) => fetchUser(params);
