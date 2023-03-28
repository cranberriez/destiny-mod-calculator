import React from 'react';
import Mod from './mod.js'
import './css/armor.css';

function Armor(props) {
    const { armorName, modData, setModData, slotted, setSlotted, armorCharge } = props;

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
            console.log(mod)
            if (modData[mod].count !== 0) {
                setModCount(mod, 0)
            }
            setSlotted(['','',''])
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
            <div className='armor-chips-bar'>
                {/* <button id='mod-filter-button' className={`armor-chip`}>Filter</button> */}
                <button id='mod-clear-button' className={`armor-chip ${isModSlotted(slotted) ? '': 'hidden'}`} onClick={clearMods}>Clear Mods</button>
            </div>
            <div className='armor-mod-cont'>
                {Object.entries(modData).map(([mod, modData]) => (
                    <Mod
                        key={mod}
                        modID={mod}
                        modData={modData}
                        handleModCountChange={handleModCountChange}
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