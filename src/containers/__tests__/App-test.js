import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import App from '../App';

describe('<App />', () => {
  it('should display a logo', () => {
    const wrapper = shallow(<App />);
    const image = wrapper.find('img');

    assert.equal(image.prop('src'), require('../App/logo.svg'));
  });
});
