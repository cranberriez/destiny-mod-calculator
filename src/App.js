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

    const [modTotals, setModTotal] = useState({ 
        helmet: 1,
        arm: 2,
        leg: 3,
        class: 1,
    })

    function increaseModTotal(key) {
        if (modTotals[key] >= 3) return
        setModTotal((prevState) => ({
            ...prevState,
            [key]: modTotals[key] + 1,
        }));
    }

    function decreaseModTotal(key) {
        if (modTotals[key] <= 0) return
        setModTotal((prevState) => ({
            ...prevState,
            [key]: modTotals[key] - 1,
        }));
    }

    return (
        <div className="App">
            <Router>
                <Navbar modTotals={modTotals} />

                <main>
                    <Routes>
                        {Object.keys(modTotals).map(key => (
                            <Route path={'/' + key} key={key + '-route'} element={
                                <div>
                                    <h1>{key.charAt(0).toUpperCase() + key.slice(1)}</h1>
                                    <button onClick={() => increaseModTotal(key)}>Increase</button>
                                    <button onClick={() => decreaseModTotal(key)}>Decrease</button>
                                </div>
                            }/>
                        ))}

                        {/* <Route path='/helmet' element={
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
                        }/> */}
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
