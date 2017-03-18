import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import config from '../../../config';

describe('<App />', () => {
  const routes = [{
    path: '/',
    exact: true,
    component: () => (<div><p>Mock route</p></div>),
  }];
  const wrapper = shallow(<App routes={routes} />);

  test('renders a logo', () => {
    const image = wrapper.find('img');

    expect(image).toHaveLength(1);
    expect(image.prop('src')).toEqual(require('../assets/logo.svg'));
  });

  test('renders a title', () => {
    const title = wrapper.find('h1');

    expect(title).toHaveLength(1);
    expect(title.text()).toEqual(config.app.title);
  });
});
