import React from 'react';

import './Modal.scss';


const modal = (props) => (
  <div className='Modal'
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100000vh)',
      opacity: props.show ? '1' : '0'
    }}>
    <div className='Arrow-up'></div>
    {props.children}
  </div>
);

export default modal;
