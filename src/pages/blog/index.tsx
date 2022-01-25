import React from 'react';
import Link from 'next/link';

import getBlogPosts, { BlogType } from 'data/blogs';

import styles from 'scss/modules/Blog.module.scss';

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

type Props = {
  blogs: BlogType[];
};

const Blog = (props: Props) => {
  const { blogs } = props;

  return (
    <main className={styles.container}>
      <h1 className={`${styles.title} fs-large fc-yellow`}>
        Blogs I&apos;ve Written
      </h1>
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
                    <span>{estimatedTimeToRead}</span>
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

export const getStaticProps = async () => ({
  props: getBlogPosts(), // will be passed to the page component as props
});

export default Blog;
