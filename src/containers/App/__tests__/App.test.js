import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import App from '../index';

describe('<App />', () => {
  test('renders', () => {
    const tree = renderer.create(
      <Provider store={{}}>
        <StaticRouter location={''} context={{}}>
          <App />
        </StaticRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
