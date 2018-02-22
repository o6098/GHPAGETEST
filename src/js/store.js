import { applyMiddleware, createStore} from 'redux';
import AllReducers from './reducers/index';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import ajaxMiddleware from 'redux-ajax';

const middleware = applyMiddleware(promise(), thunk, createLogger(), ajaxMiddleware);

const store = createStore(AllReducers, middleware);

export default store;
