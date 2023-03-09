import React, { useState } from 'react';
import Helmet from './components/helmet.js'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Create a Helmet() component for each helmet mod */}
      <div id="helmet-mods">
        <Helmet/>
      </div>
    </div>
  );
}

export default App;
