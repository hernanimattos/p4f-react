import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import UserCard from './UserCard';

test('Snap', () => {
  const UserCardCP = UserCard.toString();
  expect(UserCardCP).toMatchSnapshot();
});

test('PostCard class', () => {
  const { container } = render(<UserCard />);
  expect(container.firstChild).toHaveClass('user-card');
});

test('PostCard class', () => {
  const props = {
    address: {
      street: 'aaaaa',
    },
    name: 'nome',
    email: 'email',
  };
  const { getByText, container } = render(<UserCard primary {...props} />);
  expect(container.firstChild).toHaveClass('user-card default');
  expect(getByText('nome')).toBeInTheDocument();
  expect(getByText('Endereço')).toBeInTheDocument();
});
