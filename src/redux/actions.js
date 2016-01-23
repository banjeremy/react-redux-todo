// import { createAction } from 'redux-actions';

/*
 * action types
 */

export const SET_LIST_FILTER = 'SET_LIST_FILTER';
export const SET_LIST_MODE = 'SET_LIST_MODE';
export const CLEAR_LIST = 'CLEAR_LIST';
export const MOVE_LIST_ITEM = 'MOVE_LIST_ITEM';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/*
 * other constants
 */

export const LIST_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETED',
  SHOW_INCOMPLETE: 'SHOW_INCOMPLETE'
};

export const LIST_MODES = {
  INSERT: 'INSERT',
  SORT: 'SORT'
};

/*
 * action creators
 */

export function setListFilter (filter) {
  return {
    type: SET_LIST_FILTER,
    filter
  };
};

export function setListMode (mode) {
  return {
    type: SET_LIST_MODE,
    mode
  };
};

export function clearList () {
  return {
    type: CLEAR_LIST
  };
};

export function moveListItem (id, position) {
  return {
    type: MOVE_LIST_ITEM,
    id,
    position
  };
};

let nextTodoId = 0;
export function addTodo (label) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    label
  };
}

export function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id
  };
};

export function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id
  };
};
