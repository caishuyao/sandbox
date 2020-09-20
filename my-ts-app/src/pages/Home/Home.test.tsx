import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

test('test home page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/typescript/i);
  expect(linkElement).toBeInTheDocument();
});