import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import routes from '../../routes';
import App from '../index';

describe('<App />', () => {
  test('renders', () => {
    const fakeStore = {
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({ home: () => {} })
    };

    const tree = renderer
      .create(
        <Provider store={fakeStore}>
          <StaticRouter context={{}}>
            <App route={routes[0]} />
          </StaticRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
