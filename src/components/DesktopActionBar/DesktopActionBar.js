import React from 'react';
import {
  actions as todoActions
} from 'redux/modules/todos';
import AddTodo from 'components/AddTodo/AddTodo';
import ToggleBar from 'components/ToggleBar/ToggleBar';

import classes from './DesktopActionBar.scss';

const DesktopActionBar = ({
  handleClear,
  dispatch,
  todos,
  filter,
  progress
}) => {
  return (
    <div>
      <AddTodo onAddTodo={text => {
        dispatch(todoActions.addTodo(text));
        dispatch(todoActions.saveTodos());
      }}/>
      <div className={classes['action-bar--desktop']}>
        <div className={classes['filter']}>
          <div className={classes['icon']}></div>
          <ToggleBar currentFilter={filter}
            onToggleFilter={filter => dispatch(todoActions.toggleListFilter(filter))}
          />
        </div>
        <button>Sort</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default DesktopActionBar;
