import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = (props) => {
  const { isMenuOpen, setMenuOpen } = props;

  const handleKeyDown = (event) => {
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

MenuIcon.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default MenuIcon;
