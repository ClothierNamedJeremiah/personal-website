import { hot } from 'react-hot-loader/root';
import React from 'react';

import About from './components/About';
import Contactbar from './components/Contactbar';
import Socialbar from './components/Socialbar';
import Navbar from './components/Navbar';

const App = () => (
  <div className="app">
    <Navbar />
    <About />
    <About />
    <Socialbar />
    <Contactbar />
  </div>
);

export default hot(App);
