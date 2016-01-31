import React, { PropTypes } from 'react';
import Todo from 'components/Todo/Todo';
import classes from './TodoList.scss';

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onMoveTodo: PropTypes.func
  };

  handleDragStart (e) {
    this.dragged = e.currentTarget;
  }

  handleDragOver (e) {
    if (!this.over) this.over = e.currentTarget;
    if (this.over === e.currentTarget) return;
    e.currentTarget.classList.add(classes['drag-over']);
    this.over.classList.remove(classes['drag-over']);
    this.over = e.currentTarget;
  }

  handleDragEnd (e) {
    e.preventDefault();
    this.over.classList.remove(classes['drag-over']);
    var from = this.dragged.dataset.index;
    var to = this.over.dataset.index;
    this.props.onMoveTodo(from, to);
  }

  render () {
    const {
      todos,
      onToggleTodo,
      onRemoveTodo
    } = this.props;

    return (
      <ul className={classes['todo-list']}>
        { todos.map((todo, index) => (
          <Todo index={index}
            key={todo.id}
            {...todo}
            onToggleTodo={() => onToggleTodo(todo.id)}
            onRemoveTodo={() => onRemoveTodo(todo.id)}
            onDragStart={this.handleDragStart.bind(this)}
            onDragEnd={this.handleDragEnd.bind(this)}
            onDragOver={this.handleDragOver.bind(this)}
          />
        ))}
      </ul>
    );
  }
};

export default TodoList;
