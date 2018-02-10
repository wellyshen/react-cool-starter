import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import NotFound from '../NotFound';

describe('<NotFound />', () => {
  test('renders', () => {
    const tree = renderer
      .create(
        <StaticRouter context={{}}>
          <NotFound />
        </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
