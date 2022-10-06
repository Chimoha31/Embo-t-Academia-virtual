import React from 'react';
import './App.scss';
import Classes from './pages/class/Classes';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className="gradient">
      App
      <Home />
      <Classes />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App

