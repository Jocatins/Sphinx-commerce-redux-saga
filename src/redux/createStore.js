import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();
export const middleWare = [thunk, sagaMiddleWare, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWare));
sagaMiddleWare.run(rootSaga);
export default store;
