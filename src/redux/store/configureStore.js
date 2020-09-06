import {createStore, applyMiddleware, compose} from 'redux';

import sagas from '../saga/RootSaga';
import rootReducer from '../reducers/RootReducers';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const enhancers =
  process.env.NODE_ENV !== 'production' && window.devToolsExtension
    ? [window.devToolsExtension()]
    : [];

export default configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = compose(
    applyMiddleware(sagaMiddleware, logger),
    ...enhancers,
  )(createStore)(rootReducer);
  sagaMiddleware.run(sagas);

  return store;
};
