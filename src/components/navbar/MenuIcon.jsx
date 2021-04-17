import React from 'react';

const MenuIcon = () => {
  const onClick = (e) => {
    const { currentTarget } = e
    if (currentTarget.classList.contains('active')) {
      currentTarget.classList.remove('active');
    } else {
      currentTarget.classList.add('active');
    }
  };

  return (
    <div className="menu-wrapper">
      <div
        className="menu-icon"
        onClick={onClick}
        role="menuitem"
        tabIndex={-1}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  )
};

export default MenuIcon;
