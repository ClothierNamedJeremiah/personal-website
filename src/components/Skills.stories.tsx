import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import Skills from './Skills';

type Args = ComponentProps<typeof Skills>;

export default {
  title: 'Skills',
  component: Skills,
  description: 'Skills displayed on personal website',
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
