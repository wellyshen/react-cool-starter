import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import { Link } from 'react-router';
import UserList from '../index';

describe('<UserList />', () => {
  it('renders the linkable list item', () => {
    const mockData = fromJS([{ id: '1', name: 'Welly' }]);
    const listItem = (
      <Link to={`UserInfo/${mockData.get(0).get('id')}`}>
        {mockData.get(0).get('name')}
      </Link>
    );
    const wrapper = shallow(<UserList list={mockData} />);

    expect(wrapper.contains(listItem)).to.be.true;  // eslint-disable-line no-unused-expressions
  });
});
