import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import getBlogPosts from '../../data/blogs';

import styles from '../../scss/modules/Blog.module.scss';

const Blog = (props) => {
  const { blogs } = props;

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} fs-large fc-yellow`}>
        Blogs I've Written
      </h1>
      <p className={styles.summary}>
        CSS tutorials, in-depth solutions to coding questions, front-end designs,
        React fundamentals, and everything in between.
      </p>
      <main className={styles.main}>
        {blogs.map(({ title, shortDescription, datePublished, estimatedTimeToRead, blogPostUrl }) => (
          <article key={title} className={styles.article}>
            <header className={styles.header}>
              <h3 className={`fc-yellow fs-normal ${styles.title}`}>
                <Link href={blogPostUrl}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={blogPostUrl}
                  >
                    {title}
                  </a>
                </Link>
              </h3>
              <small>
                {datePublished}
                &nbsp;• ☕️ &nbsp;
                {estimatedTimeToRead}
              </small>
            </header>
            <p className={styles.description}>
              {shortDescription}
            </p>
          </article>
        ))}
      </main>
      <aside className={styles['more-coming-soon']}>
        <small>
          More coming soon...
        </small>
      </aside>
    </div>
  );
};

const BlogCardExactShape = PropTypes.exact({
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
  estimatedTimeToRead: PropTypes.string.isRequired,
  blogPostUrl: PropTypes.string.isRequired,
});

Blog.propTypes = {
  blogs: PropTypes.arrayOf(BlogCardExactShape).isRequired,
};

export const getStaticProps = async (context) => ({
  props: getBlogPosts(), // will be passed to the page component as props
});

export default Blog;
