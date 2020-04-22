import React from 'react';
import { render } from '@testing-library/react';
import PostCard from './PostCard';

test('Snap', () => {
  const PostCP = PostCard.toString();
  expect(PostCP).toMatchSnapshot();
});

test('PostCard class', () => {
  const { container } = render(<PostCard title="nome" />);
  expect(container.firstChild).toHaveClass('post-card');
});
test('PostCard class', () => {
  const { getByText } = render(<PostCard title="nome" />);
  const title = getByText('nome');
  expect(title).toBeInTheDocument();
});
