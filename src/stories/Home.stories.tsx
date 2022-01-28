import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Home from '../pages/index';

type Args = ComponentProps<typeof Home>;

export default {
  title: 'pages/Home',
  component: Home,
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
