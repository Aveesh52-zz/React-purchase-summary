// Import createStore and applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
// Import thunk
import thunk from 'redux-thunk';
// Import root reducer
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
