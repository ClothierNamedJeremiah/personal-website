import React from 'react';
import PropTypes from 'prop-types';

import styles from 'scss/modules/ProjectShowcase.module.scss';

const ProjectShowcase = (props) => {
  const {
    title,
    description,
    imageClassName,
    tags,
    sourceCodeUrl,
    liveSiteUrl,
  } = props;

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2 className="fs-normal fc-yellow fw-normal">Project Showcase</h2>
        <h3 className="fw-normal">{title}</h3>
      </header>
      <div className={`${styles['preview-image']} ${styles[imageClassName]}`} />
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className="btn-link-base btn-link-primary" href={sourceCodeUrl}>
          Source Code
        </a>
        <a className="btn-link-base btn-link-primary" href={liveSiteUrl}>
          Live Website
        </a>
      </div>
    </article>
  );
};

ProjectShowcase.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceCodeUrl: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string.isRequired,
};

export default ProjectShowcase;
