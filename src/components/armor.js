import React, { useState } from 'react';
import Mod from './mod.js'
import './css/armor.css';

function Armor(props) {
    const { armorName, modData, setModData, slotted, setSlotted, totalCount, setModCounts, armorCharge } = props;

    function setModTotalCount(key, countChange) {
        setModCounts((prevState) => ({
            ...prevState,
            [key]: prevState[key] + countChange,
        }));
    }

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
        console.log(selectedCount)
        setModCount(modID, selectedCount)
        setModTotalCount(armorName, selectedCount - modData[modID].count)
    }

    return (
        <div className={armorName + " Armor"}>
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
    );
}
  
export default Armor;
