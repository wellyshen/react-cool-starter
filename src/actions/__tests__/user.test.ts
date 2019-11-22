import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import { fetchUser } from '../user';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('user action', () => {
  const userId = '0109';

  it('creates USER_SUCCESS when fetching user has been done', async () => {
    const data = {
      name: 'Welly',
      phone: '007',
      email: 'test@gmail.com',
      website: 'www.test.com'
    };
    const store = mockStore({ info: null });
    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_SUCCESS', userId, data }
    ];

    // @ts-ignore
    axios.get.mockResolvedValue({ data });

    // @ts-ignore
    await store.dispatch(fetchUser(userId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates USER_FAILURE when fail to fetch user', async () => {
    const errorMessage = 'Request failed with status code 404';
    const store = mockStore({ err: null });
    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_FAILURE', userId, err: errorMessage }
    ];

    // @ts-ignore
    axios.get.mockRejectedValue({ message: errorMessage });

    // @ts-ignore
    await store.dispatch(fetchUser(userId));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
