import type { ComponentProps } from 'React';
import type { Meta, StoryObj } from '@storybook/react';
import NavMenu from './NavMenu';

type Args = ComponentProps<typeof NavMenu>;

export default {
  title: 'Navigation Menu',
  component: NavMenu,
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
