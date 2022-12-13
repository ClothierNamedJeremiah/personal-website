import clsx from 'clsx';
import React from 'react';

type Props = {
  id: string;
  children: React.ReactNode;
  side: 'left' | 'right';
};

const SideFooter = ({ id, children, side }: Props) => (
  <footer
    id={id}
    className={clsx(
      'fixed bottom-0 hidden w-12 tracking-widest opacity-80 [writing-mode:vertical-lr]',
      'after:mt-6 after:h-14 after:w-px after:bg-white after:transition-colors after:content-[""]',
      'md:flex md:items-center',
      side === 'left' ? 'left-4' : 'right-4',
    )}
  >
    {children}
  </footer>
);

export default SideFooter;
