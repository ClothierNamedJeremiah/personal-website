import React from 'react';

import Welcome from '../components/Welcome';
import Skills from '../components/Skills';

import styles from '../scss/pages/Home.module.scss';

const Home = () => (
  <main className={styles.container}>
    <Welcome />
    <Skills />
  </main>
);

export default Home;
