import React from 'react';
import Image from 'next/image';

import styles from './Skills.module.css';

const comfortableSkills = [
  {
    src: 'javascript.svg',
    alt: 'JavaScript Logo',
    description: 'JavaScript (ES6+)',
  },
  {
    src: 'html.svg',
    alt: 'HTML5 Logo',
    description: 'HTML',
  },
  {
    src: 'css.svg',
    alt: 'CSS3 Logo',
    description: 'CSS',
  },
  {
    src: 'less.svg',
    alt: 'LESS Logo',
    description: 'LESS',
  },
  {
    src: 'java.svg',
    alt: 'Java Logo',
    description: 'Java',
    className: 'java',
  },
  {
    src: 'react.svg',
    alt: 'React Logo',
    description: 'React',
  },
  {
    src: 'redux.svg',
    alt: 'Redux Logo',
    description: 'Redux',
  },
  {
    src: 'jquery.svg',
    alt: 'jQuery Logo',
    description: 'jQuery',
    className: 'jquery',
  },
  {
    src: 'webpack.svg',
    alt: 'Webpack Logo',
    description: 'Webpack',
  },
  {
    src: 'babel.svg',
    alt: 'Babel Logo',
    description: 'Babel',
  },
  {
    src: 'eslint.svg',
    alt: 'ESLint Logo',
    description: 'ESLint',
  },
  {
    src: 'jasmine.svg',
    alt: 'Jasmine Logo',
    description: 'Jasmine',
  },
  {
    src: 'karma.svg',
    alt: 'Karma Logo',
    description: 'Karma',
  },
  {
    src: 'selenium.svg',
    alt: 'Selenium Logo',
    description: 'Selenium',
    className: 'selenium',
  },
  {
    src: 'git.svg',
    alt: 'git Logo',
    description: 'Git',
  },
];

const lessComfortableSkills = [
  {
    src: 'typescript.svg',
    alt: 'Typescript Logo',
    description: 'Typescript',
  },
  {
    src: 'nextjs.svg',
    alt: 'Next.js Logo',
    description: 'Next.js',
  },
  {
    src: 'azure.svg',
    alt: 'Azure Logo',
    description: 'Azure',
    className: 'azure',
  },
  {
    src: 'terraform.svg',
    alt: 'Terraform Logo',
    description: 'Terraform',
  },
  {
    src: 'python.svg',
    alt: 'Python Logo',
    description: 'Python',
  },
];

const AWSLoader = ({ src }: { src: string }) =>
  `https://jeremiah-clothier.s3-us-west-2.amazonaws.com${src}`;

const Skills = () => (
  <div className={styles.wrapper}>
    <section>
      <h3 className={`fs-large fc-yellow ${styles.title}`}>Technologies</h3>
      <article>
        <p className={styles.description}>
          As a full-stack software engineer I get the opportunity to work with a
          bunch of new and exciting technologies. Here is a list of technologies
          which I use on a day-to-day basis.
        </p>
        <ul className={styles['skills-list']}>
          {comfortableSkills.map(({ src, alt, description, className }) => (
            <li key={src}>
              <div className={styles['skill-wrapper']}>
                <div className={styles.skill}>
                  <Image
                    loader={AWSLoader}
                    src={`/images/skills/${src}`}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                    className={className ? styles[className] : ''}
                    unoptimized
                  />
                </div>
              </div>
              <p className={styles['skill-description']}>{description}</p>
            </li>
          ))}
        </ul>
      </article>
      <div className={styles.separator} />
      <article>
        <p className={styles.description}>
          Learning about new technologies and having the opportunity to use so
          many different technologies is one of my favorite things about being a
          software engineer. Here are some other technologies I enjoy using, but
          do not use on a day-to-day basis.
        </p>
        <ul className={styles['skills-list']}>
          {lessComfortableSkills.map(({ src, alt, description, className }) => (
            <li key={src}>
              <div className={styles['skill-wrapper']}>
                <div className={styles.skill}>
                  <Image
                    loader={AWSLoader}
                    src={`/images/skills/${src}`}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                    className={className ? styles[className] : ''}
                    unoptimized
                  />
                </div>
              </div>
              <p className={styles['skill-description']}>{description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  </div>
);

export default Skills;
