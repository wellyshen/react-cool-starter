/* eslint import/no-extraneous-dependencies:0 */
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import nock from 'nock';
// // import { fromJS } from 'immutable';
// import * as fetchUsers from '../fetchUsers';

// const mockStore = configureMockStore([thunk]);

// describe('action:fetchUsers', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });

//   it('creates USERS_FETCHED when fetching users has been done', () => {
//     nock('https://jsonplaceholder.typicode.com')
//       .get('/users')
//       .reply(200, { data: { name: 'Welly' } });

//     const expectedActions = [
//       { type: fetchUsers.USERS_FETCHING },
//       { type: fetchUsers.USERS_FETCHED, data: { name: 'Welly' } },
//     ];
//     const store = mockStore({ name: null });

//     return store.dispatch(fetchUsers.fetchUsers())
//       .then(() => expect(store.getActions()).to.equal(expectedActions));
//   });
// });
