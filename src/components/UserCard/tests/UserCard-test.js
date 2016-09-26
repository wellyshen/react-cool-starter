/* eslint prefer-template:0 */

import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import UserCard from '../index';

describe('<UserCard />', () => {
  it('renders user\'s info', () => {
    const mockData = fromJS({
      name: 'Welly',
      phone: '007',
      email: 'test@gmail.com',
      website: 'www.test.com',
    });
    const wrapper = shallow(<UserCard info={mockData} />);

    // Validate all of the text in each <li>
    expect(wrapper.find('ul').childAt(0).text()).to.equal('Name: ' + mockData.get('name'));
    expect(wrapper.find('ul').childAt(1).text()).to.equal('Phone: ' + mockData.get('phone'));
    expect(wrapper.find('ul').childAt(2).text()).to.equal('Email: ' + mockData.get('email'));
    expect(wrapper.find('ul').childAt(3).text()).to.equal('Website: ' + mockData.get('website'));
  });
});
