import { ProjectType } from 'data/portfolio';
import React from 'react';

import Button from 'components/Button';
import styles from './ProjectShowcase.module.css';

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
        <Button href={sourceCodeUrl} text="Source Code" />
        <Button href={liveSiteUrl} text="Live Website" />
      </div>
    </article>
  );
};

export default ProjectShowcase;
