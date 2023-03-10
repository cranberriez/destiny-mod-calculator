import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/helmet.css';

function Mod(props) {
    const { data, modName, modCount, setData } = props;

    const addMod = () => {
        if (modCount.totalMods >= 3) return;
        const newCount = modCount[modName].count + 1;
        setData((prevState) => ({
          ...prevState,
          [modName]: { ...prevState[modName], count: newCount },
          totalMods: prevState.totalMods + 1,
        }));
    };

    const removeMod = () => {
        if (modCount[modName].count <= 0) return;
        const newCount = modCount[modName].count - 1;
        setData((prevState) => ({
            ...prevState,
            [modName]: { ...prevState[modName], count: newCount },
            totalMods: prevState.totalMods - 1,
        }));
    };

    return (
        <div className="Mod">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <button onClick={addMod}>Add Mod +</button>
          <button onClick={removeMod}>Remove Mod -</button>
          <p>{modCount[modName].count}</p>
        </div>
    );
}

function Helmet(props) {
    const { modCount, setModCount } = props;

    const handsOn = {
        name: "Hands On",
        description: "Gain bonus Super energy on melee kills.",
        type: "melee-kill",
        gain: "super",
        count: 0,
      };
    
    const ashesToAssets = {
        name: "Ashes To Assets",
        description: "Gain bonus Super energy on grenade kills.",
        type: "grenade-kill",
        gain: "super",
        count: 0,
    };

  
    return (
      <div className="Helmet">
        <Mod data={handsOn} modName={'handsOn'} modCount={modCount} setData={setModCount}/>
        <Mod data={ashesToAssets} modName={'ashesToAssets'} modCount={modCount} setData={setModCount}/>
        <p>Total Mods: {modCount.totalMods}</p>
      </div>
    );
}
  
export default Helmet;
  