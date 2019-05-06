import React, {Component} from 'react';

import './TestComponent.css';
import LRTTimeBox from '../../containers/LRTTimeBox/LRTTimeBox';

class TestComponent2 extends Component {

  constructor(props) {
      super(props);
      this.printTimeChangedHandler = this.printTimeChangedHandler.bind(this);
  }

  printTimeChangedHandler = () => {
    console.log("Time changed!");
  }

  render() {
    return(
      <div className='TestComponent'>
        <h2>This is Test Component 2</h2>
        <p> fhKJDSdhbzjfjfjfjfjfhhjjjjjjjjjjjjjjascdnewrhfuihsazkcjhbalwueirha </p>
        
      </div>
    );
  }

}

export default TestComponent2;
