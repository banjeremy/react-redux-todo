// import { createAction } from 'redux-actions';

/*
 * action types
 */

export const SET_LIST_FILTER = 'SET_LIST_FILTER';
export const SET_LIST_MODE = 'SET_LIST_MODE';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const MOVE_TODO = 'MOVE_TODO';

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

export const setListFilter = (filter) => {
  return {
    type: SET_LIST_FILTER,
    filter
  };
};

export const setListMode = (mode) => {
  return {
    type: SET_LIST_MODE,
    mode
  };
};

export const clearTodos = () => {
  return {
    type: CLEAR_TODOS
  };
};

export const moveTodo = (
  currentIndex,
  newIndex
) => {
  return {
    type: MOVE_TODO,
    currentIndex,
    newIndex
  };
};

let nextTodoId = 0;
export const addTodo = (label) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    label
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
