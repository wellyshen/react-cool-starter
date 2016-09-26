import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { spy } from 'sinon';  // eslint-disable-line import/no-extraneous-dependencies
import storeFake from '../../../utils/storeFake';
import Home from '../index';
import UserList from '../../../components/UserList';

describe('<Home />', () => {
  let wrapper;
  const state = {
    loading: 'Loading...',
    error: 'Oops, Failed to fetch list!',
  };

  beforeEach(() => {
    wrapper = store => mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('calls componentDidMount() lifecycle method to invoke fetching data', () => {
    const componentDidMountSpy = spy(Home.prototype, 'componentDidMount');
    const store = storeFake({
      home: { readyState: 'DATA_INVALID' },
    });

    wrapper(store);

    // eslint-disable-next-line no-unused-expressions
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);

    componentDidMountSpy.restore();
  });

  it('renders the loading status if data invalid', () => {
    const store = storeFake({
      home: { readyState: 'DATA_INVALID' },
    });

    expect(wrapper(store).find('p').text()).to.equal(state.loading);
  });

  it('renders the loading status if loading data', () => {
    const store = storeFake({
      home: { readyState: 'DATA_REQUESTING' },
    });

    expect(wrapper(store).find('p').text()).to.equal(state.loading);
  });

  it('renders an error if loading failed', () => {
    const store = storeFake({
      home: { readyState: 'DATA_FAILED' },
    });

    expect(wrapper(store).find('p').text()).to.equal(state.error);
  });

  it('renders the <UserList /> if loading was successful', () => {
    const store = storeFake({
      home: {
        readyState: 'DATA_SUCCESS',
        list: [{ id: '1', name: 'Welly' }],
      },
    });
    const mockData = store.getState().get('home').get('list');

    // eslint-disable-next-line no-unused-expressions
    expect(wrapper(store).contains(<UserList list={mockData} />)).to.be.true;
  });
});
