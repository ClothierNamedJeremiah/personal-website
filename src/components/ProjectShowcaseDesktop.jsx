import React from 'react';
import PropTypes from 'prop-types';

import styles from '../scss/components/ProjectShowcaseDesktop.module.scss';

const ProjectShowcaseDesktop = (props) => {
  const {
    title,
    description,
    imageClassName,
    tags,
    sourceCodeUrl,
    liveSiteUrl,
  } = props;

  return (
    <div className={styles.container}>
      <div className={`${styles['project-preview-image']} ${imageClassName}`} />
      <div className={styles['project-details']}>
        <div className={styles['project-header']}>
          <h2 className="fs-normal fc-yellow fw-normal">Project Showcase</h2>
          <h3 className="fw-normal">{title}</h3>
        </div>
        <p className={styles['project-description']}>{description}</p>
        <ul className={styles['project-tags']}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className={styles['project-actions']}>
          <a
            className="btn-link-base btn-link-primary"
            href={sourceCodeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            className="btn-link-base btn-link-primary"
            href={liveSiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Website
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectShowcaseDesktop.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceCodeUrl: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string.isRequired,
};

export default ProjectShowcaseDesktop;
