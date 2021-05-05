import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import getBlogPosts from '../../data/blogs';

import styles from '../../scss/modules/Blog.module.scss';

const Blog = (props) => {
  const { blogs } = props;

  return (
    <div className={styles.container}>
      <aside className={styles.foo}>
        <span className="j" />
        <p>
          Personal blog by Jeremiah Clothier.
          <br />
          I explain things with code, pictures, and words.
        </p>
      </aside>
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
