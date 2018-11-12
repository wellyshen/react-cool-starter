import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Loading from '../index';

describe('<Loading />', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Loading pastDelay error={false} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
