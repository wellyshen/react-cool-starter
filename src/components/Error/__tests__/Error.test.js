import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import Error from '../index';

describe('<Error />', () => {
  test('renders', () => {
    const mockData = { message: "Hi I'm error" };
    const tree = renderer
      .create(
        <StaticRouter context={{}}>
          <Error error={mockData} />
        </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
