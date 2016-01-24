import React from 'react';
import classes from './ToggleBar.scss';

const ToggleBar = () => {
  return (
    <div className={classes['toggle-bar']}>
      <button>Incomplete</button>
      <button>Complete</button>
    </div>
  );
};

export default ToggleBar;
