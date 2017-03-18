import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

describe('<App />', () => {
  test('renders', () => {
    const routes = [{
      path: '/',
      exact: true,
      component: () => <div><p>Hi, it rocks!</p></div>,
    }];
    const tree = renderer.create(<App routes={routes} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
