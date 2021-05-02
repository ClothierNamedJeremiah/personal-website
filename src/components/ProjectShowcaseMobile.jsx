import React from 'react';
import PropTypes from 'prop-types';

const ProjectShowcaseMobile = (props) => {
  const {
    title,
    description,
    imageClassName,
    tags,
    sourceCodeUrl,
    liveSiteUrl,
  } = props;

  return (
    <div className="project-showcase">
      <div className="project-header">
        <h2 className="fs-normal fc-yellow fw-normal">Project Showcase</h2>
        <h3 className="fw-normal">{title}</h3>
      </div>
      {/* <img className="project-preview-image" src={image} alt={`landing page for ${title} project`} /> */}
      <div className={`project-preview-image ${imageClassName}`} />
      <p className="project-description">{description}</p>
      <ul className="project-tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-showcase-actions">
        <a
          className="btn-link-base btn-link-primary"
          href={sourceCodeUrl}
        >
          Source Code
        </a>
        <a
          className="btn-link-base btn-link-primary"
          href={liveSiteUrl}
        >
          Live Website
        </a>
      </div>
    </div>
  );
};

ProjectShowcaseMobile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceCodeUrl: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string.isRequired,
};

export default ProjectShowcaseMobile;
