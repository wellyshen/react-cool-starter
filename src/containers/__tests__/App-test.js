import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('should display a logo', () => {
    const wrapper = shallow(<App />);
    const image = wrapper.find('img');

    expect(image).to.have.length(1);
    assert.equal(image.prop('src'), require('../App/logo.svg'));
  });
});
