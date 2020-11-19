import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import Rank from './components/Rank/Rank';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1000,
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions} />
      <Navigation /> 
      <Logo />
      <Rank />
      <ImageLink />
      {/* <FaceRecognition />} */}
    </div>
  );
}

export default App;
