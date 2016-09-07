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
  it('render loading indicator when data invalid', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_INVALID',
        list: null,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper.find('p').text()).to.equal('Loading...');
  });

  it('render loading indicator when data is fetching', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCHING',
        list: null,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper.find('p').text()).to.equal('Loading...');
  });

  it('render error message when fail to fetch data', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCH_FAILED',
        list: null,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper.find('p').text()).to.equal('Oops, Failed to fetch users!');
  });
});
