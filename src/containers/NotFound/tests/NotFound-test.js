import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import NotFound from '../index';

describe('<NotFound />', () => {
  it('renders 404 error message', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('p').text()).to.equal('Oops, Page was not found!');
  });
});
