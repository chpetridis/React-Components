import React, {Component} from 'react';

import TodoListContainer from '../TodoListContainer';
import AddNewTaskContainer from '../AddNewTaskContainer/AddNewTaskContainer';
import Modal from '../../components/Modal/Modal';
import Wrapperaux from '../../hoc/WrapperAux';
import './Layout.css';


class Layout extends Component {
    state = {
      addingTasks: false
    }

  constructor(props) {
      super(props);
      this.updateAddingTasksHandler = this.updateAddingTasksHandler.bind(this);
  }

  updateAddingTasksHandler = () => {
    this.setState( (prevState) => {
      return {
        addingTasks: !prevState.addingTasks
      }
    });
  }

  render () {
    return (
      <Wrapperaux>
        <header className="Layout-header">
          <h1>TODO List</h1>
        </header>

        <Modal show={this.state.addingTasks}>
          <AddNewTaskContainer update={this.updateAddingTasksHandler}/>
        </Modal>

        <TodoListContainer />

        <button className='Button-layout' onClick={this.updateAddingTasksHandler}>Add New Task</button>
      </Wrapperaux>
    );
  }

}

export default Layout;
