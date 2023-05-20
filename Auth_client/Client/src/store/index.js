import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware];

  const store = createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

  return store;
}