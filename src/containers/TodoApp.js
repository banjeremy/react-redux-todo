import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StartView from 'views/StartView/StartView';
import HomeView from 'views/HomeView/HomeView';

class TodoApp extends React.Component {
  renderStartView () {
    return <StartView />;
  }

  renderHomeView () {
    return <HomeView />;
  }

  render () {
    const { todoCount } = this.props;

    if (todoCount > 0) {
      return this.renderHomeView();
    } else {
      return this.renderStartView();
    }
  }
};

TodoApp.propTypes = {
  todoCount: PropTypes.number.isRequired
};

const select = state => {
  return {
    todoCount: state.todos.length
  };
};
export default connect(select)(TodoApp);
