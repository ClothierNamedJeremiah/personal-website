import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const CustomLink = ({ children, ...otherProps }: React.ComponentProps<typeof Link>) => (
  <Link
    className={clsx(
      'inline-block px-4 py-3 text-yellow-400 transition-colors',
      'border-2 border-solid border-yellow-400 shadow-xl',
      'hover:border-yellow-500 hover:bg-slate-500/20 hover:text-yellow-500',
      'focus-indicator',
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </Link>
);

export default CustomLink;
