import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo }from '../../redux/actions';
import AddTodo from 'components/AddTodo/AddTodo';
import classes from './StartView.scss';

export class StartView extends React.Component {
  render () {
    const { dispatch } = this.props;
    return (
      <div className={classes.startView + ' view'}>
        <div className={classes.inner}>
          <h1 className={classes.heading}>Let&apos;s Do This!</h1>
          <AddTodo onAddTodo={text => dispatch(addTodo(text)) }/>
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
