import React from 'react';
import Mod from './mod.js'
import './css/armor.css';

function Armor(props) {
    const { armorName, modData, setModData, totalCount, setModCounts, armorCharge } = props;

    function setModTotalCount(key, countChange) {
        console.log(countChange)

        setModCounts((prevState) => ({
            ...prevState,
            [key]: totalCount + countChange,
        }));
    }

    const setModCount = (modID, count) => {
        setModData(prevMods => ({
          ...prevMods,
          [modID]: {
            ...prevMods[modID],
            count: count
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
            {Object.keys(modData).map(mod => (
                 <Mod
                    key={mod}
                    modID={mod}
                    modData={modData[mod]}
                    handleModCountChange={handleModCountChange}
                    totalCount={totalCount}
                    armorCharge={armorCharge}
                 />
            ))}
        </div>
    );
}
  
export default Armor;
