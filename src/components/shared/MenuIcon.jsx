import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = (props) => {
  const { isMenuOpen, setMenuOpen } = props;

  return (
    <div className="menu-wrapper">
      <div
        className={isMenuOpen ? "menu-icon active" : "menu-icon"}
        onClick={() => setMenuOpen((prevState) => !prevState)}
        role="menuitem"
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
