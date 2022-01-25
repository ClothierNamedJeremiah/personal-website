/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialBar from './SocialBar';

describe('SocialBar', () => {
  test('GitHub link is displayed', () => {
    render(<SocialBar />);

    const link = screen.getAllByRole('link')[0];

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/ClothierNamedJeremiah',
    );
    expect(link).not.toHaveTextContent('');
  });

  test('LinkedIn link is displayed', () => {
    render(<SocialBar />);

    const link = screen.getAllByRole('link')[1];

    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/jeremiah-clothier/',
    );
    expect(link).not.toHaveTextContent('');
  });

  test('Medium link is displayed', () => {
    render(<SocialBar />);
    const link = screen.getAllByRole('link')[2];

    expect(link).toHaveAttribute(
      'href',
      'https://clothiernamedjeremiah.medium.com/',
    );
    expect(link).not.toHaveTextContent('');
  });
});
