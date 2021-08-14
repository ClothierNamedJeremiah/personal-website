import React from 'react';
import PropTypes from 'prop-types';

import styles from 'scss/modules/SideElement.module.scss';

const SideElement = ({ children, side }) => (
  <aside className={styles.container} data-side={side}>
    {children}
  </aside>
);

SideElement.propTypes = {
  children: PropTypes.node.isRequired,
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default SideElement;
