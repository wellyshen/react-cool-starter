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
  it('renders <Home />', () => {
    const store = storeFake({
      users: {
        readyState: 'USERS_FETCHED',
        list: [{ name: 'Welly' }],
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    console.log(wrapper);
  });
});
