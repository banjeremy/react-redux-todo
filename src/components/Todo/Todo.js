import React from 'react';
import classes from './Todo.scss';

const Todo = ({
  label,
  completed,
  onToggleTodo,
  onRemoveTodo
}) => (
  <li
    className={completed ? classes.completed : classes.todo}
  >
    <button onClick={onToggleTodo}
      className={classes['complete']}>
    </button>
    <div className={classes['label']}>{label}</div>
    <button onClick={onRemoveTodo}
      className={classes['remove']}></button>
  </li>
);

export default Todo;
