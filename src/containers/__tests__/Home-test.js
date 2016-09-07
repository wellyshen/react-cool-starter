import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import Home from '../Home';

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

  it('render loading indicator when data invalid', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_INVALID',
        list: null,
      },
    });

    expect(wrapper(store).find('p').text()).to.equal('Loading...');
  });

  it('render loading indicator when data is fetching', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCHING',
        list: null,
      },
    });

    expect(wrapper(store).find('p').text()).to.equal('Loading...');
  });

  it('render error message when fail to fetch data', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCH_FAILED',
        list: null,
      },
    });

    expect(wrapper(store).find('p').text()).to.equal('Oops, Failed to fetch users!');
  });
});
