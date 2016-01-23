// TODO: experiment with redux-simple-router
// import { routeReducer as router } from 'redux-simple-router';
import { combineReducers } from 'redux';
import {
  filter,
  mode,
  todos
} from './reducers';

export default combineReducers({
  filter,
  mode,
  todos
});
