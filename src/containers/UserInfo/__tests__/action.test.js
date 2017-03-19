import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';

import {
  fetchUser,
  USER_REQUESTING,
  USER_FAILURE,
  USER_SUCCESS,
  API_URL,
} from '../action';

const mockStore = configureMockStore([thunk]);

describe('fetch user data', () => {
  const userId = '1';
  const response = {
    name: 'Welly',
    phone: '007',
    email: 'test@gmail.com',
    website: 'www.test.com',
  };
  const errorMessage = 'Oops! Something went wrong.';

  beforeEach(() => { moxios.install(); });

  afterEach(() => { moxios.uninstall(); });

  test('creates USER_SUCCESS when fetching users has been done', () => {
    moxios.stubRequest(API_URL, {
      status: 200,
      response: { data: response },
    });

    const expectedActions = [
      { type: USER_REQUESTING, userId },
      { type: USER_SUCCESS, userId, data: response },
    ];
    const store = mockStore({ info: null });

    store.dispatch(fetchUser(userId, axios))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });

  test('creates USER_FAILURE when fail to fetch users', () => {
    moxios.stubRequest(API_URL + userId, {
      status: 400,
      response: { err: errorMessage },
    });

    const expectedActions = [
      { type: USER_REQUESTING, userId },
      { type: USER_FAILURE, userId, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(fetchUser(userId, axios))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });
});
