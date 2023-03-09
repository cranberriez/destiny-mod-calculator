import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/helmet.css';

function Mod(props) {
    const { data, setData } = props;

    const handleButtonClick = () => {
        const newCount = data.count + 1;
        setData((prevState) => ({ ...prevState, count: newCount }));
    };

    return (
        <div className="Mod">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    )
}

function Helmet(props) {
    const [handsOnData, setHandsOnData] = useState({
        name: "Hands On",
        description: "Gain bonus Super energy on melee kills.",
        stacks: [0.0075, 0.025, 0.029, 0.029],
        type: "melee-kill",
        gain: "super",
        count: 0,
      });
    
    const [ashesToAssetsData, setAshesToAssetsData] = useState({
        name: "Ashes To Assets",
        description: "Gain bonus Super energy on grenade kills.",
        stacks: [0.0075, 0.048, 0.052, 0.048],
        type: "grenade-kill",
        gain: "super",
        count: 0,
    });

    const [modCount, setModCount] = useState({
        count: 0
    })
  
    return (
      <div className="Helmet">
        <Mod data={handsOnData} onUpdate={setHandsOnData}/>
        <Mod data={ashesToAssetsData} onUpdate={setAshesToAssetsData}/>
      </div>
    );
}
  
export default Helmet;
  