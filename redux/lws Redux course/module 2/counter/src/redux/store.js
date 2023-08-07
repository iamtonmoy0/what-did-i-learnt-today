import { createStore ,applyMiddleware} from 'redux'
import rootReducer from './RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
// add middleware
import logger from 'redux-logger'
const store = createStore(
	rootReducer,composeWithDevTools(applyMiddleware(logger))
	);

export default store;