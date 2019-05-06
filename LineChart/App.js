import React, { Component } from 'react';
import './App.css';
import LGJChartBar from './containers/LGJChartBar/LGJChartBar';

class App extends Component {

  state = {
    barColours: {
      bar1: {barColour: 'red', barBorderColour: '#009900'},
      bar2: {barColour: 'green', barBorderColour: '#006699'},
      bar3: {barColour: 'blue', barBorderColour: '#990000'}
    },
    barChartPosition: 'center'
  }

  render() {
    return (
      <div className="App">
        <LGJChartBar/>
      </div>
    );
  }
}

export default App;
