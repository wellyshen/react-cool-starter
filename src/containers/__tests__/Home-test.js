import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import Home from '../Home';
import UserList from '../../components/UserList';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => fromJS({ ...state }),
});

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = store => mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('renders the loading status if data invalid', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_INVALID',
        list: null,
      },
    });

    expect(wrapper(store).find('p').text()).to.equal('Loading...');
  });

  it('renders the loading status if loading data', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCHING',
        list: null,
      },
    });

    expect(wrapper(store).find('p').text()).to.equal('Loading...');
  });

  it('renders an error if loading failed', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCH_FAILED',
        list: null,
      },
    });

    expect(wrapper(store).find('p').text()).to.equal('Oops, Failed to fetch users!');
  });

  it('renders the user list if loading was successful', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCHED',
        list: [{ name: 'Welly', id: '19850109' }],
      },
    });
    const users = store.getState().get('users');

    // eslint-disable-next-line no-unused-expressions
    expect(wrapper(store).contains(<UserList list={users.get('list')} />)).to.be.true;
  });
});
