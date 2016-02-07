/*
 * This file roughly follows the Ducks module pattern
 * (https://github.com/erikras/ducks-modular-redux)
 */

/*
 * constants
 */

const TOGGLE_LIST_FILTER = 'todo-app/todos/TOGGLE_LIST_FILTER';
const SET_LIST_MODE = 'todo-app/todos/SET_LIST_MODE';
const CLEAR_TODOS = 'todo-app/todos/CLEAR_TODOS';
const MOVE_TODO = 'todo-app/todos/MOVE_TODO';

const ADD_TODO = 'todo-app/todos/ADD_TODO';
const REMOVE_TODO = 'todo-app/todos/REMOVE_TODO';
const TOGGLE_TODO = 'todo-app/todos/TOGGLE_TODO';

const LIST_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETED',
  SHOW_INCOMPLETE: 'SHOW_INCOMPLETE'
};

const LIST_MODES = {
  INSERT: 'INSERT',
  SORT: 'SORT'
};

export const constants = {
  LIST_FILTERS,
  LIST_MODES
};

/*
 * actions
 */

export const toggleListFilter = (filter) => {
  return {
    type: TOGGLE_LIST_FILTER,
    filter
  };
};

const setListMode = (mode) => {
  return {
    type: SET_LIST_MODE,
    mode
  };
};

const clearTodos = () => {
  return {
    type: CLEAR_TODOS
  };
};

const moveTodo = (
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
const addTodo = (label) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    label
  };
};

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const actions = {
  toggleListFilter,
  setListMode,
  clearTodos,
  moveTodo,
  addTodo,
  removeTodo,
  toggleTodo
};

/*
 * reducers
 */

const filter = (
  state = LIST_FILTERS.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case TOGGLE_LIST_FILTER:
      if (state === action.filter) {
        // toggle filter off
        return LIST_FILTERS.SHOW_ALL;
      }
      return action.filter;
    default:
      return state;
  }
};

const mode = (
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

const todo = (
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
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    case MOVE_TODO:
      let todosCopy = state.slice(0);

      todosCopy.splice(
        action.newIndex,
        0,
        todosCopy.splice(action.currentIndex, 1)[0]
      );

      return todosCopy;
    case REMOVE_TODO:
      return state.filter((t) => t.id !== action.id);
    case CLEAR_TODOS:
      return [];
    default:
      return state;
  }
};

export const reducers = {
  filter,
  mode,
  todo,
  todos
};
