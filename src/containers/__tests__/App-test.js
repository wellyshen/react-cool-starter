import React from 'react';
import { shallow } from 'enzyme';
import Helmet from 'react-helmet';
import config from '../../config';
import App from '../App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should contains a <Helmet />', () => {
    const helmet = wrapper.find(Helmet);

    expect(helmet).to.have.length(1);
    expect(helmet.props().htmlAttributes).to.equal(config.app.htmlAttributes);
    expect(helmet.props().title).to.equal(config.app.title);
    expect(helmet.props().titleTemplate).to.equal(config.app.titleTemplate);
    expect(helmet.props().meta).to.equal(config.app.meta);
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
