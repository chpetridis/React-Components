import React from 'react';

import './TimeList.scss';

const TimeList = (props) => {
  return (
     <div className='Time-list'>
       {props.times.map((time) => {
         return <p
                  key={time.time}
                  onMouseDown={() => props.onUpdateClicked(time.time)}>
                  {time.time}
                </p>
       })}
     </div>
  )
}

export default TimeList;
