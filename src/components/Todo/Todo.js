import React from 'react';
import classes from './Todo.scss';

const Todo = ({
  label,
  completed,
  onToggleTodo
}) => (
  <li
    className={completed ? classes.completed : ''}
    onClick={onToggleTodo}
  >
    {label}
  </li>
);

export default Todo;
