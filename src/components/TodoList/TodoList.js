import React from 'react';
import Todo from 'components/Todo/Todo';

const TodoList = ({
  todos,
  onToggleTodo
}) => {
  return (
    <ul>
      { todos.map(todo => (
        <Todo key={todo.id}
          {...todo}
          onToggleTodo={() => onToggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

export default TodoList;
