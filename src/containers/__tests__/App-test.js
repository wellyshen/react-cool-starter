import React from 'react';
import { shallow } from 'enzyme';
import config from '../../config';
import App from '../App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a logo', () => {
    const image = wrapper.find('img');

    expect(image).to.have.length(1);
    expect(image.prop('src')).to.equal(require('../App/logo.svg'));
  });

  it('renders a title', () => {
    const title = wrapper.find('h1');

    expect(title).to.have.length(1);
    expect(title.text()).to.equal(config.app.title);
  });

  it('renders the children content', () => {
    should.exist(wrapper.props('children'));
  });
});
