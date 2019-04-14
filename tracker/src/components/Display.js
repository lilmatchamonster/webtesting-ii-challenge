import React from 'react';

function Display(props) {
  const { strike, ball } = props.score;
  
  return (
    <div>
      <h2>Player Score</h2>
      <div>
        <h3>Strike: {strike}</h3>{/* List number of strikes */}
        <h3>Ball: {ball}</h3>{/* List number of balls */}
      </div>
    </div>
  );
}
 
export default Display;