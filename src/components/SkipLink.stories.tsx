import type { StoryObj, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import type { ComponentProps } from 'react';
import SkipLink from './SkipLink';

type Args = ComponentProps<typeof SkipLink>;

export default {
  title: 'SkipLink',
  component: SkipLink,
  description:
    'Skip link used for accessible navigation and skips the main nav',
} as Meta<Args>;

export const Default: StoryObj<Args> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const skipLink = canvas.getByRole<HTMLAnchorElement>('link', {
      name: 'Skip to main content',
    });

    await expect(skipLink).toBeInTheDocument();
    await expect(skipLink).not.toBeVisible();
    await userEvent.tab();

    await expect(skipLink).toBeVisible();
  },
};
