import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

const score = {
  strike: 0,
  ball: 0
}
describe('Render Display Component', () => {
  
  it('Renders without crashing', () => {
    render(<Display score={score}/>);
  });

  it('Displays the header Score Board', () => {
    const { getByText } = render(<Display score={score}/>);
    const text = getByText(/player score/i);

    expect(text).toBeInTheDocument();
  });
});

describe('Testing for Display Component', () => {
  
  it('Should display stike and ball label and ball and strike passed in by props', () => {
    const { getByText } = render(<Display score={score}/>);

    const strikeLabel = getByText(/strike:/i);
    const ballLabel = getByText(/ball:/i);
    const ballCount = getByText(/0/);
    const strikeCount = getByText(/0/);

    expect(strikeLabel).toBeInTheDocument();
    expect(ballLabel).toBeInTheDocument();
    expect(ballCount).toBeInTheDocument();
    expect(strikeCount).toBeInTheDocument();
    
  })
});
