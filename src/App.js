import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

    const [modCounts, setModCounts] = useState({ 
        helmet: 0,
        arm: 0,
        leg: 0,
        class: 0,
    })

    function increaseModTotal(key) {
        if (modCounts[key] >= 3) return
        setModCounts((prevState) => ({
            ...prevState,
            [key]: modCounts[key] + 1,
        }));
    }

    function decreaseModTotal(key) {
        if (modCounts[key] <= 0) return
        setModCounts((prevState) => ({
            ...prevState,
            [key]: modCounts[key] - 1,
        }));
    }

    return (
        <div className="App">
            <Router>
                <Navbar modTotals={modCounts} />

                <main>
                    <Routes>
                        <Route path={'/helmet'} element={
                            <div>
                                <h1>Helmet</h1>
                                <button onClick={() => increaseModTotal('helmet')}>Increase</button>
                                <button onClick={() => decreaseModTotal('helmet')}>Decrease</button>
                                <Armor 
                                    armorName={'helmet'}
                                    modData={helmetMods}
                                    setModData={setHelmetMods}
                                    totalCount={modCounts.helmet}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                />
                            </div>
                        }/>

                        <Route path={'/arm'} element={
                            <div>
                                <h1>Arm</h1>
                                <button onClick={() => increaseModTotal('arm')}>Increase</button>
                                <button onClick={() => decreaseModTotal('arm')}>Decrease</button>
                                <Armor 
                                    armorName={'leg'}
                                    modData={armMods}
                                    setModData={setArmMods}
                                    totalCount={modCounts.arm}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                />
                            </div>
                        }/>

                        <Route path={'/leg'} element={
                            <div>
                                <h1>Arm</h1>
                                <button onClick={() => increaseModTotal('leg')}>Increase</button>
                                <button onClick={() => decreaseModTotal('leg')}>Decrease</button>
                                <Armor 
                                    armorName={'leg'}
                                    modData={legMods}
                                    setModData={setLegMods}
                                    totalCount={modCounts.leg}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                />
                            </div>
                        }/>

                        <Route path={'/class'} element={
                            <div>
                                <h1>Arm</h1>
                                <button onClick={() => increaseModTotal('class')}>Increase</button>
                                <button onClick={() => decreaseModTotal('class')}>Decrease</button>
                                <Armor 
                                    armorName={'class'}
                                    modData={classMods}
                                    setModData={setClassMods}
                                    totalCount={modCounts.class}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                />
                            </div>
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
