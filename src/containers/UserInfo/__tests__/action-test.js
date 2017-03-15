import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import axios from 'axios';
import * as action from '../action';

const mockStore = configureMockStore([thunk]);

describe('action:UserInfo', () => {
  let sandbox;
  const userId = '1';
  const response = {
    name: 'Welly',
    phone: '007',
    email: 'test@gmail.com',
    website: 'www.test.com',
  };
  const errorMessage = 'Oops! Something went wrong.';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('creates USER_SUCCESS when success to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.resolve({ status: 200, data: response }));

    const expectedActions = [
      { type: action.USER_REQUESTING, userId },
      { type: action.USER_SUCCESS, userId, data: response },
    ];
    const store = mockStore({ info: null });

    store.dispatch(action.fetchUser(userId, axios))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });

  it('creates USER_FAILURE when fail to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.reject(errorMessage));

    const expectedActions = [
      { type: action.USER_REQUESTING, userId },
      { type: action.USER_FAILURE, userId, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(action.fetchUser(userId, axios))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });
});
