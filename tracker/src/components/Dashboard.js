import React, { Component } from 'react';

class Dashboard extends Component {
  state = { 
    strike: "",
    ball: "",
    foul: "",
    hit: ""
  }
  render() { 
    return (
      <div>
        <h2>Dashboard Controls</h2>
        <div>
          <button>Strike</button>
          <button>Ball</button>
          <button>Foul</button>
          <button>Hit</button>
        </div>
        <button>Reset</button>
      </div>
    );
  }
}
 
export default Dashboard;