import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import getBlogPosts from '../../data/blogs';

import styles from '../../scss/modules/Blog.module.scss';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Blog = (props) => {
  const { blogs } = props;

  return (
    <main className={styles.container}>
      <h1 className={`${styles.title} fs-large fc-yellow`}>
        Blogs I&apos;ve Written
      </h1>
      <p className={styles.summary}>
        CSS tutorials, in-depth solutions to coding questions, front-end
        designs, React fundamentals, and everything in between.
      </p>
      <article className={styles['blogs-container']}>
        {blogs.map(
          ({
            title,
            shortDescription,
            datePublished,
            estimatedTimeToRead,
            blogPostUrl,
          }) => {
            const date = new Date(datePublished);
            const monthName = months[date.getMonth()];

            const formattedDateString = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;

            return (
              <article key={title} className={styles.article}>
                <header className={styles.header}>
                  <h3 className={`fc-yellow fs-normal ${styles.title}`}>
                    <Link href={blogPostUrl}>
                      <a target="_blank" rel="noreferrer" href={blogPostUrl}>
                        {title}
                      </a>
                    </Link>
                  </h3>
                  <small>
                    <time dateTime={datePublished}>{formattedDateString}</time>
                    &nbsp;• ☕️ &nbsp;
                    {estimatedTimeToRead}
                  </small>
                </header>
                <p className={styles.description}>{shortDescription}</p>
              </article>
            );
          },
        )}
      </article>
      <aside className={styles['more-coming-soon']}>
        <small>More coming soon...</small>
      </aside>
    </main>
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

export const getStaticProps = async () => ({
  props: getBlogPosts(), // will be passed to the page component as props
});

export default Blog;
