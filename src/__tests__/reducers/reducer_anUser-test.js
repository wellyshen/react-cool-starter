import reducer from '../../reducers/reducer_anUser';
import {
  AN_USER_FETCHING,
  AN_USER_FETCH_FAILED,
  AN_USER_FETCHED,
} from '../../actions/fetchAnUser';

describe('reducer_anUser', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}).toJS()).to.deep.equal({});
  });

  it('should handle AN_USER_FETCHING', () => {
    expect(
      reducer(undefined, { type: AN_USER_FETCHING, userId: '1' }
    ).toJS()).to.deep.equal({ 1: { readyState: AN_USER_FETCHING } });
  });

  it('should handle AN_USER_FETCH_FAILED', () => {
    expect(
      reducer(undefined, {
        type: AN_USER_FETCH_FAILED,
        userId: '1',
        err: 'Oops! Something went wrong.',
      }
    ).toJS()).to.deep.equal({
      1: {
        readyState: AN_USER_FETCH_FAILED,
        err: 'Oops! Something went wrong.',
      },
    });
  });

  it('should handle AN_USER_FETCHED', () => {
    expect(
      reducer(undefined, {
        type: AN_USER_FETCHED,
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
        readyState: AN_USER_FETCHED,
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
