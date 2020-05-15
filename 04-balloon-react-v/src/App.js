import React from 'react';
import './App.css';
import cloud from './img/cloud.png';
import balloon from './img/balloon.png';
import Animated from './Animated';

function App() {
  return (
    <div className="balloon-animation">


    <Animated 
      src={cloud} 
      alt=" " 
      className="anim-bg cloud"
      ratioX="0.36" 
      ratioY="0.34"
    />

    <Animated 
      src={cloud} 
      alt=" " 
      className="anim-bg cloud"
      ratioX="0.2" 
      ratioY="0.23"
    />

    <Animated 
      src={cloud} 
      alt=" " 
      className="anim-bg cloud"
      ratioX="0.26" 
      ratioY="0.34"
    />

    <Animated 
      src={cloud} 
      alt=" " 
      className="anim-bg cloud"
      ratioX="0.1" 
      ratioY="0.11"
    />

    <Animated 
      src={cloud} 
      alt=" " 
      className="anim-bg cloud"
      ratioX="0.13" 
      ratioY="0.53"
    />

    <Animated 
      src={cloud} 
      alt=" " 
      className="anim-bg cloud"
      ratioX="0.23" 
      ratioY="0.41"
    />

    <Animated 
      src={balloon} 
      alt=" " 
      className="anim-bg balloon"
      ratioX="0.07" 
      ratioY="0.3"
    />

    </div>
  );
}

export default App;
