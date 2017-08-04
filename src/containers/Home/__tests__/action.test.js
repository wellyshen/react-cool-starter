import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

import {
  fetchUsers,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from '../action';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const mockStore = configureMockStore([thunk]);

describe('fetch users data', () => {
  const response = [{ id: '1', name: 'Welly' }];
  const errorMessage = 'Request failed with status code 404';

  afterEach(() => { nock.disableNetConnect(); });

  test('creates USERS_SUCCESS when fetching users has been done', () => {
    nock(host)
      .get('/test')
      .reply(200, response);

    const expectedActions = [
      { type: USERS_REQUESTING },
      { type: USERS_SUCCESS, data: response },
    ];
    const store = mockStore({ list: null });

    store.dispatch(fetchUsers(axios, `${host}/test`))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });

  test('creates USERS_FAILURE when fail to fetch users', () => {
    nock(host)
      .get('/test')
      .replyWithError(errorMessage);

    const expectedActions = [
      { type: USERS_REQUESTING },
      { type: USERS_FAILURE, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(fetchUsers(axios, `${host}/test`))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });
});
