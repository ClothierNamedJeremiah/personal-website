import { hot } from 'react-hot-loader/root';
import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

const App = () => (
  <div className="app">
    <Navbar />
    <About />
    <Footer />
  </div>
);

export default hot(App);
