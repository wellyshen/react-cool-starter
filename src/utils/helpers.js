// The fake store creator for testing Components
export function storeFake(state) {  // eslint-disable-line import/prefer-default-export
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({ ...state }),
  };
}
