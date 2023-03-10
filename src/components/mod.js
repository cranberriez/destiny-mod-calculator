import React from 'react';
import './css/mod.css';

function Mod(props) {
    const { data, modName, modCount, setData, armorCharge } = props;

    const addMod = () => {
        if (modCount.totalMods >= 3 || modCount[modName].count >= modCount[modName].stacks.length - 1) return;
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

    
    let charge = 0;
    if (armorCharge && modCount[modName].count > 0) charge = armorCharge.charge
    const stacks = data.stacks.map((stack, index) => (
        <li key={index} className={index == (modCount[modName].count + charge) ? 'current': ''}>{index}: %{(stack * 100).toFixed(2)}</li>
    ));


    return (
        <div className="Mod">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <ul className="ModStacks">
                <p>Stacks</p>
                {stacks}
            </ul>
            <div className="ModButtons">
                <button onClick={addMod}>+</button>
                <button onClick={removeMod}>-</button>
                <p>{modCount[modName].count}</p>
            </div>
        </div>
    );
}

export default Mod;