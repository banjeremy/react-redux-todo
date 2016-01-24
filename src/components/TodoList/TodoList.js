import React from 'react';
import Todo from 'components/Todo/Todo';
import classes from './TodoList.scss';

const TodoList = ({
  todos,
  onToggleTodo
}) => {
  return (
    <ul className={classes['todo-list']}>
      { todos.map(todo => (
        <Todo key={todo.id}
          {...todo}
          onToggleTodo={() => onToggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

export default TodoList;
