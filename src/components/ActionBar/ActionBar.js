import React from 'react';
import classes from './ActionBar.scss';

const ActionBar = ({
  handleClear
}) => {
  return (
    <div className={classes['action-bar']}>
      <button>Sort</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default ActionBar;
