import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classes from './Modal.scss';

class Modal extends React.Component {
  render () {
    const {
      isActive,
      handleAccept,
      handleReject
    } = this.props;
    return (
      <div className={classes.modal} style={{
        display: isActive
          ? 'block'
          : 'none'
      }}
      >
        <h1>Are you sure you want to clear all items from this list?</h1>
        <h2>This cannot be undone.</h2>

        <button onClick={handleAccept.bind(this)}>Yes, I'm Sure.</button>
        <button onClick={handleReject.bind(this)}>No, go back.</button>
      </div>
    );
  }
}

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleReject: PropTypes.func.isRequired
};

export default connect(state => state)(Modal);
