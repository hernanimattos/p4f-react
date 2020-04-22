import React from 'react';
import PostCard from './PostCard';
import { withKnobs, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'PostCard',
  component: PostCard,
  decorators: [withKnobs],
};

export const normal = () => <PostCard title="titulo" body="kkkk" />;
