import {actions, constants, reducers} from 'redux/modules/todos';

import rootReducer from 'redux/rootReducer';

describe('filter reducer', () => {
  it('returns an initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = constants.LIST_FILTERS.SHOW_ALL;

    expect(reducers.filter(stateBefore, action))
      .to.equal(stateAfter);
  });

  it('sets the list filter', () => {
    const stateBefore = constants.LIST_FILTERS.SHOW_ALL;
    const action = actions.toggleListFilter(constants.LIST_FILTERS.SHOW_INCOMPLETE);
    const stateAfter = constants.LIST_FILTERS.SHOW_INCOMPLETE;

    expect(reducers.filter(stateBefore, action))
      .to.equal(stateAfter);
  });

  it('toggles the list filter', () => {
    const stateBefore = constants.LIST_FILTERS.SHOW_COMPLETE;
    const action = actions.toggleListFilter(constants.LIST_FILTERS.SHOW_COMPLETE);
    const stateAfter = constants.LIST_FILTERS.SHOW_ALL;

    expect(reducers.filter(stateBefore, action))
      .to.equal(stateAfter);
  });
});

describe('mode reducer', () => {
  it('returns an initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = constants.LIST_MODES.INSERT;

    expect(reducers.mode(stateBefore, action))
      .to.equal(stateAfter);
  });

  it('sets the list mode', () => {
    const stateBefore = constants.LIST_MODES.INSERT;
    const action = actions.setListMode(constants.LIST_MODES.SORT);
    const stateAfter = constants.LIST_MODES.SORT;

    expect(reducers.mode(stateBefore, action))
      .to.equal(stateAfter);
  });
});

describe('root reducer', () => {
  it('returns an initial state', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = {
      filter: constants.LIST_FILTERS.SHOW_ALL,
      mode: constants.LIST_MODES.INSERT,
      todos: []
    };

    expect(
      rootReducer(
        stateBefore,
        action
      )).to.deep.equal(stateAfter);
  });
});

describe('todo reducer', () => {
  it('creates a todo', () => {
    const stateBefore = undefined;
    const action = actions.addTodo('go shopping');
    const stateAfter = {
      id: 0,
      label: 'go shopping',
      completed: false
    };

    expect(reducers.todo(stateBefore, action))
      .to.deep.equal(stateAfter);
  });

  it('toggles a todo', () => {
    const stateBefore = {
      label: 'go shopping',
      id: 0,
      completed: false
    };
    const action = actions.toggleTodo(0);
    const stateAfter = {
      label: 'go shopping',
      id: 0,
      completed: true
    };

    expect(reducers.todo(stateBefore, action))
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
    const action = actions.addTodo('go to work');
    const stateAfter = [{
      id: 0,
      label: 'go shopping',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }];

    expect(reducers.todos(stateBefore, action))
      .to.deep.equal(stateAfter);
  });

  it('toggles a todo', () => {
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
    const action = actions.toggleTodo(1);
    const stateAfter = [{
      id: 0,
      label: 'go shopping',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: true
    }, {
      id: 2,
      label: 'make a todo app',
      completed: false
    }];

    expect(reducers.todos(stateBefore, action))
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
    const action = actions.moveTodo(2, 0);
    const stateAfter = [{
      id: 2,
      label: 'make a todo app',
      completed: false
    }, {
      id: 0,
      label: 'go shopping',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }];

    expect(reducers.todos(stateBefore, action))
      .to.deep.equal(stateAfter);
  });

  it('removes a todo', () => {
    const stateBefore = [{
      id: 2,
      label: 'make a todo app',
      completed: false
    }, {
      id: 0,
      label: 'go shopping',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }];
    const action = actions.removeTodo(0);
    const stateAfter = [{
      id: 2,
      label: 'make a todo app',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }];

    expect(reducers.todos(stateBefore, action))
      .to.deep.equal(stateAfter);
  });

  it('clears the todos', () => {
    const stateBefore = [{
      id: 2,
      label: 'make a todo app',
      completed: false
    }, {
      id: 0,
      label: 'go shopping',
      completed: false
    }, {
      id: 1,
      label: 'go to work',
      completed: false
    }];
    const action = actions.clearTodos();
    const stateAfter = [];

    expect(reducers.todos(stateBefore, action))
      .to.deep.equal(stateAfter);
  });
});
