import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import axios from 'axios';
import * as action from '../action';

const mockStore = configureMockStore([thunk]);

describe('action:Home', () => {
  let sandbox;
  const response = [{ id: '1', name: 'Welly' }];
  const errorMessage = 'Oops! Something went wrong.';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('creates USERS_REQUESTING when success to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.resolve({ status: 200, data: response }));

    const expectedActions = [
      { type: action.USERS_REQUESTING },
      { type: action.USERS_SUCCESS, data: response },
    ];
    const store = mockStore({ list: null });

    store.dispatch(action.fetchData(axios))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });

  it('creates USERS_FAILURE when fail to fetch data', (done) => {
    sandbox.stub(axios, 'get')
      .returns(Promise.reject(errorMessage));

    const expectedActions = [
      { type: action.USERS_REQUESTING },
      { type: action.USERS_FAILURE, err: errorMessage },
    ];
    const store = mockStore({ err: null });

    store.dispatch(action.fetchData(axios))
      .then(() => { expect(store.getActions()).to.deep.equal(expectedActions); })
      .then(done)
      .catch(done);
  });
});
