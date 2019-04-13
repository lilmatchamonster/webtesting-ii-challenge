import React, { Component } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Score Board</h1>
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
