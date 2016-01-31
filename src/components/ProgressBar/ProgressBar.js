import React from 'react';
import classes from './ProgressBar.scss';

const ProgressBar = ({
  progress
}) => {
  let label;
  if (progress) {
    label = <span className={classes['label'] + ' hide-on-mobile'}>{progress.toFixed()}&#37; Complete</span>;
  }
  return (
    <div className={classes['progress-bar']}>
      {label}
      <span className={classes['empty']}></span>
      <span
        className={classes['progress']}
        style={{ width: progress + '%' }}>
      </span>
    </div>
  );
};

export default ProgressBar;
