import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/workhistoryitem.less';

const WorkHistoryItem = (props) => {
  const {
    className,
    title,
    company,
    dateStr,
    accomplishments,
    url,
  } = props;
  return (
    <section className={`job-container ${className}`}>
      <h3 className="job-title">
        {title}
        <span className="job-company">
          @
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label="company website"
          >
            {company}
          </a>
        </span>
      </h3>
      <div className="job-duration">{dateStr}</div>
      <ul className="job-accomplishments">
        {accomplishments.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

WorkHistoryItem.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  dateStr: PropTypes.string.isRequired,
  accomplishments: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

export default WorkHistoryItem;
