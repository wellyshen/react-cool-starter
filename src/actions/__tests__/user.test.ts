import axios from 'axios';

import testHelper from '../../utils/testHelper';
import { fetchUser } from '../user';

jest.mock('axios');

describe('user action', () => {
  const userId = '0109';

  it('creates USER_SUCCESS when fetching user has been done', async () => {
    const { dispatch, getActions } = testHelper({ user: {} });
    const data = {
      name: 'Welly',
      phone: '007',
      email: 'test@gmail.com',
      website: 'www.test.com'
    };
    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_SUCCESS', userId, data }
    ];

    // @ts-ignore
    axios.get.mockResolvedValue({ data });

    // @ts-ignore
    await dispatch(fetchUser(userId));
    expect(getActions()).toEqual(expectedActions);
  });

  it('creates USER_FAILURE when fail to fetch user', async () => {
    const { dispatch, getActions } = testHelper({ user: {} });
    const errorMessage = 'Request failed with status code 404';
    const expectedActions = [
      { type: 'USER_REQUESTING', userId },
      { type: 'USER_FAILURE', userId, err: errorMessage }
    ];

    // @ts-ignore
    axios.get.mockRejectedValue({ message: errorMessage });

    // @ts-ignore
    await dispatch(fetchUser(userId));
    expect(getActions()).toEqual(expectedActions);
  });
});
