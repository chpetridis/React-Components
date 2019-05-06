import React from 'react';

import './Data.scss';
import Bars from '../../Bars/Bars';

const Data = (props) => {
    return (
       <div className='Data'>
         <Bars dataNormalizedValues={props.normalizedValues}
               dataValues={props.values} dataLabel={props.label}
               barColours={props.barColours} scrollStyle={props.scrollStyle}/>

         <div id='label'>
            {props.label}
         </div>
       </div>
    )
}

export default Data;
