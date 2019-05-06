import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import * as actionTypes from '../store/actions';

class TodoListContainer extends Component {

  constructor(props) {
      super(props);
      this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
  }

  deleteTaskHandler = (taskIndex) => {
    this.props.onRemoveTask(taskIndex, this.props.todoList.length - 1);
  }

  render() {
    return(
      this.props.loadedItems ? <TodoList todolist={this.props.todoList} deleteClicked={this.deleteTaskHandler}/>
                             :  <p className='NoTasks-layout'><strong>Nothing to do!!!</strong></p>
    );
  }

}

const mapStateToProps = state => {
    return {
      todoList: state.todoList.todolist,
      loadedItems: state.todoList.itemsLoaded
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTask: (index, size) => dispatch({type: actionTypes.REMOVE_TASK,
                                                 taskIndex: index,
                                                 listSize: size})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
