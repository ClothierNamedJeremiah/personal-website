import React from 'react';

import styles from 'scss/modules/SideElement.module.scss';

type Props = {
  children: React.ReactNode;
  side: 'left' | 'right';
};

const SideElement = ({ children, side }: Props) => (
  <aside className={`${styles.container} ${styles.animated}`} data-side={side}>
    {children}
  </aside>
);

export default SideElement;
