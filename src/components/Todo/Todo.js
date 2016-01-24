import React from 'react';
import classes from './Todo.scss';

const Todo = ({
  label,
  completed,
  onToggleTodo
}) => (
  <li
    className={completed ? classes.completed : classes.todo}
  >
    <button onClick={onToggleTodo}
      className={classes['complete']}>
    </button>
    <div className={classes['label']}>{label}</div>
    <button className={classes['remove']}></button>
  </li>
);

export default Todo;
