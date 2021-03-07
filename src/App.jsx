import { hot } from 'react-hot-loader/root';
import React from 'react';

import About from './components/About';
import Contactbar from './components/Contactbar';
import Socialbar from './components/Socialbar';

const App = () => (
  <div className="app">
    <About />
    <Socialbar />
    <Contactbar />
  </div>
);

export default hot(App);
