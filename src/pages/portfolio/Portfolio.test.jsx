/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render,
  screen,
  getAllByRole,
  getByRole,
  getByText,
} from '@testing-library/react';

import Portfolio, { getStaticProps } from './index';

describe('Portfolio', () => {
  test('renders all projects', async () => {
    const { props } = await getStaticProps();
    const { projects } = props;
    render(<Portfolio projects={projects} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Some Things I've Built",
    );

    const projectShowcases = screen.getAllByRole('article');
    expect(projectShowcases.length).toBe(projects.length);

    projectShowcases.forEach((projectShowcase, index) => {
      const { title, description, sourceCodeUrl, liveSiteUrl } =
        projects[index];

      expect(
        getByRole(projectShowcase, 'heading', { level: 2 }),
      ).toHaveTextContent('Project Showcase');

      expect(
        getByRole(projectShowcase, 'heading', { level: 3 }),
      ).toHaveTextContent(title);

      expect(getByText(projectShowcase, description)).toBeInTheDocument();

      const links = getAllByRole(projectShowcase, 'link');
      expect(links[0]).toHaveAttribute('href', sourceCodeUrl);
      expect(links[1]).toHaveAttribute('href', liveSiteUrl);
    });
  });
});
