import React from 'react';
import ActionBar from 'components/ActionBar/ActionBar';
import AddTodo from 'components/AddTodo/AddTodo';
import ToggleBar from 'components/ToggleBar/ToggleBar';

import classes from './DesktopActionBar.scss';

const DesktopActionBar = ({
  currentFilter,
  onToggleFilter,
  onAddTodo,
  handleClear
}) => {
  return (
    <div className={classes['action-bar--desktop']}>
      <div className={classes['left']}>
        <AddTodo onAddTodo={onAddTodo} />
      </div>
      <div className={classes['center']}>
        <div className={classes['icon']}></div>
        <ToggleBar currentFilter={currentFilter}
          onToggleFilter={onToggleFilter}
        />
      </div>
      <div className={classes['right']}>
        <ActionBar handleClear={handleClear}/>
      </div>
    </div>
  );
};

export default DesktopActionBar;
