import React from 'react';

import Link from 'components/Link';
import styles from './Welcome.module.css';

const Welcome = () => (
  <div className={`${styles.container} flex flex-col items-center`}>
    <div>
      <span className="fs-normal fc-yellow">Hi, my name is</span>
      <h1 className="fs-x-large font-bold leading-snug">Jeremiah Clothier</h1>
      <p className="fs-large mb-0 font-bold leading-none opacity-60">
        I build things on the web for fun.
      </p>
      <p className="fs-normal fc-light-purple mt-4 mb-8 max-w-[600px] leading-7">
        I am a software engineer with a constant desire to figure out why and
        how things work the way they do. I enjoy building websites and teaching
        others along the way.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
        <Link
          href="mailto:clothiernamedjeremiah@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          Get in Touch
        </Link>
        <Link
          href="https://jeremiah-clothier.s3-us-west-2.amazonaws.com/resume.pdf"
          rel="noreferrer"
          target="_blank"
        >
          View Resume
        </Link>
      </div>
    </div>
    <aside className={styles.j} />
  </div>
);

export default Welcome;
