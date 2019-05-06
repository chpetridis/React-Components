import React from 'react';
import './MyInputComponents.css';

const myInputTitle = (props) => {

  return(
    <div className='My-input'>
      <label>Task Title:</label>
      <input name='inputTitle' type="text" value={props.inputTitle} onChange={props.changed} />
    </div>
  )

};

export default myInputTitle;
