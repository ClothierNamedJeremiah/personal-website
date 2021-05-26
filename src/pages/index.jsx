import React from 'react';

import Welcome from '../components/Welcome';

import styles from '../scss/pages/Home.module.scss';

const Home = () => (
  <main className={styles.container}>
    <Welcome />
  </main>
);

export default Home;
