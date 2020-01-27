import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //more scalable because you can add to the array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;