import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index';

describe('<NotFound />', () => {
  test('renders 404 error message', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('p').text()).toBe('Oops, Page was not found!');
  });
});
