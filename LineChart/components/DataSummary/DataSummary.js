import React from 'react';

import './DataSummary.scss';

const DataSummary = (props) => {
    return (
       <div className='DataSummary'>
         <div>{props.label}</div>

         <div>
           <p id='rectangle' style={{backgroundColor: props.barColours.bar1.barColour}}></p>
           <p id='summary-label'>Bar1:</p>
           <p>{props.summaryValues.green}</p>
         </div>

         <div>
           <p id='rectangle' style={{backgroundColor:  props.barColours.bar2.barColour}}></p>
           <p id='summary-label'>Bar2:</p>
           <p>{props.summaryValues.blue}</p>
         </div>

         <div>
           <p id='rectangle' style={{backgroundColor:  props.barColours.bar3.barColour}}></p>
           <p id='summary-label'>Bar3:</p>
           <p>{props.summaryValues.red}</p>
         </div>
       </div>
    )
}

export default DataSummary;
