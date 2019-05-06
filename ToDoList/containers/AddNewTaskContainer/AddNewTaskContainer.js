import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddNewTask from '../../components/AddNewTask/AddNewTask';
import * as actionTypes from '../../store/actions';

class AddNewTaskContainer extends Component {

  constructor(props) {
      super(props);
      this.addTaskHandler = this.addTaskHandler.bind(this);
      this.discardInputs = this.discardInputs.bind(this);
  }

  addTaskHandler = () => {
    this.props.onAddTask(this.props.inputTitle, this.props.inputContent, this.props.inputDate);
    this.discardInputs();
  }

  discardInputs = () => {
    this.props.onDiscardInputs();
    this.props.update();
  }

  render() {
    return(
      <AddNewTask
        inputTitle={this.props.inputTitle}
        taskContent={this.props.inputContent}
        inputDate={this.props.inputDate}
        changed={(event) => this.props.onInput(event)}
        confirmClicked={this.addTaskHandler}
        cancelClicked={this.discardInputs}
      />
    );
  }

}

const mapStateToProps = state => {
    return {
      inputTitle: state.inputs.inputTaskTitle,
      inputContent: state.inputs.inputTask,
      inputDate: state.inputs.inputTaskDate
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInput: (event) => dispatch({type: actionTypes.INPUT,
                                      eventName: event.target.name,
                                      eventValue: event.target.value}),
        onAddTask: (title, content, date) => dispatch({type: actionTypes.ADD_TASK,
                                            taskTitle: title,
                                            taskContent: content,
                                            taskDate: date}),
        onDiscardInputs: () => dispatch({type: actionTypes.DISCARD_INPUTS}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTaskContainer);
