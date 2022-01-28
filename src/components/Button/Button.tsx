import React from 'react';
import styles from './Button.module.css';

type Props = React.ComponentProps<'a'> & {
  href: string;
  text: string;
};

const Button = ({ href, text }: Props) => (
  <a className={`${styles.btnBase} ${styles.btnPrimary}`} href={href}>
    {text}
  </a>
);

export default Button;
