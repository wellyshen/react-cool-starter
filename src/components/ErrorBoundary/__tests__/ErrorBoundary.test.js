import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import ErrorBoundary from '../index';

describe('<ErrorBoundary />', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ErrorBoundary />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
