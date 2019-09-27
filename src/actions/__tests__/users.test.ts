import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
// @ts-ignore
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

import { fetchUsers } from '../users';

const host = 'http://localhost';

axios.defaults.baseURL = host;
axios.defaults.adapter = httpAdapter;

const mockStore = configureMockStore([thunk]);

describe('fetch users data', () => {
  const response = [{ id: 'test', name: 'Welly' }];
  const errorMessage = 'Request failed with status code 404';

  afterEach(() => {
    nock.disableNetConnect();
  });

  it('creates USERS_SUCCESS when fetching users has been done', () => {
    nock(host)
      .get('/test')
      .reply(200, response);

    const expectedActions = [
      { type: 'USERS_REQUESTING' },
      { type: 'USERS_SUCCESS', data: response }
    ];
    const store = mockStore({ list: null });

    // @ts-ignore
    store.dispatch(fetchUsers(`${host}/test`)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates USERS_FAILURE when fail to fetch users', () => {
    nock(host)
      .get('/test')
      .replyWithError(errorMessage);

    const expectedActions = [
      { type: 'USERS_REQUESTING' },
      { type: 'USERS_FAILURE', err: errorMessage }
    ];
    const store = mockStore({ err: null });

    // @ts-ignore
    store.dispatch(fetchUsers(`${host}/test`)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
