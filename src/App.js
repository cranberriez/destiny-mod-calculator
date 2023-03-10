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

  const [legModCount, setLegModCount] = useState({
    invigoration: { count: 0, stacks: [0, 0.10, 0.13, 0.15], type: "orb-pickup", generates: "melee"},
    innervation: { count: 0, stacks: [0, 0.10, 0.13, 0.15], type: "orb-pickup", generates: "grenade"},
    insulation: { count: 0, stacks: [0, 0.04, 0.056, 0.056], type: "orb-pickup", generates: "class"},
    absolution: { count: 0, stacks: [0, 0.05, 0.075, 0.10], type: "orb-pickup", generates: "all"},
    orbsOfRestoration: { count: 0, stacks: [0, 0.05, 0.125, 0.15], type: "orb-pickup", generates: "least-charged"},
    totalMods: 0,
  });

  const [armorCharge, setArmorChage] = useState({
    charge: 0,
  })

  return (
    <div className="App">
      <Helmet modCount={helmetModCount} setModCount={setHelmetModCount}/>
      <Leg modCount={legModCount} setModCount={setLegModCount}/>
      <ArmorCharge armorCharge={armorCharge} setArmorCharge={setArmorChage}/>
      <Breakdown helmetMods={helmetModCount} legMods={legModCount}/>
    </div>
  );
}

export default App;
