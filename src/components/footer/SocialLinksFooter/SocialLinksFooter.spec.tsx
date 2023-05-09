/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import SocialLinksFooter from './SocialLinksFooter';

describe('SocialLinksFooter', () => {
  it('GitHub link is displayed', () => {
    render(<SocialLinksFooter />);

    const link = screen.getAllByRole('link')[0];

    expect(link).toHaveAttribute('href', 'https://github.com/ClothierNamedJeremiah');
    expect(link).toBeInTheDocument();
  });

  it('LinkedIn link is displayed', () => {
    render(<SocialLinksFooter />);

    const link = screen.getAllByRole('link')[1];

    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/jeremiah-clothier/');
    expect(link).toBeInTheDocument();
  });

  it('Medium link is displayed', () => {
    render(<SocialLinksFooter />);
    const link = screen.getAllByRole('link')[2];

    expect(link).toHaveAttribute('href', 'https://clothiernamedjeremiah.medium.com/');
    expect(link).toBeInTheDocument();
  });
});
