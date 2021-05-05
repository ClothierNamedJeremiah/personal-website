import React from 'react';
import PropTypes from 'prop-types';

import ProjectShowcaseMobile from '../../components/ProjectShowcaseMobile';
import ProjectShowcaseDesktop from '../../components/ProjectShowcaseDesktop';

import useViewport from '../../hooks/useViewport';
import getPortfolioProjects from '../../data/portfolio';

const Portfolio = (props) => {
  const { projects } = props;

  const width = useViewport();
  const widthBreakpoint = 1100;

  let ProjectShowcase;
  if (width < widthBreakpoint) {
    ProjectShowcase = ProjectShowcaseMobile;
  } else {
    ProjectShowcase = ProjectShowcaseDesktop;
  }

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title fs-large fc-yellow">
        Some Things I&apos;ve Built
      </h1>
      {projects.map(({ title, description, imageClassName, tags, sourceCodeUrl, liveSiteUrl }) => (
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
          <span className="project-separator-angled" />
        </React.Fragment>
      ))}
    </div>
  );
};

const projectExactShape = PropTypes.exact({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceCodeUrl: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string.isRequired,
});

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(projectExactShape).isRequired,
};

export const getStaticProps = async (context) => ({
  props: getPortfolioProjects(), // will be passed to the page component as props
});

export default Portfolio;
