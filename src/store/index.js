import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/index'

const initialState = {};
const middleware  = [thunk];

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(combineReducers, initialState,  applyMiddleware(thunk));

export default store;
