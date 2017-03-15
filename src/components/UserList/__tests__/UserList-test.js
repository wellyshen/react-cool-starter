import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import UserList from '../index';

describe('<UserList />', () => {
  it('renders the linkable list item', () => {
    const mockData = [{ id: '1', name: 'Welly' }];
    const listItem = (
      <Link to={`/UserInfo/${mockData[0].id}`}>
        {mockData[0].name}
      </Link>
    );
    const wrapper = shallow(<UserList list={mockData} />);

    expect(wrapper.contains(listItem)).to.be.true;  // eslint-disable-line no-unused-expressions
  });
});
