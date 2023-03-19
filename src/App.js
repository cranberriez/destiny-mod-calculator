import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Armor from './components/armor.js'
import ArmorCharge from './components/armorCharge.js';
import Breakdown from './components/breakdown.js'
import './App.css';
import data from './data/data.json'

function App() {
  const [helmetMods, setHelmetMods] = useState(data.helmet);
  const [armMods, setArmMods] = useState(data.arm);
  const [legMods, setLegMods] = useState(data.leg);
  const [classMods, setClassMods] = useState(data.class);
  const [armorCharge, setArmorCharge] = useState({ charge: 0 })

  return (
    <div className="App">
        <Router >
            <nav>
                <NavLink to="/helmet">Helmet</NavLink>
                <NavLink to="/arm">Arm</NavLink>
                <NavLink to="/leg">Leg</NavLink>
                <NavLink to="/class">Class</NavLink>
            </nav>

            <main>
                <Routes>
                    <Route path='/helmet' element={
                        <Armor
                            modCount={helmetMods}
                            setModCount={setHelmetMods}
                        />
                    }/>

                    <Route path='/arm' element={
                        <Armor
                            modCount={armMods}
                            setModCount={setArmMods}
                            armorCharge={armorCharge}
                        />
                    }/>
                    <Route path='/leg' element={
                        <Armor
                            modCount={legMods}
                            setModCount={setLegMods}
                        />
                    }/>
                    <Route path='/class' element={
                        <Armor
                            modCount={classMods}
                            setModCount={setClassMods}
                            armor Charge={armorCharge}
                        />
                    }/>
                </Routes>
            </main>
        
            <div className="breakdown">
                {/* <ArmorCharge
                    armorCharge={armorCharge}
                    setArmorCharge={setArmorCharge}
                />
                <Breakdown
                    helmetMods={helmetMods}
                    armMods={armMods}
                    legMods={legMods}
                    classMods={classMods}
                    armorCharge={armorCharge}
                /> */}
            </div>
        </Router>
    </div>
  );
}

export default App;
