/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ContactBar from './ContactBar';

describe('ContactBar', () => {
  it('personal email is displayed as a link', () => {
    render(<ContactBar />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'mailto:clothiernamedjeremiah@gmail.com',
    );

    expect(screen.getByRole('link')).toHaveTextContent('clothiernamedjeremiah@gmail.com');
  });
});
