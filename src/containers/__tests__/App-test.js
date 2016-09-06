import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet';
import config from '../../config';
import App from '../App';

describe('<App />', () => {
  it('contains a <Helmet />', () => {
    const wrapper = shallow(<App />);
    const helmet = wrapper.find(Helmet);

    expect(helmet).to.have.length(1);
    expect(helmet.props().htmlAttributes).to.equal(config.app.htmlAttributes);
    expect(helmet.props().title).to.equal(config.app.title);
    expect(helmet.props().titleTemplate).to.equal(config.app.titleTemplate);
    expect(helmet.props().meta).to.equal(config.app.meta);
  });

  it('renders a logo', () => {
    const wrapper = shallow(<App />);
    const image = wrapper.find('img');

    expect(image).to.have.length(1);
    expect(image.prop('src')).to.equal(require('../App/logo.svg'));
  });

  it('renders a title', () => {
    const wrapper = shallow(<App />);
    const title = wrapper.find('h1');

    expect(title).to.have.length(1);
    expect(title.text()).to.equal(config.app.title);
  });

  it('renders children correctly', () => {
    const children = (<div className="children">Test</div>);
    const wrapper = shallow(
      <App>
        {children}
      </App>
    );

    expect(wrapper.contains(children)).to.be.true;  // eslint-disable-line no-unused-expressions
  });
});
