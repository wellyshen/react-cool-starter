import reducer from '../reducer';
import {
  DATA_INVALID,
  DATA_REQUESTING,
  DATA_FAILURE,
  DATA_SUCCESS,
} from '../action';

describe('reducer:Home', () => {
  it('should handle the initial state', () => {
    expect(
      reducer(undefined, {}).toJS()
    ).to.deep.equal({
      readyState: DATA_INVALID, list: null,
    });
  });

  it('should handle DATA_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: DATA_REQUESTING,
      }
    ).toJS()).to.deep.equal({
      readyState: DATA_REQUESTING, list: null,
    });
  });

  it('should handle DATA_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: DATA_FAILURE,
        err: 'Oops! Something went wrong.',
      }).toJS()
    ).to.deep.equal({
      readyState: DATA_FAILURE,
      list: null,
      err: 'Oops! Something went wrong.',
    });
  });

  it('should handle DATA_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: DATA_SUCCESS,
        data: [{ id: '1', name: 'Welly' }],
      }).toJS()
    ).to.deep.equal({
      readyState: DATA_SUCCESS,
      list: [{ id: '1', name: 'Welly' }],
    });
  });
});
