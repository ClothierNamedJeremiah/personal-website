import React from 'react';

import ProjectShowcaseMobile from '../../components/ProjectShowcaseMobile';
import ProjectShowcaseDesktop from '../../components/ProjectShowcaseDesktop';

import useViewport from '../../hooks/useViewport';

const PROJECTS = [
  {
    title: 'Spotify Favorites',
    description: "Have you ever wondered which songs and artists you've spent the most time listening to on Spotify? This responsive web application lets you quickly see which artists and songs you've listened to the most over the past month, three months, and several years. You can even listen to your most popular songs on this website!",
    imageClassName: 'spotify-favorites',
    tags: ['Axios', 'React', 'LESS', 'Node', 'Express', 'Figma', 'Babel', 'Webpack'],
    sourceCodeUrl: 'https://github.com/ClothierNamedJeremiah/spotify-favorites-frontend',
    liveSiteUrl: 'https://spotify-favorites.netlify.app/',
  },
  {
    title: 'Personal Website',
    description: 'I created a personal website to showcase some of my personal projects and keep track of my blogs. My personal website is where I experiment with new technology and create things',
    imageClassName: 'personal-website',
    tags: ['SCSS', 'React', 'Material UI', 'NextJS', 'Figma'],
    sourceCodeUrl: 'https://github.com/ClothierNamedJeremiah/personal-website',
    liveSiteUrl: 'http://jeremiah-clothier.netlify.app/',
  },
  {
    title: 'Student Loan Savings',
    description: 'I wanted to help educate students and show them how they could be saving money on their loans. I created and deployed a web application to AWS that shows students how much they could be saving over the lifetime of their student loans. Students can submit their data in seconds and instantly get information.',
    imageClassName: 'student-loan-savings',
    tags: ['AWS', 'S3', 'Route 53', 'Cloudfront', 'React', 'Figma'],
    sourceCodeUrl: 'https://github.com/ClothierNamedJeremiah/student-loan-savings',
    liveSiteUrl: 'https://studentloansavings.info/',
  },
  {
    title: 'My Reads',
    description: 'A bookshelf application that lets users select and categorize books they have read, are currently reading, or want to read. This project uses React, an API server, and client library that is used to persist information as the user interacts with the application.',
    imageClassName: 'my-reads',
    tags: ['React', 'Redux', 'HTML', 'CSS'],
    sourceCodeUrl: 'https://github.com/ClothierNamedJeremiah/MyReads',
    liveSiteUrl: 'https://my-react-bookshelf.netlify.app/',
  },
];

const Portfolio = () => {
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
      {PROJECTS.map(({ title, description, imageClassName, tags, sourceCodeUrl, liveSiteUrl }) => (
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

export default Portfolio;
