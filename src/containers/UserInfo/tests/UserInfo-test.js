import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { spy } from 'sinon';  // eslint-disable-line import/no-extraneous-dependencies
import storeFake from '../../../utils/storeFake';
import UserInfo from '../index';
import UserCard from '../../../components/UserCard';

describe('<UserInfo />', () => {
  let wrapper;
  const state = {
    loading: 'Loading...',
    error: 'Oops, Failed to load info!',
  };

  beforeEach(() => {
    wrapper = store => mount(
      <Provider store={store}>
        <UserInfo params={{ id: '1' }} />
      </Provider>
    );
  });

  it('calls componentDidMount() lifecycle method to invoke data fetching', () => {
    const componentDidMountSpy = spy(UserInfo.prototype, 'componentDidMount');
    const store = storeFake({
      userInfo: {},
    });

    wrapper(store);

    // eslint-disable-next-line no-unused-expressions
    expect(UserInfo.prototype.componentDidMount.calledOnce).to.equal(true);

    componentDidMountSpy.restore();
  });

  it('renders the loading status if the data of an user invalid', () => {
    const store = storeFake({
      userInfo: {},
    });

    expect(wrapper(store).find('p').text()).to.equal(state.loading);
  });

  it('renders the loading status if loading data', () => {
    const store = storeFake({
      userInfo: {
        1: { readyState: 'DATA_REQUESTING' },
      },
    });

    expect(wrapper(store).find('p').text()).to.equal(state.loading);
  });

  it('renders an error if loading failed', () => {
    const store = storeFake({
      userInfo: {
        1: { readyState: 'DATA_FAILURE' },
      },
    });

    expect(wrapper(store).find('p').text()).to.equal(state.error);
  });

  it('renders the <UserCard /> if loading was successful', () => {
    const store = storeFake({
      userInfo: {
        1: {
          readyState: 'DATA_SUCCESS',
          info: {
            name: 'Welly',
            phone: '007',
            email: 'test@gmail.com',
            website: 'www.test.com',
          },
        },
      },
    });
    const mockData = store.getState().get('userInfo').get('1').get('info');

    // eslint-disable-next-line no-unused-expressions
    expect(wrapper(store).contains(<UserCard info={mockData} />)).to.be.true;
  });
});
