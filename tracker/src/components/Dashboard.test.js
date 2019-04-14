import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('Render Dashboard Component', () => {
  
  it('Renders without crashing', () => {
    render(<Dashboard />);
  });

  it('Displays the header Dashboard Controls', () => {
    const { getByText } = render(<Dashboard />);
    const text = getByText(/Dashboard Controls/i);

    expect(text).toBeInTheDocument();
  });
});

describe('Testing for Display Component', () => {
  
  it('Should display stike and ball label and ball and strike passed in by props', () => {
    const { getByText } = render(<Dashboard />);
    
    const strikeBtn = getByText(/strike/i);
    const ballBtn = getByText(/ball/i);
    const foulBtn = getByText(/foul/i);
    const hitBtn = getByText(/hit/i);

    expect(strikeBtn).toBeInTheDocument();
    expect(ballBtn).toBeInTheDocument();
    expect(foulBtn).toBeInTheDocument();
    expect(hitBtn).toBeInTheDocument();
  })
});