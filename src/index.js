import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// * thunk allows to use async code
import thunk from 'redux-thunk';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// * MiddleWare fn
const logger = store => {
  return next => {
    return action => {
      // console.log('[Middleware] prev state: ', store.getState());
      console.log('[Middleware] Dispatching action: ', action.type);
      const result = next(action);
      // console.log('[Middleware] next state: ', store.getState());
      return result;
    };
  };
};

// * applying Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // a list of middlewares can be applyed
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
