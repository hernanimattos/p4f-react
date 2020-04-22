import React from 'react';
import UserCard from './UserCard';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'UserCard',
  component: UserCard,
  decorators: [withKnobs],
};

export const primary = () => (
  <UserCard
    name="Eu mesmo"
    email="eumesmo@eumesmo.nois"
    company="company e sempany"
  />
);

export const notprimary = () => {
  const address = {
    street: 'figth',
    suite: '3b',
    city: 'Gotham',
    zipcode: '000000',
  };

  return <UserCard name="Eu mesmo" address={address} primary />;
};
