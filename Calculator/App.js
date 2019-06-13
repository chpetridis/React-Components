import React from 'react';

import './App.scss';
import Calculator from './containers/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <h1 id='calculator-header'>Calculator</h1>
      <Calculator/>
    </div>
  );
}

export default App;
