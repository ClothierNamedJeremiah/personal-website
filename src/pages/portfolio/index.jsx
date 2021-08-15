import React from 'react';
import PropTypes from 'prop-types';

import ProjectShowcase from 'components/ProjectShowcase';

import getPortfolioProjects from 'data/portfolio';

import styles from 'scss/pages/Portfolio.module.scss';

const Portfolio = (props) => {
  const { projects } = props;

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} fs-large fc-yellow`}>
        Some Things I&apos;ve Built
      </h1>
      {projects.map(
        ({
          title,
          description,
          imageClassName,
          tags,
          sourceCodeUrl,
          liveSiteUrl,
        }) => (
          <React.Fragment key={title}>
            <ProjectShowcase
              key={title}
              title={title}
              description={description}
              imageClassName={imageClassName}
              tags={tags}
              sourceCodeUrl={sourceCodeUrl}
              liveSiteUrl={liveSiteUrl}
            />
            <span className={styles.separator} />
          </React.Fragment>
        ),
      )}
    </div>
  );
};

const Project = PropTypes.exact({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceCodeUrl: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string.isRequired,
});

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(Project).isRequired,
};

export const getStaticProps = async () => ({
  props: getPortfolioProjects(), // will be passed to the page component as props
});

export default Portfolio;
