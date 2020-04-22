import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('App');
});

test('renders learn react link', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveAttribute(
    'style',
    'padding: 1rem; min-width: 1px;',
  );
});
