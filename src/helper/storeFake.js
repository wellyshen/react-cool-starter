import { fromJS } from 'immutable';

export default state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => fromJS({ ...state }),
});
