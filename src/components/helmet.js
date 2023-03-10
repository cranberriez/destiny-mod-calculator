import React from 'react';
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

    const stacks = data.stacks.map((stack, index) => (
        <li key={index}>{index}: %{(stack * 100).toFixed(2)}</li>
    ));


    return (
        <div className="Mod">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <ul>
            <p>Stacks</p>
            {stacks}
          </ul>
          <button onClick={addMod}>+ Add Mod</button>
          <button onClick={removeMod}>- Remove Mod</button>
          <p>{modCount[modName].count}</p>
        </div>
    );
}

function Helmet(props) {
    const { modCount, setModCount } = props;

    const handsOn = {
        name: "Hands On",
        description: "Gain bonus Super energy on melee kills.",
        stacks: [0.0075, 0.025, 0.029, 0.029]
      };
    
    const ashesToAssets = {
        name: "Ashes To Assets",
        description: "Gain bonus Super energy on grenade kills.",
        stacks: [0.0075, 0.048, 0.052, 0.048],
    };

  
    return (
      <div className="Helmet">
        <ul>

        </ul>
        <Mod data={handsOn} modName={'handsOn'} modCount={modCount} setData={setModCount}/>
        <Mod data={ashesToAssets} modName={'ashesToAssets'} modCount={modCount} setData={setModCount}/>
        {/* <p>Total Mods: {modCount.totalMods}</p> */}
      </div>
    );
}
  
export default Helmet;
  