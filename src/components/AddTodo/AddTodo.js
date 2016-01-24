import React from 'react';
import classes from './AddTodo.scss';

const AddTodo = ({
  onAddTodo
}) => {
  let input;

  return (
    <form className={classes['add-todo']}
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value) {
          return;
        }
        onAddTodo(input.value);
        input.value = '';
      }
    }>
      <input className={classes['text-input']}
        type='text'
        placeholder='Enter a new Todo'
        ref={(c) => input = c} />

      <button type='submit'
        className={classes['add-todo-button']}>
        +
      </button>
    </form>
  );
};

export default AddTodo;
