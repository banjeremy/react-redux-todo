import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  removeTodo
} from 'redux/actions';
import AddTodo from 'components/AddTodo/AddTodo';
import TodoList from 'components/TodoList/TodoList';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import ToggleBar from 'components/ToggleBar/ToggleBar';
import classes from './HomeView.scss';

export class HomeView extends React.Component {
  render () {
    const {
      dispatch,
      todos,
      progress
    } = this.props;

    return (
      <div className={classes['home-view'] + ' view'}>
        <ToggleBar />
        <ProgressBar progress={progress} />
        <TodoList todos={todos}
          onToggleTodo={id => dispatch(toggleTodo(id))}
          onRemoveTodo={id => dispatch(removeTodo(id))}
        />
        <footer>
          <AddTodo onAddTodo={text => dispatch(addTodo(text)) }/>
        </footer>
      </div>
    );
  }
}

HomeView.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  progress: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const selectProgress = todos => {
  if (!todos.length) return 0;

  let done = todos.filter((t) => t.completed);
  return (done.length / todos.length) * 100;
};

const select = state => {
  return {
    ...state,
    progress: selectProgress(state.todos)
  };
};

export default connect(select)(HomeView);
