import React, { Component } from 'react';

import './App.css';
import TestComponent from './components/TestComponent/TestComponent';
import TestComponent2 from './components/TestComponent/TestComponent2';

class App extends Component {

  render() {
    return (
      <div>
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent2 />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent2 />
        <TestComponent />
      </div>
    );
  }

}

export default App;
