import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import { Home } from '../index';

describe('<Home />', () => {
  const tree = (props, actions) => renderer.create(
    <StaticRouter context={{}}>
      <Home {...props} {...actions} />
    </StaticRouter>,
  ).toJSON();

  test('should call fetchUsersIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      home: {},
    };
    const actions = {
      fetchUsersIfNeeded: mockAction,
    };

    mount(
      <StaticRouter context={{}}>
        <Home {...props} {...actions} />
      </StaticRouter>,
    );

    expect(mockAction).toHaveBeenCalled();
  });

  test('renders the loading status if data invalid', () => {
    const props = {
      home: { readyStatus: 'USERS_INVALID' },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the loading status if requesting data', () => {
    const props = {
      home: { readyStatus: 'USERS_REQUESTING' },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders an error if loading failed', () => {
    const props = {
      home: { readyStatus: 'USERS_FAILURE' },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the <UserList /> if loading was successful', () => {
    const props = {
      home: {
        readyStatus: 'USERS_SUCCESS',
        list: [{ id: '1', name: 'Welly' }],
      },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
