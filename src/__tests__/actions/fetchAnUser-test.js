/* eslint import/no-extraneous-dependencies:0 */

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import axios from 'axios';
import * as action from '../../actions/fetchAnUser';

const mockStore = configureMockStore([thunk]);

describe('fetchAnUser', () => {
  let sandbox;
  const userId = '1';
  const response = {
    name: 'Welly',
    phone: '007',
    email: 'test@gmail.com',
    website: 'www.test.com',
  };
  const errorMessage = 'Oops! Something went wrong.';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('creates AN_USER_FETCHED when success to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.resolve({ status: 200, data: response }));

    const expectedActions = [
      { type: action.AN_USER_FETCHING, userId },
      { type: action.AN_USER_FETCHED, userId, data: response },
    ];
    const store = mockStore({ info: null });

    store.dispatch(action.fetchAnUser(userId))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });

  it('creates AN_USER_FETCH_FAILED when fail to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.reject(errorMessage));

    const expectedActions = [
      { type: action.AN_USER_FETCHING, userId },
      { type: action.AN_USER_FETCH_FAILED, userId, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(action.fetchAnUser(userId))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });
});
