import clsx from 'clsx';
import Image from 'next/image';

import styles from './Skills.module.css';

import JavaScriptIcon from './Icons/JavaScriptIcon';
import HTMLIcon from './Icons/HTMLIcon';
import CSSIcon from './Icons/CSSIcon';

const COMFORTABLE_SKILL_ICONS = [
  {
    component: JavaScriptIcon,
    labelText: 'JavaScript ES6',
  },
  {
    component: HTMLIcon,
    labelText: 'HTML',
  },
  {
    component: CSSIcon,
    labelText: 'CSS',
  },
];

const comfortableSkills = [
  {
    src: 'typescript.svg',
    alt: 'Typescript Logo',
    description: 'Typescript',
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
  {
    src: 'java.svg',
    alt: 'Java Logo',
    description: 'Java',
    className: 'java',
  },
];

const AWSLoader = ({ src }: { src: string }) =>
  `https://jeremiah-clothier.s3-us-west-2.amazonaws.com${src}`;

const Skills = () => (
  <div className="flex items-center">
    <section>
      <h2 className={`fs-large fc-yellow ${styles.title}`}>Technologies</h2>
      <article>
        <p className={styles.description}>
          As a full-stack software engineer I get the opportunity to work with a bunch of new and
          exciting technologies. Here is a list of technologies which I use on a day-to-day basis.
        </p>
        <ul className="my-12 flex flex-wrap justify-center gap-8">
          {COMFORTABLE_SKILL_ICONS.map(({ component: Icon, labelText }) => (
            <li className="basis-[100px]" key={labelText}>
              <div
                className={clsx(
                  'flex h-[100px] w-[100px] items-center justify-center',
                  'rounded-full bg-purple-300 drop-shadow-md',
                )}
              >
                <Icon aria-labelledby="id-1" />
              </div>
              <p className="mt-2 text-center" id="id-1">
                {labelText}
              </p>
            </li>
          ))}

          {comfortableSkills.map(({ src, alt, description, className }) => (
            <li key={src} className={styles.skillListItem}>
              <div className={styles['skill-wrapper']}>
                <div className={styles.skill}>
                  <Image
                    loader={AWSLoader}
                    src={`/images/skills/${src}`}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                    className={className ? styles[className] : undefined}
                    unoptimized
                  />
                </div>
              </div>
              <p className="mt-2 text-center">{description}</p>
            </li>
          ))}
        </ul>
      </article>
      <span className={styles.separator} />
      <article>
        <p className={styles.description}>
          Learning about new technologies and having the opportunity to use so many different
          technologies is one of my favorite things about being a software engineer. Here are some
          other technologies I enjoy using, but do not use on a day-to-day basis.
        </p>
        <ul className="my-12 flex flex-wrap justify-center gap-8">
          {lessComfortableSkills.map(({ src, alt, description, className }) => (
            <li key={src} className={styles.skillListItem}>
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
              <p className="text-center">{description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  </div>
);

export default Skills;
