import React from 'react';
import './MyInputComponents.css';

const myInputContent = (props) => {

  return(
    <div className='My-input'>
      <label>Content:</label>
      <textarea rows='4' name='taskContent' type="text" value={props.taskContent} onChange={props.changed} />
    </div>
  )

};

export default myInputContent;
