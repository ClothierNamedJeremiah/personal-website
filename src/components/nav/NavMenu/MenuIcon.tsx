import * as React from 'react';
import styles from './MenuIcon.module.css';

type Props = {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuIcon = (props: Props) => {
  const { isMenuOpen, setMenuOpen } = props;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setMenuOpen((prevState) => !prevState);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={isMenuOpen ? `${styles.icon} ${styles.active}` : styles.icon}
        onClick={() => setMenuOpen((prevState) => !prevState)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={-1}
        title={isMenuOpen ? 'collapse navigation menu' : 'expand navigation menu'}
      >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default MenuIcon;
