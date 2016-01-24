import React from 'react';
import classes from './ToggleBar.scss';

const ActionBar = () => {
  return (
    <div className={classes['action-bar']}>
      <button>Sort</button>
      <button>Clear</button>
    </div>
  );
};

export default ActionBar;
