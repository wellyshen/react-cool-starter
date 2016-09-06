import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { Map } from 'immutable';
import Home from '../Home';

function setup() {
  return {
    fakeStore: {
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {},
    },
  };
}

describe('<Home />', () => {
  const { fakeStore } = setup();

  it('render the loading indicator when data is invalid', () => {
    const fakeData = Map({ // eslint-disable-line new-cap
      readyState: 'USERS_INVALID',
      list: null,
    });
    const wrapper = shallow(
      <Provider store={fakeStore}>
        <Home users={fakeData} />
      </Provider>
    );

    expect(wrapper.text().indexOf('Loading...')).to.equal(-1);
  });

  it('render the loading indicator when data is fetching', () => {
    const fakeData = Map({ // eslint-disable-line new-cap
      readyState: 'USERS_FETCHING',
      list: null,
    });
    const wrapper = shallow(
      <Provider store={fakeStore}>
        <Home users={fakeData} />
      </Provider>
    );

    expect(wrapper.text().indexOf('Loading...')).to.equal(-1);
  });
});
