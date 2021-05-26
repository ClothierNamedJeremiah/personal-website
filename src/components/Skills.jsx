import React from 'react';
import Image from 'next/image';

import styles from '../scss/modules/Skills.module.scss';

const skillsMap = [
  {
    src: 'java.svg',
    alt: 'Java Logo',
    description: 'Java',
    className: 'java',
  },
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
  {
    src: 'git.svg',
    alt: 'git Logo',
    description: 'Git',
  },
];

const Skills = () => (
  <div className={styles.wrapper}>
    <section>
      <h3 className={`fs-large fc-yellow ${styles.title}`}>Technologies</h3>
      <p className={styles.description}>
        I am constantly experimenting with new technologies; however, the list below only contains
        technologies which I use on a day-to-day basis.
      </p>
      <ul className={styles['skills-list']}>
        {skillsMap.map(({
          src, alt, description, className,
        }) => (
          <li key={src}>
            <div className={styles['skill-wrapper']}>
              <div className={styles.skill}>
                <Image
                  src={`/images/skills/${src}`}
                  alt={alt}
                  layout="fill"
                  objectFit="contain"
                  className={styles[className]}
                />
              </div>
            </div>
            <p className={styles['skill-description']}>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Skills;
