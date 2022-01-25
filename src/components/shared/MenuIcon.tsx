import React from 'react';

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
    <div className="menu-wrapper">
      <div
        className={isMenuOpen ? 'menu-icon active' : 'menu-icon'}
        onClick={() => setMenuOpen((prevState) => !prevState)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={-1}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};

export default MenuIcon;
