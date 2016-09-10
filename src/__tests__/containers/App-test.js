import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import config from '../../config';
import App from '../../containers/App';

describe('<App />', () => {
  it('renders a logo', () => {
    const wrapper = shallow(<App />);
    const image = wrapper.find('img');

    expect(image).to.have.length(1);
    expect(image.prop('src')).to.equal(require('../../containers/App/logo.svg'));
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
