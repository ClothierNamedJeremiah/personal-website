import React from 'react';

import Welcome from './Welcome';
import WorkHistoryList from './WorkHistoryList';
import Languages from './Languages';

import '../../styles/about.less';


const About = () => (
  <main className="about">
    <Welcome />
    <Languages />
    <WorkHistoryList />
  </main>
);

export default About;
