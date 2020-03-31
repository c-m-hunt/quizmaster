import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

let store: Store;
const middleware: Array<any> = [thunk];

middleware.push(logger);

store = createStore(reducers, applyMiddleware(...middleware));
export default store;
