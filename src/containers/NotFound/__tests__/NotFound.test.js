import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from '../index';

describe('<NotFound />', () => {
  test('renders', () => {
    const tree = renderer.create(<NotFound />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
