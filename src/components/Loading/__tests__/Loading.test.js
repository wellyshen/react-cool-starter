import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import Loading from '../index';

describe('<Loading />', () => {
  test('renders', () => {
    const tree = renderer
      .create(
        <StaticRouter context={{}}>
          <Loading />
        </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
