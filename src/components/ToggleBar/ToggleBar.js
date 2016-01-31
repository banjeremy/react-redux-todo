import React, { PropTypes } from 'react';
import classes from './ToggleBar.scss';

class ToggleBar extends React.Component {
  static propTypes = {
    onToggleFilter: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired
  };

  renderFilter (filter, label) {
    const { onToggleFilter, currentFilter } = this.props;
    return (
      <button
        className={
          filter === currentFilter
          ? classes.active
          : classes.inactive
        }
        onClick={() => onToggleFilter(filter)}
      >
        {label}
      </button>
    );
  }

  render () {
    return (
      <div className={classes['toggle-bar'] + ' hide-on-tablet'}>
        {this.renderFilter('SHOW_COMPLETED', 'Complete')}
        {this.renderFilter('SHOW_INCOMPLETE', 'Incomplete')}
      </div>
    );
  }
};

export default ToggleBar;
