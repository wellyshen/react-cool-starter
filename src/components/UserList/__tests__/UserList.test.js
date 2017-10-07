import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import UserList from '../index';

describe('<UserList />', () => {
  test('renders', () => {
    const mockData = [{ id: '1', name: 'Welly' }];
    const tree = renderer.create(
      <StaticRouter context={{}}>
        <UserList list={mockData} />
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
