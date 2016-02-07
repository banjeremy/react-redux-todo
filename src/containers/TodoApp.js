import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StartView from 'views/StartView/StartView';
import HomeView from 'views/HomeView/HomeView';
import Transition from 'react-addons-css-transition-group';
import { actions as todoActions } from 'redux/modules/todos';

class TodoApp extends React.Component {
  componentWillMount () {
    this.props.dispatch(todoActions.fetchTodos());
  }

  render () {
    let view = this.props.todoCount > 0
      ? <HomeView key={0} />
      : <StartView key={1} />;

    return (
      <Transition transitionName='slide'
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionAppear>
        {view}
      </Transition>
    );
  }
};

TodoApp.propTypes = {
  todoCount: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todoCount: state.todos.items.length
  };
};

export default connect(mapStateToProps)(TodoApp);
