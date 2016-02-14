import React from 'react';
import classes from './Todo.scss';

const Todo = ({
  label,
  completed,
  onToggleTodo,
  onRemoveTodo,
  onDragStart,
  onDragEnd,
  onDragOver,
  index
}) => (
  <li
    className={
      completed
      ? classes.completed
      : classes.todo
    }
    draggable
    data-index={index}
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDragEnd={onDragEnd}
  >
    <button onClick={onToggleTodo}
      className={classes['complete'] + ' icon'}>
    </button>
    <div className={classes['label'] }>{label}</div>
    <button onClick={onRemoveTodo}
      className={classes['remove'] + ' icon'}></button>
  </li>
);

export default Todo;
