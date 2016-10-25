import { fromJS } from 'immutable';

// Create enhanced history object for router
/* istanbul ignore next */
function createSelectLocationState(reducerName) {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get(reducerName); // or state.routing

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
}

module.exports = {
  createSelectLocationState,
};
