import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo
} from 'redux/actions';
import AddTodo from 'components/AddTodo/AddTodo';
import TodoList from 'components/TodoList/TodoList';
import ProgressBar from 'components/ProgressBar/ProgressBar';

class TodoApp extends React.Component {
  render () {
    const {
      dispatch,
      todos,
      progress
    } = this.props;
    return (
      <div>
        <ProgressBar progress={progress} />
        <TodoList todos={todos}
          onToggleTodo={id => dispatch(toggleTodo(id))}
        />
        <AddTodo onAddTodo={text => dispatch(addTodo(text)) }/>
      </div>
    );
  }
};

TodoApp.propTypes = {
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

export default connect(select)(TodoApp);
