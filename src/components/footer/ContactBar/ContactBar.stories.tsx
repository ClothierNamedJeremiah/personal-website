import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContactBar from './ContactBar';

type Args = ComponentProps<typeof ContactBar>;

export default {
  title: 'Contact Bar',
  component: ContactBar,
  description: 'Sidebar with contact information displayed on all desktop pages',
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
