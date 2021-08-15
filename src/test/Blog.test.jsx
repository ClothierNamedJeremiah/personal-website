/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import Blog, { getStaticProps } from 'pages/blog';

describe('Blog', () => {
  test('renders all blogs', async () => {
    const { props } = await getStaticProps();
    const { blogs } = props;
    render(<Blog blogs={blogs} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Blogs I've Written",
    );
    expect(screen.getAllByRole('link').length).toBe(blogs.length);

    blogs.forEach(
      ({ title, shortDescription, estimatedTimeToRead, blogPostUrl }) => {
        expect(screen.getByText(title)).toHaveAttribute('href', blogPostUrl);
        expect(screen.getByText(shortDescription)).toBeInTheDocument();
        expect(screen.getAllByText(estimatedTimeToRead)).not.toBeUndefined();
      },
    );
  });
});
