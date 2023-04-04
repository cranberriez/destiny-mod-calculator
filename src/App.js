import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// USING HASHROUTER instead of BrowserRouter so app works with github pages static host
import Armor from './components/armor.js';
import ArmorCharge from './components/armorCharge.js';
import Breakdown from './components/breakdown.js';
import Navbar from './components/navbar.js';
import Settings from './components/settings.js';
import './App.css';
import data from './data/data.json';

function App() {
    const [helmetMods, setHelmetMods] = useState(data.helmet);
    const [armMods, setArmMods] = useState(data.arm);
    const [legMods, setLegMods] = useState(data.leg);
    const [classMods, setClassMods] = useState(data.class);
    const [armorCharge, setArmorCharge] = useState({ charge: 0 })
    const [breakdownVisible, setBreakdownVisibile] = useState(false)
    const [charClass, setCharClass] = useState('warlock')

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

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
        <ViewportProvider>
            <div className={`App ${breakdownVisible ? 'bd-visible' : 'bd-hidden'}`}>
                <Navbar slottedStates={slottedStates} />

                <main>
                    <Routes>
                        <Route exact path="/" element={
                            <Navigate to="/helmet" />
                        }/>

                        <Route path='/destiny-mod-calculator' element={
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
                                        breakdownVisible={breakdownVisible}
                                        setBreakdownVisibile={setBreakdownVisibile}
                                    />
                                </div>
                            }/>
                        ))}

                        <Route path='/settings' element={ 
                            <Settings />
                        }/>
                    </Routes>
                </main>
                {   useLocation().pathname !== '/settings' &&
                <div className={`breakdown`}>
                        <div className='showHideButton'>
                            <button onClick={() => setBreakdownVisibile(!breakdownVisible)}>Hide Breakdown</button>
                        </div>
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
        </ViewportProvider>
    );
}

const viewportContext = React.createContext({});
const ViewportProvider = ({ children }) => {
    const handleWindowResize = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    })

    return (
        <viewportContext.Provider value={{}}>
            {children}
        </viewportContext.Provider>
    )
}

export default App;
