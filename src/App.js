import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Armor from './components/armor.js'
// import ArmorCharge from './components/armorCharge.js';
// import Breakdown from './components/breakdown.js'
import Navbar from './components/navbar.js'
import './App.css';
import data from './data/data.json'

function App() {
    const [helmetMods, setHelmetMods] = useState(data.helmet);
    const [armMods, setArmMods] = useState(data.arm);
    const [legMods, setLegMods] = useState(data.leg);
    const [classMods, setClassMods] = useState(data.class);
    const [armorCharge, setArmorCharge] = useState({ charge: 0 })

    const [modCounts, setModCounts] = useState({ 
        'helmet': 0,
        'arm': 0,
        'leg': 0,
        'class': 0,
    })

    const [slottedStates, setSlottedStates] = useState({
        'helmet': ['','',''],
        'arm': ['','',''],
        'leg': ['','',''],
        'class': ['','',''],
    });

    const armorPages = {
        'helmet': [helmetMods, setHelmetMods],
        'arm': [armMods, setArmMods],
        'leg': [legMods, setLegMods],
        'class': [classMods, setClassMods],
    }

    return (
        <div className="App">
            <Router>
                <Navbar modTotals={modCounts} />

                <main>
                    <Routes>
                        {Object.entries(armorPages).map(([name, data]) => (
                            <Route path={`/destiny-mod-calculator/${name}`} key={`${name}-route`} element={
                                <div>
                                    <Armor
                                        key={`${name}-armor`}
                                        armorName={name}
                                        modData={data[0]}
                                        setModData={data[1]}
                                        totalCount={modCounts[name]}
                                        setModCounts={setModCounts}
                                        armorCharge={armorCharge.charge}
                                        slotted={slottedStates[name]}
                                        setSlotted={(newSlotted) => setSlottedStates({...slottedStates, [name]: newSlotted})}
                                    />
                                </div>
                            }/>
                        ))}
                        
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
