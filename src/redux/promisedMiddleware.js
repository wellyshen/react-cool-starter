export default (...args) => ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  const { promise, events, ...rest } = action;
  if (!promise) {
    return next(action);
  }
  const [REQUEST, SUCCESS, FAILURE] = events;
  next({ ...rest, type: REQUEST });
  return promise(...args).then(
      value => next({ ...rest, ...value, type: SUCCESS }),
      err => next({ ...rest, err, type: FAILURE }),
    ).catch((err) => {
      next({ ...rest, err, type: FAILURE });
    });
};
