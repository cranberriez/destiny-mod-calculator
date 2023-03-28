import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// USING HASHROUTER instead of BrowserRouter so app works with github pages static host
import Armor from './components/armor.js'
import ArmorCharge from './components/armorCharge.js';
import Breakdown from './components/breakdown.js'
import Navbar from './components/navbar.js'
import './App.css';
import data from './data/data.json'

function App() {
    const [helmetMods, setHelmetMods] = useState(data.helmet);
    const [armMods, setArmMods] = useState(data.arm);
    const [legMods, setLegMods] = useState(data.leg);
    const [classMods, setClassMods] = useState(data.class);
    const [armorCharge, setArmorCharge] = useState({ charge: 0 })

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
            <Navbar slottedStates={slottedStates} />

            <main>
                <Routes>
                    <Route path='/destiny-mod-calculator'element={ 
                        <div className='dashboard-header'>
                            <h3>Dashboard not available yet!</h3>
                            <h2>{'<--'} Select an Armor Piece to Continue.</h2>
                            <p>For PVP, Generally the values are halved.</p>
                        </div>
                    }></Route >

                    {Object.entries(armorPages).map(([name, data]) => (
                        <Route path={`${name}`} key={`${name}-route`} element={
                            <div>
                                <Armor
                                    key={`${name}-armor`}
                                    armorName={name}
                                    modData={data[0]}
                                    setModData={data[1]}
                                    armorCharge={armorCharge.charge}
                                    slotted={slottedStates[name]}
                                    setSlotted={(newSlotted) => setSlottedStates({...slottedStates, [name]: newSlotted})}
                                />
                            </div>
                        }/>
                    ))}

                    <Route path='/settings' element={ 
                        <div className='dashboard-header'>
                            <h3>Settings</h3>
                        </div>
                    }></Route >
                </Routes>
            </main>
            {   useLocation().pathname !== '/settings' &&
            <div className="breakdown">
                    <ArmorCharge
                        armorCharge={armorCharge}
                        setArmorCharge={setArmorCharge}
                    />
                    <Breakdown
                        helmetMods={helmetMods}
                        armMods={armMods}
                        legMods={legMods}
                        classMods={classMods}
                        armorCharge={armorCharge}
                    />
            </div>
            }
        </div>
    );
}

export default App;
