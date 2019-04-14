import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Render Dom Module', () => {
  
  it('Renders without crashing', () => {
    render(<App />);
  });

  it('Displays the header Score Board', () => {
    const { queryByText } = render(<App />);
    const text = queryByText(/score board/i);

    expect(text).toBeInTheDocument();
  });
});



