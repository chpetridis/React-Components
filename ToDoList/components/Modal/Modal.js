import React from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Wrapperaux from '../../hoc/WrapperAux';

const modal = (props) => (

  <Wrapperaux>
    <Backdrop show={props.show}/>
    <div
      className='Modal'
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Wrapperaux>
  
);

export default modal;
