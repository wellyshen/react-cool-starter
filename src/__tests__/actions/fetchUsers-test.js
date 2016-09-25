/* eslint import/no-extraneous-dependencies:0 */

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import axios from 'axios';
import * as action from '../../actions/fetchUsers';

const mockStore = configureMockStore([thunk]);

describe('fetchUsers', () => {
  let sandbox;
  const response = [{ id: '1', name: 'Welly' }];
  const errorMessage = 'Oops! Something went wrong.';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('creates USERS_FETCHING when success to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.resolve({ status: 200, data: response }));

    const expectedActions = [
      { type: action.USERS_FETCHING },
      { type: action.USERS_FETCHED, data: response },
    ];
    const store = mockStore({ list: null });

    store.dispatch(action.fetchUsers(axios))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });

  it('creates USERS_FETCH_FAILED when fail to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.reject(errorMessage));

    const expectedActions = [
      { type: action.USERS_FETCHING },
      { type: action.USERS_FETCH_FAILED, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(action.fetchUsers(axios))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });
});
