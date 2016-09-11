import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { spy } from 'sinon';  // eslint-disable-line import/no-extraneous-dependencies
import storeFake from './storeFake';
import UserInfo from '../../containers/UserInfo';
import UserCard from '../../components/UserCard';

describe('<UserInfo />', () => {
  let wrapper;
  const state = {
    loading: 'Loading...',
    error: 'Oops, Failed to fetch the user!',
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
      anUser: {},
    });

    wrapper(store);

    // eslint-disable-next-line no-unused-expressions
    expect(UserInfo.prototype.componentDidMount.calledOnce).to.equal(true);

    componentDidMountSpy.restore();
  });

  it('renders the loading status if data invalid of an user id', () => {
    const store = storeFake({
      anUser: {},
    });

    expect(wrapper(store).find('p').text()).to.equal(state.loading);
  });

  it('renders the loading status if loading data', () => {
    const store = storeFake({
      anUser: {
        1: { readyState: 'AN_USER_FETCHING' },
      },
    });

    expect(wrapper(store).find('p').text()).to.equal(state.loading);
  });

  it('renders an error if loading failed', () => {
    const store = storeFake({
      anUser: {
        1: { readyState: 'AN_USER_FETCH_FAILED' },
      },
    });

    expect(wrapper(store).find('p').text()).to.equal(state.error);
  });

  it('renders the <UserCard /> if loading was successful', () => {
    const store = storeFake({
      anUser: {
        1: {
          readyState: 'AN_USER_FETCHED',
          info: {
            name: 'Welly',
            phone: '007',
            email: 'test@gmail.com',
            website: 'www.test.com',
          },
        },
      },
    });
    const mockData = store.getState().get('anUser').get('1').get('info');

    // eslint-disable-next-line no-unused-expressions
    expect(wrapper(store).contains(<UserCard anUser={mockData} />)).to.be.true;
  });
});
