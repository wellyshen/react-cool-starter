import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import ErrorDisplay from '../index';

describe('<ErrorDisplay />', () => {
  it('renders', () => {
    const mockData = { message: 'Error!' };
    const tree = renderer
      .create(
        <MemoryRouter>
          <ErrorDisplay error={mockData} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
