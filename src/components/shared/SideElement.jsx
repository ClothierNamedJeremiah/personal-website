import React from 'react';
import PropTypes from 'prop-types';

const SideElement = ({ children, side }) => (
  <aside className="side-element" data-side={side}>
    {children}
  </aside>
);

SideElement.propTypes = {
  children: PropTypes.node.isRequired,
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default SideElement;
