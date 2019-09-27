import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
// @ts-ignore
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

import { fetchUser } from '../user';

const host = 'http://localhost';

axios.defaults.baseURL = host;
axios.defaults.adapter = httpAdapter;

const mockStore = configureMockStore([thunk]);

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

  it('creates USER_SUCCESS when fetching user has been done', () => {
    nock(host)
      .get('/test')
      .reply(200, response);

    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_SUCCESS', userId, data: response }
    ];
    const store = mockStore({ info: null });

    // @ts-ignore
    store.dispatch(fetchUser('test', host)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates USER_FAILURE when fail to fetch user', () => {
    nock(host)
      .get('/test')
      .replyWithError(errorMessage);

    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_FAILURE', userId, err: errorMessage }
    ];
    const store = mockStore({ err: null });

    // @ts-ignore
    store.dispatch(fetchUser('test', host)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
