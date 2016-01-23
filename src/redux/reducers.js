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
