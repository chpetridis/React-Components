import React from 'react';

import './NormalRow.scss';

const normalRow = (props) => (
    <div className='Calculator-row'>
        <button id='number' onClick={() => props.pushToExpression(props.values.n1)}>{props.values.n1}</button>
        <button id='number' onClick={() => props.pushToExpression(props.values.n2)}>{props.values.n2}</button>
        <button id='number' onClick={() => props.pushToExpression(props.values.n3)}>{props.values.n3}</button>
        <button id='operator' onClick={() => props.pushToExpression(props.values.o1)}>{props.values.o1}</button>
    </div>
)

export default normalRow;

