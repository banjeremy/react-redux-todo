import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StartView from 'views/StartView/StartView';
import HomeView from 'views/HomeView/HomeView';
import Transition from 'react-addons-css-transition-group';

const TodoApp = ({
  todoCount
}) => {
  let view = todoCount > 0
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
