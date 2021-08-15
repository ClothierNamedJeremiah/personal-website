/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getAllByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavBar, { NAV_LINKS } from './NavBar';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children,
);

describe('NavBar', () => {
  test('renders all top level navigation links', () => {
    render(<NavBar />);

    const links = screen.getAllByRole('link');
    links.forEach((link, index) => {
      const { href, displayText } = NAV_LINKS[index];
      expect(link).toBeInTheDocument();
      expect(link.getAttribute('href')).toBe(href);
      expect(link.textContent).toBe(displayText);
    });
  });

  test('nav menu opens and shows additional links when menu icon is clicked', () => {
    render(<NavBar />);

    userEvent.click(screen.getByRole('button'));

    const menuList = screen.getByRole('list');
    const links = getAllByRole(menuList, 'link');
    links.forEach((link, index) => {
      const { href, displayText } = NAV_LINKS[index];
      expect(link).toBeInTheDocument();
      expect(link.getAttribute('href')).toBe(href);
      expect(link.textContent).toBe(displayText);
    });
  });

  test('navigation menu opens and closes on click', () => {
    render(<NavBar />);

    expect(screen.queryByTestId('navmenu')).toBeNull();

    userEvent.click(screen.getByRole('button'));

    expect(screen.queryByTestId('navmenu')).toBeInTheDocument();
  });

  test('navigation menu opens and closes when ENTER key is pressed', () => {
    render(<NavBar />);

    expect(screen.queryByTestId('navmenu')).toBeNull();

    screen.getByRole('button').focus();
    userEvent.keyboard('{Space}');

    expect(screen.queryByTestId('navmenu')).toBeNull();

    userEvent.keyboard('{Enter}');
    expect(screen.queryByTestId('navmenu')).toBeInTheDocument();
  });

  test('navigation menu closes when clicking a link in the menu', () => {
    render(<NavBar />);

    userEvent.click(screen.getByRole('button'));

    const navMenu = screen.queryByTestId('navmenu');
    expect(navMenu).toBeInTheDocument();

    const link = getAllByRole(navMenu, 'link')[1];

    userEvent.click(link);

    expect(navMenu).not.toBeInTheDocument();
  });
});
