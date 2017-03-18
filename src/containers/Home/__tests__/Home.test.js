import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { storeFake } from '../../../utils/helpers';
import Home from '../index';

describe('<Home />', () => {
  const tree = store => renderer.create(
    <Provider store={store}>
      <StaticRouter location={''} context={{}}>
        <Home />
      </StaticRouter>
    </Provider>,
  ).toJSON();

  test('calls data fetch action', () => {

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
