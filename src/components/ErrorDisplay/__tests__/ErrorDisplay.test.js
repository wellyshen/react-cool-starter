import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import ErrorDisplay from '../index';

describe('<ErrorDisplay />', () => {
  test('renders', () => {
    const mockData = { message: 'Error!' };
    const tree = renderer
      .create(
        <StaticRouter context={{}}>
          <ErrorDisplay error={mockData} />
        </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
