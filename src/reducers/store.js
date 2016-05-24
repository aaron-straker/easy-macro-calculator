import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import macrosReducer from './macrosReducer';
import userReducer from './userReducer';

const store = createStore(combineReducers({
  user: userReducer,
  macros: macrosReducer
}), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;
