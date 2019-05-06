import React, {Component} from 'react';

import './TestComponent.css';
import LRTTimeBox from '../../containers/LRTTimeBox/LRTTimeBox';

class TestComponent extends Component {

  constructor(props) {
      super(props);
      this.printTimeChangedHandler = this.printTimeChangedHandler.bind(this);
  }

  printTimeChangedHandler = (time) => {
    console.log("Time changed to: " + time);
  }

  render() {
    return(
      <div className='TestComponent'>
        <h2>This is Test Component 1</h2>
        <p> fhKJDSdhbzjfjfjfjfjfhhjjjjjjjjjjjjjjascdnewrhfuihsazkcjhbalwueirha </p>
        <LRTTimeBox OnTimeChanged={this.printTimeChangedHandler}/>
      </div>
    );
  }

}

export default TestComponent;
