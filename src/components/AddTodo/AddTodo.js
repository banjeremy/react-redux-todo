import React from 'react';
import classes from './AddTodo.scss';

const AddTodo = ({
  onAddTodo
}) => {
  let input;

  return (
    <div>
      <input
        type='text'
        ref={(c) => input = c} />

      <button className={classes['add-todo-button']}
        onClick={() => {
          if (!input.value) {
            return;
          }
          onAddTodo(input.value);
          input.value = '';
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
