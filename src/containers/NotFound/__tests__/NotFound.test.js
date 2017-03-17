import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index';

test('<NotFound />', () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper.find('p').text()).toEqual('Oops, Page was not found!');
});
