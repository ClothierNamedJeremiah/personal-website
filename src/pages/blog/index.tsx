import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

import getBlogPosts, { BlogType } from 'data/blogs';

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
    <div className="my-8 mx-4 flex flex-col items-center">
      <h1
        className={clsx(
          'flex w-full items-center justify-between text-yellow-300',
          "after:inline-block after:h-0.5 after:flex-grow after:content-['']",
          'after:ml-2 after:bg-yellow-300',
          'fs-large',
        )}
      >
        Blogs I&apos;ve Written
      </h1>
      <article className="my-4">
        {blogs.map(
          (
            {
              title,
              shortDescription,
              datePublished,
              estimatedTimeToRead,
              blogPostUrl,
            },
            index,
          ) => {
            const date = new Date(datePublished);
            const monthName = months[date.getMonth()];

            const formattedDateString = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;

            return (
              <article
                key={title}
                className={clsx(index > 0 && 'mt-12', 'max-w-screen-sm')}
              >
                <header>
                  <h2 className="fs-normal text-yellow-300">
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href={blogPostUrl}
                      className="transition-colors hover:text-yellow-500"
                    >
                      {title}
                    </Link>
                  </h2>
                  <small>
                    <time dateTime={datePublished}>{formattedDateString}</time>
                    &nbsp;• ☕️ &nbsp;
                    <span>{estimatedTimeToRead}</span>
                  </small>
                </header>
                <p>{shortDescription}</p>
              </article>
            );
          },
        )}
      </article>
      <aside className="text-center font-bold tracking-widest text-gray-300">
        <small>More coming soon...</small>
      </aside>
    </div>
  );
};

export const getStaticProps = async () => ({
  props: getBlogPosts(), // will be passed to the page component as props
});

export default Blog;
