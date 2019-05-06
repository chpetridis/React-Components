import React from 'react';

import './TimeBox.scss';

const TimeBox = (props) => {
  return (
    <div>
      <input className='TimeBox' name='timeBox' maxLength='5' type="text"
        value={props.timeValue}
        onChange={props.changed}
        onFocus={props.focus}
        onBlur={() => props.update(props.timeValue)}
      />
    </div>
  )
};

export default TimeBox;
