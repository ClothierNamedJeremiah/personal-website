import React from 'react';
import { Icon } from '@iconify/react';

import githubAlt from '@iconify/icons-codicon/github-alt';
import linkedinIcon from '@iconify/icons-feather/linkedin';
import mediumCircleFilled from '@iconify/icons-ant-design/medium-circle-filled';

import '../styles/socialbar.less';

const Socialbar = () => (
  <div className="social-bar">
    <a
      className="social-link"
      href="https://github.com/ClothierNamedJeremiah"
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="mi"
        icon={githubAlt}
      />
    </a>
    <a
      className="social-link"
      href="https://www.linkedin.com/in/jeremiah-clothier/"
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="mi"
        icon={linkedinIcon}
      />
    </a>
    <a
      className="social-link"
      href="https://clothiernamedjeremiah.medium.com/"
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="mi"
        icon={mediumCircleFilled}
      />
    </a>
  </div>
);

export default Socialbar;
