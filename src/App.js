import React, { useState } from 'react';
import Helmet from './components/helmet.js'
import Leg from './components/leg.js'
import ArmorCharge from './components/armorCharge.js';
import Breakdown from './components/breakdown.js'
import './App.css';

function App() {
  const [helmetModCount, setHelmetModCount] = useState({
    handsOn: { count: 0, stacks: [0.0075, 0.025, 0.029, 0.029], type: "melee-kill", generates: "super" },
    ashesToAssets: { count: 0, stacks: [0.0075, 0.048, 0.052, 0.048], type: "grenade-kill", generates: "super" },
    totalMods: 0,
  });

  const [legModCount, setlegModCount] = useState({
    handsOn: { count: 0, stacks: [0.0075, 0.025, 0.029, 0.029] },
    ashesToAssets: { count: 0, stacks: [0.0075, 0.048, 0.052, 0.048] },
    totalMods: 0,
  });

  const [armorCharge, setArmorChage] = useState({
    charge: 0,
  })

  return (
    <div className="App">
      <Helmet modCount={helmetModCount} setModCount={setHelmetModCount}/>
      <Leg/>
      <ArmorCharge armorCharge={armorCharge} setArmorCharge={setArmorChage}/>
      <Breakdown helmetMods={helmetModCount}/>
    </div>
  );
}

export default App;
