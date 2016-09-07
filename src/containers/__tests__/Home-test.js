import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { Map, fromJS } from 'immutable';
import Home from '../Home';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('<Home />', () => {
  it('renders <Home />', () => {
    const store = storeFake({
      users: () => Map({  // eslint-disable-line new-cap
        readyState: 'USERS_FETCHED',
        list: fromJS([{ name: 'Welly' }]),
      }),
    });

    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    console.log(wrapper);
  });
});
