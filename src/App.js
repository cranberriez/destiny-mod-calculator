import React, { useState } from 'react';
import Helmet from './components/helmet.js'
import './App.css';

function App() {

  const [helmetModCount, setHelmetModCount] = useState({
    handsOn: { count: 0, stacks: [0.0075, 0.025, 0.029, 0.029] },
    ashesToAssets: { count: 0, stacks: [0.0075, 0.048, 0.052, 0.048] },
    totalMods: 0,
  });

  return (
    <div className="App">
      {/* Create a Helmet() component for each helmet mod */}
      <div id="helmet-mods">
        <Helmet modCount={helmetModCount} setModCount={setHelmetModCount}/>
        <h3>Super Energy on Kill</h3>
        <p>Melee Kill: %{((helmetModCount.handsOn.stacks[helmetModCount.handsOn.count]) * 100).toFixed(2)}</p>
        <p>Nade Kill: %{((helmetModCount.ashesToAssets.stacks[helmetModCount.ashesToAssets.count]) * 100).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
