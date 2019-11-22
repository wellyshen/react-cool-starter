import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import { fetchUsers } from '../users';

jest.mock('axios');

describe('users action', () => {
  const mockStore = configureMockStore([thunk]);

  it('creates USERS_SUCCESS when fetching users has been done', async () => {
    const data = [{ id: 'test', name: 'Welly' }];
    const store = mockStore({ list: null });
    const expectedActions = [
      { type: 'USERS_REQUESTING' },
      { type: 'USERS_SUCCESS', data }
    ];

    // @ts-ignore
    axios.get.mockResolvedValue({ data });

    // @ts-ignore
    await store.dispatch(fetchUsers());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates USERS_FAILURE when fail to fetch users', async () => {
    const errorMessage = 'Request failed with status code 404';
    const store = mockStore({ err: null });
    const expectedActions = [
      { type: 'USERS_REQUESTING' },
      { type: 'USERS_FAILURE', err: errorMessage }
    ];

    // @ts-ignore
    axios.get.mockRejectedValue({ message: errorMessage });

    // @ts-ignore
    await store.dispatch(fetchUsers());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
