import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { UserInfo } from '../UserInfo';

describe('<UserInfo />', () => {
  const tree = (props: object, actions: object) =>
    render(
      <MemoryRouter>
        {/*
         // @ts-ignore */}
        <UserInfo {...props} {...actions} />
      </MemoryRouter>
    ).container.firstChild;

  it('should call fetchUserIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      userInfo: {},
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: mockAction };

    tree(props, actions);

    expect(mockAction).toHaveBeenCalled();
  });

  it('renders the loading status if data invalid', () => {
    const props = {
      userInfo: {},
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the loading status if requesting data', () => {
    const props = {
      userInfo: { 1: { readyStatus: 'request' } },
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders an error if loading failed', () => {
    const props = {
      userInfo: { 1: { readyStatus: 'failure' } },
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the <UserCard /> if loading was successful', () => {
    const props = {
      userInfo: {
        1: {
          readyStatus: 'success',
          info: {
            name: 'Welly',
            phone: '007',
            email: 'test@gmail.com',
            website: 'www.test.com',
          },
        },
      },
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: (): void => null };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
