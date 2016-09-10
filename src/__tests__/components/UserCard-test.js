/* eslint prefer-template:0 import/no-extraneous-dependencies:0 */

import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import UserCard from '../../components/UserCard';

describe('<UserCard />', () => {
  it('renders user\'s info', () => {
    const mockData = fromJS({
      name: 'Welly',
      phone: '007',
      email: 'test@gmail.com',
      website: 'www.test.com',
    });
    const wrapper = shallow(<UserCard anUser={mockData} />);

    expect(wrapper.find('ul').childAt(0).text()).to.equal('Name: ' + mockData.get('name'));
    expect(wrapper.find('ul').childAt(1).text()).to.equal('Phone: ' + mockData.get('phone'));
    expect(wrapper.find('ul').childAt(2).text()).to.equal('Email: ' + mockData.get('email'));
    expect(wrapper.find('ul').childAt(3).text()).to.equal('Website: ' + mockData.get('website'));
  });
});
