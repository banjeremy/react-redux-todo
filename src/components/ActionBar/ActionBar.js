import React from 'react';
import classes from './ActionBar.scss';

const ActionBar = ({
  handleClear,
  isSorting,
  handleDone,
  handleSort
}) => {
  if (isSorting) {
    return (
      <div className={classes['action-bar']}>
        <button className={classes['sort-option'] + ' muted'}>A-Z</button>
        <button className={classes['sort-option']}>Z-A</button>
        <button className={classes['sort-option']}>Newest</button>
        <button onClick={handleDone}
          className={classes['sort-option']}
        >
          Done
        </button>
      </div>
    );
  } else {
    return (
      <div className={classes['action-bar']}>
        <button onClick={handleSort}
          className={classes['sort'] + ' muted'}
        >
          <i className={classes['sort-icon']}></i>
          Sort
        </button>
        <button onClick={handleClear} className={classes['clear'] + ' muted'}>
          <i className={classes['clear-icon']}></i>
          Clear
        </button>
      </div>
    );
  }
};

ActionBar.propTypes = {
  isSorting: React.PropTypes.bool.isRequired,
  handleClear: React.PropTypes.func.isRequired,
  handleDone: React.PropTypes.func.isRequired,
  handleSort: React.PropTypes.func.isRequired
};

export default ActionBar;
