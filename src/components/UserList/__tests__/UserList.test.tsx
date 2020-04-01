import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import UserList from '../index';

describe('<UserList />', () => {
  it('renders', () => {
    const mockData = [{ id: '1', name: 'Welly' }];
    const tree = render(
      <MemoryRouter>
        <UserList list={mockData} />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
