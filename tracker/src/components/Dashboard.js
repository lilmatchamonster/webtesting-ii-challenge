import React from 'react';

function Dashboard(props) {
  return (
    <div>
      <h2>Dashboard Controls</h2>
      <div>
        <button onClick={props.strike}>Strike</button>
        <button onClick={props.ball}>Ball</button>
        <button onClick={props.foul}>Foul</button>
      </div>
      <button onClick={props.hit}>Hit</button>
    </div>
  );
}
 
export default Dashboard;