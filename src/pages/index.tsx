import React from 'react';

import Welcome from 'components/Welcome';
import Skills from 'components/Skills';

import styles from './Home.module.css';

const Home = () => (
  <div className={`${styles.container} m-4`}>
    <Welcome />
    <Skills />
  </div>
);

export default Home;
