import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default (initialState) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      try {
        store.replaceReducer(require('./reducers').default);
      } catch (error) {
        console.error('error: ', error);
      }
    });
  }

  return store;
};
