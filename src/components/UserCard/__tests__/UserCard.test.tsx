import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import UserCard from '../index';

describe('<UserCard />', () => {
  it('renders', () => {
    const mockData = {
      name: 'Welly',
      phone: '007',
      email: 'test@gmail.com',
      website: 'www.test.com',
    };
    const tree = render(
      <MemoryRouter>
        <UserCard info={mockData} />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
