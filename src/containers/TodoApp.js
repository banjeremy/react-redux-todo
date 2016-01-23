import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
  render () {
    const { dispatch, todos } = this.props;
    return (
      <div>
        <h1>Let&apos;s do this!</h1>
        { JSON.stringify(todos) }
      </div>
    );
  }
};

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TodoApp);
