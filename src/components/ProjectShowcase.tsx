import { ProjectType } from 'data/portfolio';
import React from 'react';

import styles from 'scss/modules/ProjectShowcase.module.scss';

const ProjectShowcase = (props: ProjectType) => {
  const {
    title,
    description,
    tags,
    sourceCodeUrl,
    liveSiteUrl,
    previewImageUrl,
  } = props;

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2 className="fs-normal fc-yellow fw-normal">Project Showcase</h2>
        <h3 className="fw-normal">{title}</h3>
      </header>
      <div className={styles.preview}>
        <img
          className={styles.image}
          src={previewImageUrl}
          alt="project preview"
        />
      </div>
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

export default ProjectShowcase;
