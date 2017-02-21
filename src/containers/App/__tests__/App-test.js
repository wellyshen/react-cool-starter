import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';
import config from '../../../config';

describe('<App />', () => {
  it('renders a logo', () => {
    const wrapper = shallow(<App />);
    const image = wrapper.find('img');

    expect(image).to.have.length(1);
    expect(image.prop('src')).to.equal(require('../assets/logo.svg'));
  });

  it('renders a title', () => {
    const wrapper = shallow(<App />);
    const title = wrapper.find('h1');

    expect(title).to.have.length(1);
    expect(title.text()).to.equal(config.app.title);
  });

  it('renders children correctly', () => {
    const children = (<div className="children">Test</div>);
    const wrapper = shallow(<App>{children}</App>);

    expect(wrapper.contains(children)).to.be.true;  // eslint-disable-line no-unused-expressions
  });
});
