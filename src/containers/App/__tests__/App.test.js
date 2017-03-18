import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import App from '../index';

describe('<App />', () => {
  test('renders', () => {
    const routes = [{
      path: '/',
      exact: true,
      component: () => <div><p>Hi, it rocks!</p></div>,
    }];
    const tree = renderer.create(
      <StaticRouter location={''} context={{}}>
        <App routes={routes} />
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
