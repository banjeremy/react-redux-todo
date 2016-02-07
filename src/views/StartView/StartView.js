import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as todoActions }from 'redux/modules/todos';
import AddTodo from 'components/AddTodo/AddTodo';
import classes from './StartView.scss';

export class StartView extends React.Component {
  render () {
    const { dispatch } = this.props;
    return (
      <div className={classes.startView + ' view'}>
        <div className={classes.inner}>
          <h1 className={classes.heading}>Let&apos;s do this.</h1>
          <AddTodo onAddTodo={text => dispatch(todoActions.addTodo(text)) }/>
        </div>
      </div>
    );
  }
};

StartView.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const select = state => state;

export default connect(select)(StartView);
