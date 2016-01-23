import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'redux/actions';
import AddTodo from 'components/AddTodo/AddTodo';

class TodoApp extends React.Component {
  render () {
    const { dispatch, todos } = this.props;
    return (
      <div>
        <AddTodo onAddTodo={(text) => {
          dispatch(addTodo(text));
        }}/>
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
