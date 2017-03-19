import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';

import {
  fetchUsers,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
  API_URL,
} from '../action';

const mockStore = configureMockStore([thunk]);

describe('fetch users data', () => {
  const response = [{ id: '1', name: 'Welly' }];
  const errorMessage = 'Oops! Something went wrong.';

  beforeEach(() => { moxios.install(); });

  afterEach(() => { moxios.uninstall(); });

  test('creates USERS_SUCCESS when fetching users has been done', () => {
    moxios.stubRequest(API_URL, {
      status: 200,
      response: { data: response },
    });

    const expectedActions = [
      { type: USERS_REQUESTING },
      { type: USERS_SUCCESS, data: response },
    ];
    const store = mockStore({ list: null });

    store.dispatch(fetchUsers(axios))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });

  test('creates USERS_FAILURE when fail to fetch users', () => {
    moxios.stubRequest(API_URL, {
      status: 400,
      response: { err: errorMessage },
    });

    const expectedActions = [
      { type: USERS_REQUESTING },
      { type: USERS_FAILURE, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(fetchUsers(axios))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });
});
