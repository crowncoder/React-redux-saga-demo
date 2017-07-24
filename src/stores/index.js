const redux = require('redux');
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware } from 'redux'
import rootSaga from '../saga'
const sagaMiddleware = createSagaMiddleware()
export default function() {
  const store = redux.createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = reducers;
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
