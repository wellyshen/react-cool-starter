/* @flow */

/* istanbul ignore next */
export const fetchUsers = () => ({
  types: 'USERS',
  url: '/users',
  method: 'get'
});

/* istanbul ignore next */
export const fetchUsersIfNeeded = () => fetchUsers();
