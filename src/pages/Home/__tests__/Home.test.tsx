import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Home } from '../Home';

describe('<Home />', () => {
  const tree = (props: object, actions: object) =>
    render(
      <MemoryRouter>
        {/*
         // @ts-ignore */}
        <Home {...props} {...actions} />
      </MemoryRouter>
    ).container.firstChild;

  it('should call fetchUsersIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const actions = { fetchUsersIfNeeded: mockAction };

    tree({}, actions);

    expect(mockAction).toHaveBeenCalled();
  });

  it('renders the loading status if data invalid', () => {
    const props = { readyStatus: 'invalid' };
    const actions = { fetchUsersIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the loading status if requesting data', () => {
    const props = { readyStatus: 'request' };
    const actions = { fetchUsersIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders an error if loading failed', () => {
    const props = { readyStatus: 'failure' };
    const actions = { fetchUsersIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the <UserList /> if loading was successful', () => {
    const props = {
      readyStatus: 'success',
      list: [{ id: '1', name: 'Welly' }],
    };
    const actions = { fetchUsersIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
