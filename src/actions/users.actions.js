/* @flow */

/* istanbul ignore next */
export const fetchUser = (userId: string) => ({
  types: 'USER',
  url: `/users/${userId}`,
  method: 'get',
  userId
});

/* istanbul ignore next */
export const fetchUsers = () => ({
  types: 'USERS',
  url: '/users',
  method: 'get'
});
