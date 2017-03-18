import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { storeFake } from '../../../utils/helpers';
import ReduxHome, { Home } from '../index';

describe('<Home />', () => {
  const tree = store => renderer.create(
    <Provider store={store}>
      <StaticRouter location={''} context={{}}>
        <ReduxHome />
      </StaticRouter>
    </Provider>,
  ).toJSON();

  test('should call fetchUsersIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();

    mount(
      <StaticRouter location={''} context={{}}>
        <Home home={{}} fetchUsersIfNeeded={mockAction} />
      </StaticRouter>,
    );

    expect(mockAction).toHaveBeenCalled();
  });

  test('renders the loading status if data invalid', () => {
    const store = storeFake({
      home: { readyStatus: 'USERS_INVALID' },
    });

    expect(tree(store)).toMatchSnapshot();
  });

  test('renders the loading status if loading data', () => {
    const store = storeFake({
      home: { readyStatus: 'USERS_REQUESTING' },
    });

    expect(tree(store)).toMatchSnapshot();
  });

  test('renders an error if loading failed', () => {
    const store = storeFake({
      home: { readyStatus: 'USERS_FAILURE' },
    });

    expect(tree(store)).toMatchSnapshot();
  });

  test('renders the <UserList /> if loading was successful', () => {
    const store = storeFake({
      home: {
        readyStatus: 'USERS_SUCCESS',
        list: [{ id: '1', name: 'Welly' }],
      },
    });

    expect(tree(store)).toMatchSnapshot();
  });
});
