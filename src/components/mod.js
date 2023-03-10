import React from 'react';
import './css/mod.css';

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
            <ul className="ModStacks">
                <p>Stacks</p>
                {stacks}
            </ul>
            <div className="ModButtons">
                <button onClick={addMod}>+ Add</button>
                <button onClick={removeMod}>- Remove</button>
                <p>{modCount[modName].count}</p>
            </div>
        </div>
    );
}

export default Mod;