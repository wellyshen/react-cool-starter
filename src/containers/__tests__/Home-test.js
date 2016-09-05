import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Home } from '../Home';

describe('<Home />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Home.prototype, 'componentDidMount');
    mount(<Home />);

    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
