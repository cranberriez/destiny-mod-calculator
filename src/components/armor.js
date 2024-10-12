import React from 'react';
import Mod from './mod.js'
import './css/armor.css';
import { capitalizeFirstLetter } from "./utils/capitilizeFirst";

function Armor(props) {
    const { armorName, modData, setModData, slotted, setSlotted, armorCharge, charClass, breakdownVisible, setBreakdownVisibile } = props;

    const setModCount = (modID, count) => {
        setModData((prevMods) => ({
            ...prevMods,
            [modID]: {
                ...prevMods[modID],
                count: count,
            }
        }));
    }

    const handleModCountChange = (modID, selectedCount) => {
        setModCount(modID, selectedCount)
    }

    function clearMods() {
        Object.keys(modData).forEach((mod) => {
            if (modData[mod].count !== 0) {
                setModCount(mod, 0)
            }
            setSlotted(['', '', ''])
        })
    }

    function isModSlotted(slots) {
        for (let i = 0; i < slots.length; i++) {
            if (slots[i] !== '') return true
        }
        return false
    }

    return (
        <div className={armorName + " Armor"}>
            <h1>{capitalizeFirstLetter(armorName)} Mods</h1>
            <div className='armor-chips-bar'>
                <button id='mod-breakdown-button' className={`armor-chip`} onClick={() => setBreakdownVisibile(!breakdownVisible)}>Show Breakdown</button>
                <button id='mod-clear-button' className={`armor-chip ${isModSlotted(slotted) ? '' : 'hidden'}`} onClick={clearMods}>Clear Mods</button>
            </div>
            <div className='armor-mod-cont'>
                {Object.entries(modData).map(([mod, modData]) => (
                    <Mod
                        key={mod}
                        modID={mod}
                        modData={modData}
                        handleModCountChange={handleModCountChange}
                        charClass={charClass}
                        armorCharge={armorCharge}
                        slotted={slotted}
                        setSlotted={setSlotted}
                    />
                ))}
            </div>
        </div>
    );
}

export default Armor;
