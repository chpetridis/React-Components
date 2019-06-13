import React from 'react';

import '../NormalRow/NormalRow.scss';

const finalRow = (props) => (
    <div className='Calculator-row'>
        <button id='number' onClick={() => props.pushToExpression(props.values.n1)}>{props.values.n1}</button>
        <button id='operator' onClick={props.clear}>{props.values.o1}</button>
        <button id='operator' onClick={props.calculate}>{props.values.o2}</button>
        <button id='operator' onClick={() => props.pushToExpression(props.values.o3)}>{props.values.o3}</button>
    </div>
)

export default finalRow;
