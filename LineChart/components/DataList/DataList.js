import React from 'react';

import './DataList.scss';
import Data from './Data/Data';

const DataList = (props) => {
    return (
      <div className='DataList' style={{overflowX: props.scrollStyle.overflowX}}>
        {props.data.map((data, index) => {
          return <Data
                    key={index}
                    label={data.label}
                    values={data.values}
                    normalizedValues={props.normalize(index)}
                    barColours={props.barColours}
                    scrollStyle={props.scrollStyle}/>
        })}
      </div>
    )
}

export default DataList;
