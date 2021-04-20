import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders react application main div', async () => {
  await act(async () => {
    render(<App />);
    const mainDiv = screen.getByTestId('mainDiv');
    expect(mainDiv).toBeTruthy();
  });
});
