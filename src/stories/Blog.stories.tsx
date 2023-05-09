import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Blog, { getStaticProps } from '../pages/blog/index';

type Args = ComponentProps<typeof Blog>;

export default {
  title: 'pages/Blog',
  component: Blog,
  loaders: [
    async () => {
      const data = await getStaticProps();
      return data.props;
    },
  ],
  // eslint-disable-next-line react/jsx-props-no-spreading
  render: (args, { loaded: { blogs } }) => <Blog {...args} blogs={blogs} />,
} as Meta<Args>;

export const Default: StoryObj<Args> = {};
