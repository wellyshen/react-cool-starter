/* @flow */

// The fake store creator for testing Components
// eslint-disable-next-line import/prefer-default-export
export function storeFake(state: Object): Object {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({ ...state }),
  };
}
