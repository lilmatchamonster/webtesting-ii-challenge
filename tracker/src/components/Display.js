import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <h2>Player Score</h2>
        <div>
          <h3>Ball: </h3>{/* List number of balls */}
          <h3>Strike: </h3>{/* List number of strikes */}
          {/* <h3>Out: </h3>List number of outs */}
        </div>
      </div>
    );
  }
}
 
export default Display;