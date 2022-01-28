import React from 'react';

import Welcome from 'components/Welcome';
import Skills from 'components/Skills';

import styles from './Home.module.css';

const Home = () => (
  <main className={styles.container}>
    <Welcome />
    <Skills />
  </main>
);

export default Home;
