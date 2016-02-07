// TODO: experiment with redux-simple-router
// import { routeReducer as router } from 'redux-simple-router';
import { combineReducers } from 'redux';
import { reducers } from 'redux/modules/todos';

export default combineReducers({
  filter: reducers.filter,
  mode: reducers.mode,
  todos: reducers.todos
});
