import { createStore ,applyMiddleware} from 'redux'
import rootReducer from './RootReducer';
// TOTO:need to add applyMiddleware
const store = createStore(rootReducer,applyMiddleware(myLogger));

export default store;