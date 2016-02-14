import React from 'react';
import classes from './ActionBar.scss';

const ActionBar = ({
  handleClear
}) => {
  return (
    <div className={classes['action-bar']}>
      <button className={classes['sort'] + ' muted'}>
        <i className={classes['sort-icon']}></i>
        Sort
      </button>
      <button onClick={handleClear} className={classes['clear'] + ' muted'}>
        <i className={classes['clear-icon']}></i>
        Clear
      </button>
    </div>
  );
};

export default ActionBar;
