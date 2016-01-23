import { combineReducers } from 'redux';
import {
  LIST_FILTERS,
  LIST_MODES,
  SET_LIST_FILTER,
  SET_LIST_MODE,
  CLEAR_TODOS,
  MOVE_TODO,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from './actions';

/*
var state = {
  filter: 'complete',
  mode: 'insert',
  todos: [{label, completed, id}]
}
*/

export const filter = (
  state = LIST_FILTERS.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case SET_LIST_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const mode = (
  state = LIST_MODES.INSERT,
  action
) => {
  switch (action.type) {
    case SET_LIST_MODE:
      return action.mode;
    default:
      return state;
  }
};

export const todo = (
  state,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        label: action.label,
        completed: false
      };
    case TOGGLE_TODO:
      return {
        ...state,
        completed: true
      };
    default:
      return state;
  }
};

export const todos = (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    default:
      return state;
  }
};

export const todoApp = combineReducers({
  filter,
  mode,
  todos
});
