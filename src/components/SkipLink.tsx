import React from 'react';
import clsx from 'clsx';

/**
 * Skip Links AKA Bypass Blocks are a technique that provides a mechanism to
 * bypass blocks of material that are repeated on multiple Web pages by skipping
 * directly to the main content of the Web Page.
 *
 * The first interactive item in the Web page is a link to the beginning of
 * the main content. Activating the link sets focus beyond the other content
 * to the main content.
 *
 * This technique is most useful when a Web page has one main content area,
 * rather than a set of content areas that are equally important, and when
 * there are not multiple navigation sections on the page.
 *
 * source: https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G1
 *
 * @returns
 */
const SkipLink = () => (
  <a
    className={clsx(
      'focus-indicator absolute top-4 left-4 p-2 opacity-0',
      'transition-transform duration-500 focus:translate-y-20 focus:opacity-100',
    )}
    href="#main-content"
  >
    Skip to main content
  </a>
);

export default SkipLink;
