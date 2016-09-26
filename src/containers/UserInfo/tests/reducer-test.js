import reducer from '../reducer';
import {
  DATA_REQUESTING,
  DATA_FAILED,
  DATA_SUCCESS,
} from '../action';

describe('reducer:userInfo', () => {
  it('should handle the initial state', () => {
    expect(reducer(undefined, {}).toJS()).to.deep.equal({});
  });

  it('should handle DATA_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: DATA_REQUESTING,
        userId: '1',
      }
    ).toJS()).to.deep.equal({ 1: { readyState: DATA_REQUESTING } });
  });

  it('should handle DATA_FAILED', () => {
    expect(
      reducer(undefined, {
        type: DATA_FAILED,
        userId: '1',
        err: 'Oops! Something went wrong.',
      }
    ).toJS()).to.deep.equal({
      1: {
        readyState: DATA_FAILED,
        err: 'Oops! Something went wrong.',
      },
    });
  });

  it('should handle DATA_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: DATA_SUCCESS,
        userId: '1',
        data: {
          name: 'Welly',
          phone: '007',
          email: 'test@gmail.com',
          website: 'www.test.com',
        },
      }).toJS()
    ).to.deep.equal({
      1: {
        readyState: DATA_SUCCESS,
        info: {
          name: 'Welly',
          phone: '007',
          email: 'test@gmail.com',
          website: 'www.test.com',
        },
      },
    });
  });
});
