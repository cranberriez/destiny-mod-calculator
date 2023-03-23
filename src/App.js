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
        helmet: 0,
        arm: 0,
        leg: 0,
        class: 0,
    })

    const [slottedStates, setSlottedStates] = useState({
        helmet: ['','',''],
        arm: ['','',''],
        leg: ['','',''],
        class: ['','',''],
    });

    return (
        <div className="App">
            <Router>
                <Navbar modTotals={modCounts} />

                <main>
                    <Routes>
                        <Route path={'/destiny-mod-calculator/helmet'} element={
                            <div>
                                <Armor
                                    key={'helmet'}
                                    armorName={'helmet'}
                                    modData={helmetMods}
                                    setModData={setHelmetMods}
                                    totalCount={modCounts.helmet}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                    slotted={slottedStates.helmet}
                                    setSlotted={(newSlotted) => setSlottedStates({...slottedStates, helmet: newSlotted})}
                                />
                            </div>
                        }/>

                        <Route path={'/destiny-mod-calculator/arm'} element={
                            <div>
                                <Armor
                                    key={'arm'}
                                    armorName={'arm'}
                                    modData={armMods}
                                    setModData={setArmMods}
                                    totalCount={modCounts.arm}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                    slotted={slottedStates.arm}
                                    setSlotted={(newSlotted) => setSlottedStates({...slottedStates, arm: newSlotted})}
                                />
                            </div>
                        }/>

                        <Route path={'/destiny-mod-calculator/leg'} element={
                            <div>
                                <Armor
                                    key={'leg'}
                                    armorName={'leg'}
                                    modData={legMods}
                                    setModData={setLegMods}
                                    totalCount={modCounts.leg}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                    slotted={slottedStates.leg}
                                    setSlotted={(newSlotted) => setSlottedStates({...slottedStates, leg: newSlotted})}
                                />
                            </div>
                        }/>

                        <Route path={'/destiny-mod-calculator/class'} element={
                            <div>
                                <Armor
                                    key={'class'} 
                                    armorName={'class'}
                                    modData={classMods}
                                    setModData={setClassMods}
                                    totalCount={modCounts.class}
                                    setModCounts={setModCounts}
                                    armorCharge={armorCharge.charge}
                                    slotted={slottedStates.class}
                                    setSlotted={(newSlotted) => setSlottedStates({...slottedStates, class: newSlotted})}
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
