import {
  LIST_FILTERS,
  LIST_MODES,
  setListFilter,
  setListMode,
  clearTodos,
  moveTodo,
  addTodo,
  removeTodo,
  toggleTodo
} from 'redux/actions';

import {
  todoApp,
  todos,
  todo,
  mode,
  filter
} from 'redux/reducers';

describe('filter reducer', () => {
  it('returns an initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = LIST_FILTERS.SHOW_ALL;

    expect(filter(stateBefore, action))
      .to.equal(stateAfter);
  });

  it('sets the list filter', () => {
    const stateBefore = LIST_FILTERS.SHOW_ALL;
    const action = setListFilter(LIST_FILTERS.SHOW_INCOMPLETE);
    const stateAfter = LIST_FILTERS.SHOW_INCOMPLETE;

    expect(filter(stateBefore, action))
      .to.equal(stateAfter);
  });
});

describe('mode reducer', () => {
  it('returns an initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = LIST_MODES.INSERT;

    expect(mode(stateBefore, action))
      .to.equal(stateAfter);
  });

  it('sets the list mode', () => {
    const stateBefore = LIST_MODES.INSERT;
    const action = setListMode(LIST_MODES.SORT);
    const stateAfter = LIST_MODES.SORT;

    expect(mode(stateBefore, action))
      .to.equal(stateAfter);
  });
});

describe('todoApp reducer', () => {
  it('returns an initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = {
      filter: LIST_FILTERS.SHOW_ALL,
      mode: LIST_MODES.INSERT,
      todos: []
    };

    expect(
      todoApp(
        stateBefore,
        action
      )).to.deep.equal(stateAfter);
  });
});

describe('todo reducer', () => {
  it('creates a todo', () => {
    const stateBefore = undefined;
    const action = addTodo('go shopping');
    const stateAfter = {
      id: 0,
      label: 'go shopping',
      completed: false
    };

    expect(todo(stateBefore, action))
      .to.deep.equal(stateAfter);
  });

  it('toggles a todo', () => {
    const stateBefore = {
      label: 'go shopping',
      id: 0,
      completed: false
    };
    const action = toggleTodo(0);
    const stateAfter = {
      label: 'go shopping',
      id: 0,
      completed: true
    };

    expect(todo(stateBefore, action))
      .to.deep.equal(stateAfter);
  });
});

describe('todos reducer', () => {
  it('adds a todo', () => {
    const stateBefore = [{
      label: 'go shopping',
      id: 0,
      completed: false
    }];
    const action = addTodo('go to work');
    const stateAfter = [{
      id: 0,
      label: 'go shopping',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }];

    expect(todos(stateBefore, action))
      .to.deep.equal(stateAfter);
  });

  it('moves a todo', () => {
    const stateBefore = [{
      id: 0,
      label: 'go shopping',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }, {
      id: 2,
      label: 'make a todo app',
      completed: false
    }];
    const action = moveTodo(2, 0);
    const stateAfter = [{
      id: 2,
      label: 'make a todo app',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }, {
      id: 0,
      label: 'go shopping',
      completed: false
    }];

    expect(todos(stateBefore, action))
      .to.deep.equal(stateAfter);
  });

  it('removes a todo');
  it('clears the todos');
});
