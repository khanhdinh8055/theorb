import React from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './Components/HomeComponent/Intro';
import Story from './Components/HomeComponent/Story';

function App() {
  return (
    <div id="Landing">
        <Intro/>
        <Story/>
    </div>
  );
}

export default App;
