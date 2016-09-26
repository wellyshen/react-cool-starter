/* eslint new-cap:0 */

import { combineReducers } from 'redux-immutable';
import { Map, fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

// Merge route into the global application state (react-router-redux + immutable)
const routing = (state = routeInitialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload,
    });
  }

  return state;
};

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing,
    // Register the inital async reducers, otherwise you will get the warning of Redux
    home: (state = Map({})) => state,
    userInfo: (state = Map({})) => state,
    ...asyncReducers,
  });
}

/* eslint-disable */
// Using for injecting the async reducers
export const injectReducer = (store, key, reducer) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
/* eslint-enable */
