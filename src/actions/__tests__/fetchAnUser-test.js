/* eslint import/no-extraneous-dependencies:0 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import axios from 'axios';
import * as action from '../fetchAnUser';

const mockStore = configureMockStore([thunk]);

describe('action:fetchAnUser', () => {
  let sandbox;
  const response = {
    name: 'Welly',
    phone: '007',
    email: 'test@gmail.com',
    website: 'www.test.com',
  };
  const errorMessage = { message: 'Oops! Something went wrong!' };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('creates AN_USER_FETCHING when success to fetch data', () => {
    sandbox.stub(axios, 'get')
      .returns(Promise.resolve({ status: 200, data: response }));

    const expectedActions = [
      { type: action.USERS_FETCHING },
      { type: action.USERS_FETCHED, data: response },
    ];
    const store = mockStore({ info: null });

    store.dispatch(action.fetchAnUser())
      .then(() => expect(store.getActions()).to.equal(expectedActions))
      .catch(() => {});
  });

  it('creates AN_USER_FETCH_FAILED when fail to fetch data', () => {
    sandbox.stub(axios, 'get')
      .returns(Promise.reject({ err: errorMessage }));

    const expectedActions = [
      { type: action.USERS_FETCHING },
      { type: action.USERS_FETCH_FAILED, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(action.fetchAnUser())
      .then(() => expect(store.getActions()).to.equal(expectedActions))
      .catch(() => {});
  });
});
