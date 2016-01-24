import React from 'react';
import classes from './ProgressBar.scss';

const ProgressBar = ({
  progress
}) => {
  return (
    <div className={classes['progress-bar']}>
      <span className={classes['empty']}></span>
      <span
        className={classes['progress']}
        style={{ width: progress + '%' }}>
      </span>
    </div>
  );
};

export default ProgressBar;
