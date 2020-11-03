import './App.css';
import React from 'react';
import Menu from './components/Menu.js'

import ParticlesBg from 'particles-bg'


function App() {
  return (
    <div className="main-container">
      {/* <ParticlesBg type="fountain" color="pink" bg={true} num={1}/> */}
      <Menu />
    </div>
  );
}

export default App;
