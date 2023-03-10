import React from 'react';
import Mod from './mod.js'
import './css/helmet.css';

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
  