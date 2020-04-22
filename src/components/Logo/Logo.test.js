import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

test('Snap', () => {
  // const renderCP = render(<Logo />);
  const LogoSnap = Logo.toString();
  expect(LogoSnap).toMatchSnapshot();
});

test('Logo', () => {
  const { container } = render(<Logo />);
  expect(container.firstChild).toHaveClass('logo');
});
