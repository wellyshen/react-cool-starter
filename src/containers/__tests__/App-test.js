import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../App';

describe('<App />', () => {
  it('renders a logo image', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('img')).to.have.length(1);
  });
});
