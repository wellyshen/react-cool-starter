import axios from 'axios';
import config from '../config';

export const simpleActionMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  if (!action.types) {
    return next(action);
  }

  const headers = {};
  const { method, url } = action;

  next({
    ...action,
    type: `${action.types}_REQUESTING`
  });
  console.log(getState());
  if (!getState().server.requesting && __SERVER__) {
    dispatch({
      type: 'REQUESTING_SERVER',
      data: true
    });
  }
  return axios({
    baseURL: config.baseURL,
    method,
    url,
    headers
  })
    .then(res => {
      next({
        ...action,
        type: `${action.types}_SUCCESS`,
        data: res.data
      });
      if (getState().server.requesting && __SERVER__) {
        dispatch({
          type: 'REQUESTING_SERVER',
          data: false
        });
      }
      return Promise.resolve(res);
    })
    .catch(error => {
      next({
        ...action,
        type: `${action.types}_FAILURE`,
        data: error.message
      });
      if (getState().server.requesting && __SERVER__) {
        dispatch({
          type: 'REQUESTING_SERVER',
          data: false
        });
      }
      return Promise.reject(error);
    });
};

export const mi = () => {};
