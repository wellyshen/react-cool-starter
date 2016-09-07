import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import Home from '../Home';

describe('<Home />', () => {
  it('renders <Home />', () => {
    const props = {
      users: fromJS({
        readyState: 'USERS_INVALID',
        list: null,
      }),
    };

    const wrapper = mount(
      <Provider>
        <Home {...props} />
      </Provider>
    );

    console.log(wrapper);
  });
});
