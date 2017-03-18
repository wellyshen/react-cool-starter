import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { shallow } from 'enzyme';

import App from '../index';
import config from '../../../config';

describe('<App />', () => {
  const routes = [{
    path: '/',
    exact: true,
    component: () => <div><p>Hi, it rocks!</p></div>,
  }];
  const wrapper = shallow(<App routes={routes} />);

  test('renders a logo', () => {
    const image = wrapper.find('img');

    expect(image).toHaveLength(1);
    expect(image.prop('src')).toBe(require('../assets/logo.svg'));
  });

  test('renders a title', () => {
    const title = wrapper.find('h1');

    expect(title).toHaveLength(1);
    expect(title.text()).toBe(config.app.title);
  });

  test('renders routes', () => {
    const RRSwitch = wrapper.find(Switch);
    const RRRoute = RRSwitch.find(Route);

    expect(RRSwitch).toHaveLength(1);
    expect(RRRoute).toHaveLength(1);
    expect(RRRoute.prop('path')).toBe(routes[0].path);
    expect(RRRoute.prop('exact')).toBe(routes[0].exact);
    // expect(RRRoute.prop('render')).toBe(() => {});
  });
});
