import { hot } from 'react-hot-loader/root';
import React from 'react';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const App = () => (
  <div className="app">
    <Navbar />
    <About />
    <Footer />
  </div>
);

export default hot(App);
