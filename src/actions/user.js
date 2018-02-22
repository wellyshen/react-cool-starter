/* @flow */

/* istanbul ignore next */
export const fetchUser = userId => {
  console.log(userId);
  return {
    types: 'USER',
    url: `/users/${userId}`,
    method: 'get',
    userId
  };
};

export const fetchUserIfNeeded = params => fetchUser(params);
