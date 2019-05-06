import React from 'react';

import'./AddNewTask.css';
import WrapperAux from '../../hoc/WrapperAux';
import MyInputTitle from './MyInputComponents/MyInputTitle';
import MyInputContent from './MyInputComponents/MyInputContent';
import MyInputDate from './MyInputComponents/MyInputDate';

const addNewTask = (props) => {

  return(
    <div className="NewTask">
        <h2>Add a Task</h2>

        <MyInputTitle  inputTitle={props.inputTitle} changed={props.changed}/>

        <MyInputContent changed={props.changed} taskContent = {props.taskContent} />

        <MyInputDate changed={props.changed} inputDate={props.inputDate}/>

        <WrapperAux>
          <button className='Task-buttons' id='Cancel-button' onClick={props.cancelClicked}>Cancel</button>
          <button className='Task-buttons' id='Confirm-button' onClick={props.confirmClicked}>Confirm</button>
        </WrapperAux>
    </div>
  )
};

export default addNewTask;
