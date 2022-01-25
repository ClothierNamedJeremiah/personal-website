import React from 'react';

import styles from '../scss/modules/Welcome.module.scss';

const Welcome = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div>
        <span className="fs-normal fc-yellow">Hi, my name is</span>
        <h1 className={`${styles.title} fs-x-large`}>Jeremiah Clothier</h1>
        <h2 className={`${styles.subtitle} fs-large`}>I build things on the web for fun.</h2>
        <p className={`${styles.bio} fs-normal fc-light-purple`}>
          I am a software engineer with a constant desire to figure out why
          and how things work the way they do. I enjoy building websites and
          teaching others along the way.
        </p>
        <div className={styles.links}>
          <a
            className="btn-link-base btn-link-primary"
            href="mailto:clothiernamedjeremiah@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Get in Touch
          </a>
          <a
            className="btn-link-base btn-link-primary"
            href="https://jeremiah-clothier.s3-us-west-2.amazonaws.com/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
      <aside className={styles.j} />
    </div>
  </div>
);

export default Welcome;
