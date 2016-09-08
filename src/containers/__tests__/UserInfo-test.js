import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { spy } from 'sinon';  // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import UserInfo from '../UserInfo';
// import UserCard from '../../components/UserCard';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => fromJS({ ...state }),
});

describe('<UserInfo />', () => {
  let wrapper;

  const props = {
    params: { id: 1 },
  };

  beforeEach(() => {
    wrapper = store => mount(
      <Provider store={store}>
        <UserInfo {...props} />
      </Provider>
    );
  });

  it('calls componentDidMount() lifecycle method to invoke data fetching', () => {
    const componentDidMountSpy = spy(UserInfo.prototype, 'componentDidMount');
    const store = storeFake({
      anUser: {},
    });

    wrapper(store);

    // eslint-disable-next-line no-unused-expressions
    expect(UserInfo.prototype.componentDidMount.calledOnce).to.equal(true);

    componentDidMountSpy.restore();
  });
});
