import React from 'react';

import Welcome from '../components/Welcome';

import styles from '../scss/pages/Home.module.scss';

const Home = () => (
  <div className={styles.container}>
    <Welcome />
  </div>
);

export default Home;
