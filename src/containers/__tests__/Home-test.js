import React, { Component } from 'react';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import { Home } from '../Home';

describe('<Home />', () => {
  it('renders it', () => {
    const mockData = fromJS({
      readyState: 'USERS_INVALID',
      list: null,
    });
    const wrapper = mount(<Home users={mockData} />);

    // console.log(wrapper);
  });
});
