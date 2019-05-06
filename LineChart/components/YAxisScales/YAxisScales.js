import React from 'react';

import './YAxisScales.scss';

const YAxisScales = (props) => {
    return (
       <div className='YAxisScales'>
           {props.values.map((value, index) => {
             return <div id='axis-row' key={index}>
                      <div id='scales-label'>{value}</div>
                    </div>
           })}

           <div id='max-value'>
              <div id='max-value-label'>{props.max}</div>
           </div>
       </div>
    )
}

export default YAxisScales;
