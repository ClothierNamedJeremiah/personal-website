import { ProjectType } from 'data/portfolio';
import React from 'react';

import Link from 'components/Link';
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
        <h2 className="fs-normal fc-yellow font-normal">Project Showcase</h2>
        <h3 className="font-normal">{title}</h3>
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
        <Link href={sourceCodeUrl}>Source Code</Link>
        <Link href={liveSiteUrl}>Live Website</Link>
      </div>
    </article>
  );
};

export default ProjectShowcase;
