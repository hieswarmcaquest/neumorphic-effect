import React from 'react';
import './App.css';
import Statistic from './components/Statistic';
import Clock from './components/Clock';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Statistic />
        <Clock />
        <Timer />
      </div>
    </div>
  );
}

export default App;