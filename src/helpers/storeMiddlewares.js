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
      return Promise.resolve(res);
    })
    .catch(error => {
      next({
        ...action,
        type: `${action.types}_FAILURE`,
        data: error.message
      });
      return Promise.reject(error);
    });
};

export const mi = () => {};
