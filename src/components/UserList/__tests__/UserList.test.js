import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import UserList from '../index';

describe('<UserList />', () => {
  it('renders', () => {
    const mockData = [{ id: '1', name: 'Welly' }];
    const tree = renderer
      .create(
        <MemoryRouter>
          <UserList list={mockData} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
