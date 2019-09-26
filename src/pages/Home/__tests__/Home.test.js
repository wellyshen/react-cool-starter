import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { Home } from '../Home';

describe('<Home />', () => {
  const tree = (props, actions) =>
    renderer
      .create(
        <MemoryRouter>
          <Home {...props} {...actions} />
        </MemoryRouter>
      )
      .toJSON();

  it('should call fetchUsersIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      home: {}
    };
    const actions = {
      fetchUsersIfNeeded: mockAction
    };

    mount(
      <MemoryRouter>
        <Home {...props} {...actions} />
      </MemoryRouter>
    );

    expect(mockAction).toHaveBeenCalled();
  });

  it('renders the loading status if data invalid', () => {
    const props = { home: { readyStatus: 'invalid' } };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the loading status if requesting data', () => {
    const props = { home: { readyStatus: 'request' } };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders an error if loading failed', () => {
    const props = { home: { readyStatus: 'failure' } };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the <UserList /> if loading was successful', () => {
    const props = {
      home: {
        readyStatus: 'success',
        list: [{ id: '1', name: 'Welly' }]
      }
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
