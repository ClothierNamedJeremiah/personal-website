import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NavBar from 'components/NavBar';

type Args = ComponentProps<typeof NavBar>;

export default {
  title: 'Navigation Bar',
  component: NavBar,
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
