import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './loginReducer.js'
/* Populated by react-webpack-redux:reducer */
const reducers = {
  routing: routerReducer,
  login:loginReducer
};
export default combineReducers(reducers);
