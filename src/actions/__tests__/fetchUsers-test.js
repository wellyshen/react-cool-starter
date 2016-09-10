/* eslint import/no-extraneous-dependencies:0 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import axios from 'axios';
import * as action from '../fetchUsers';

const mockStore = configureMockStore([thunk]);

describe('action:fetchUsers', () => {
  let sandbox;
  const response = [{ id: '1', name: 'Welly' }];
  const errorMessage = { message: 'Oops! Something went wrong!' };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('creates USERS_FETCHING when success to fetch data', () => {
    sandbox.stub(axios, 'get')
      .returns(Promise.resolve({ status: 200, data: response }));

    const expectedActions = [
      { type: action.USERS_FETCHING },
      { type: action.USERS_FETCHED, data: response },
    ];
    const store = mockStore({ list: null });

    store.dispatch(action.fetchUsers())
      .then(() => expect(store.getActions()).to.equal(expectedActions))
      .catch(() => {});
  });

  it('creates USERS_FETCH_FAILED when fail to fetch data', () => {
    sandbox.stub(axios, 'get')
      .returns(Promise.reject({ err: errorMessage }));

    const expectedActions = [
      { type: action.USERS_FETCHING },
      { type: action.USERS_FETCH_FAILED, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(action.fetchUsers())
      .then(() => expect(store.getActions()).to.equal(expectedActions))
      .catch(() => {});
  });
});
