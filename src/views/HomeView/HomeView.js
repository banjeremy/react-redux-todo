import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  actions as todoActions,
  constants as todoConstants
} from 'redux/modules/todos';
import ActionBar from 'components/ActionBar/ActionBar';
import AddTodo from 'components/AddTodo/AddTodo';
import Modal from 'components/Modal/Modal';
import TodoList from 'components/TodoList/TodoList';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import ToggleBar from 'components/ToggleBar/ToggleBar';
import DesktopActionBar from 'components/DesktopActionBar/DesktopActionBar';
import MediaQuery from 'react-responsive';
import classes from './HomeView.scss';

export class HomeView extends React.Component {
  render () {
    const {
      dispatch,
      todos,
      filter,
      progress
    } = this.props;

    return (
      <div className={classes['home-view'] + ' view'}>
        <div className={classes.wrapper}>
          <MediaQuery maxWidth={800}>
            <div className={classes['toggle-bar-container']}>
              <ToggleBar currentFilter={filter}
                onToggleFilter={filter => dispatch(todoActions.toggleListFilter(filter))}
              />
            </div>
            <div className={classes['add-todo-container']}>
              <AddTodo onAddTodo={text => {
                dispatch(todoActions.addTodo(text));
                dispatch(todoActions.saveTodos());
              }}/>
            </div>
          </MediaQuery>

          <div className={classes['progress-bar-container']}>
            <ProgressBar progress={progress} />
          </div>
          <MediaQuery minWidth={801}>
            <DesktopActionBar currentFilter={filter}
              onToggleFilter={filter => dispatch(todoActions.toggleListFilter(filter))}
              onAddTodo={text => { dispatch(todoActions.addTodo(text)); dispatch(todoActions.saveTodos()); }}
              handleClear={ () => {
                dispatch(todoActions.toggleIsClearing());
              }} />
          </MediaQuery>
          <div className={classes['todo-list-container']}>
            <TodoList todos={todos.items}
              onToggleTodo={id => {
                dispatch(todoActions.toggleTodo(id));
                dispatch(todoActions.saveTodos());
              }}
              onRemoveTodo={id => {
                dispatch(todoActions.removeTodo(id));
                dispatch(todoActions.saveTodos());
              }}
              onMoveTodo={(from, to) => {
                dispatch(todoActions.moveTodo(from, to));
                dispatch(todoActions.saveTodos());
              }}
            />
          </div>
          <MediaQuery maxWidth={800}>
            <footer className={classes['footer']}>
              <ActionBar handleClear={ () => {
                dispatch(todoActions.toggleIsClearing());
              }}/>
            </footer>
          </MediaQuery>

          <Modal isActive={todos.isClearing}
              handleAccept={() => dispatch(todoActions.clearTodos()) }
              handleReject={() => dispatch(todoActions.toggleIsClearing()) }
            />
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  filter: PropTypes.string.isRequired,
  todos: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    isClearing: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired
  }).isRequired,
  progress: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const selectProgress = items => {
  if (!items.length) return 0;

  let done = items.filter((t) => t.completed);
  return (done.length / items.length) * 100;
};

const selectTodos = (items, filter) => {
  switch (filter) {
    case todoConstants.LIST_FILTERS.SHOW_COMPLETE:
      return items.filter(t => t.completed);
    case todoConstants.LIST_FILTERS.SHOW_INCOMPLETE:
      return items.filter(t => !t.completed);
    case todoConstants.LIST_FILTERS.SHOW_ALL:
      return items;
  };
};

const mapStateToProps = state => {
  return {
    filter: state.filter,
    todos: {
      ...state.todos,
      items: selectTodos(state.todos.items, state.filter)
    },
    progress: selectProgress(state.todos.items)
  };
};

export default connect(mapStateToProps)(HomeView);
