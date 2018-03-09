import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

import { fetchUsers, fetchUser } from '../users.actions';
import { simpleActionMiddleware } from '../../storeMiddlewares';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const mockStore = configureMockStore([simpleActionMiddleware]);

describe('fetch users data', () => {
  const response = [{ id: '1', name: 'Welly' }];
  const errorMessage = 'Request failed with status code 404';

  afterEach(() => {
    nock.disableNetConnect();
  });

  test('creates USERS_SUCCESS when fetching users has been done', () => {
    nock(host)
      .get('/test')
      .reply(200, response);

    const expectedActions = [
      { type: 'USERS_REQUESTING' },
      { type: 'USERS_SUCCESS', data: response }
    ];
    const store = mockStore({ list: null, server: { requesting: false } });

    store.dispatch(fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('creates USERS_FAILURE when fail to fetch users', () => {
    nock(host)
      .get('/test')
      .replyWithError(errorMessage);

    const expectedActions = [
      { type: 'USERS_REQUESTING' },
      { type: 'USERS_FAILURE', err: errorMessage }
    ];
    const store = mockStore({ list: null, server: { requesting: false } });

    store.dispatch(fetchUsers(`${host}/test`)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetch user data', () => {
  const userId = 'test';
  const response = {
    name: 'Welly',
    phone: '007',
    email: 'test@gmail.com',
    website: 'www.test.com'
  };
  const errorMessage = 'Request failed with status code 404';

  afterEach(() => {
    nock.disableNetConnect();
  });

  test('creates USER_SUCCESS when fetching user has been done', () => {
    nock(host)
      .get('/test')
      .reply(200, response);

    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_SUCCESS', userId, data: response }
    ];
    const store = mockStore({ list: null, server: { requesting: false } });

    store.dispatch(fetchUser(userId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('creates USER_FAILURE when fail to fetch user', () => {
    nock(host)
      .get('/test')
      .replyWithError(errorMessage);

    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_FAILURE', userId, err: errorMessage }
    ];
    const store = mockStore({ err: null, server: { requesting: false } });

    store.dispatch(fetchUser('test', host)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
