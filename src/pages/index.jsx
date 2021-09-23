import React, { useEffect } from 'react';

import Welcome from '../components/Welcome';
import Skills from '../components/Skills';

import styles from '../scss/pages/Home.module.scss';

const Home = () => {
  useEffect(() => {
    global.analytics.page('Home');
  }, []);

  return (
    <main className={styles.container}>
      <Welcome />
      <Skills />
    </main>
  );
};

export default Home;
