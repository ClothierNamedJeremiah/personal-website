import { Fragment } from 'react';

import ProjectShowcase from 'components/ProjectShowcase';
import getPortfolioProjects, { ProjectType } from 'data/portfolio';
import styles from './Portfolio.module.css';

type Props = {
  projects: ProjectType[];
};

const Portfolio = (props: Props) => {
  const { projects } = props;

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title} fs-large fc-yellow`}>Some Things I&apos;ve Built</h1>
      {projects.map(({ title, description, tags, sourceCodeUrl, liveSiteUrl, previewImageUrl }) => (
        <Fragment key={title}>
          <ProjectShowcase
            key={title}
            title={title}
            description={description}
            tags={tags}
            sourceCodeUrl={sourceCodeUrl}
            liveSiteUrl={liveSiteUrl}
            previewImageUrl={previewImageUrl}
          />
          <span className={styles.separator} />
        </Fragment>
      ))}
    </div>
  );
};

export const getStaticProps = async () => ({
  props: getPortfolioProjects(), // will be passed to the page component as props
});

export default Portfolio;
