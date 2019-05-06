import React from 'react';
import './MyInputComponents.css';

const myInputDate = (props) => {

  return(
    <div className='My-input'>
      <label>Date:</label>
      <input name='inputDate'  placeholder='DD/MM/YYYY' type="text"
             value={props.inputDate} onChange={props.changed}/>
    </div>
  )

};

export default myInputDate;
