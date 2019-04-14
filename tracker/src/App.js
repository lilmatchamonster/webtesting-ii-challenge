import React, { Component } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      strike: 0,
      ball: 0
    }
  }

  strike = () => {
    if(this.state.strike === 2) {
      this.setState({strike: 0, ball: 0})
    }
    else {
      this.setState({strike: this.state.strike + 1})
    }
  }

  ball = () => {
    if(this.state.ball === 3) {
      this.setState({strike: 0, ball: 0})
    }
    else {
      this.setState({ball: this.state.ball + 1})
    }
  }

  foul = () => {
    if(this.state.strike < 2) {
      this.setState({strike: this.state.strike + 1})
    }
  }

  hit = () => {
    this.setState({strike: 0, ball: 0})
  }

  render() { console.log(this.state)
    return (
      <div className="App">
        <h1>Score Board</h1>
        <Display score={this.state}/>
        <Dashboard strike={this.strike} ball={this.ball} foul={this.foul} hit={this.hit}/>
      </div>
    );
  }
}

export default App;
