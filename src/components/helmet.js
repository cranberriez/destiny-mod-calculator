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

    const dynamo = {
        name: "Dynamo",
        description: "Gain bonus Super energy when using your class ability near enemies. (NO DATA)",
        stacks: [0,0,0,0],
    };


  
    return (
        <div className="Helmet Armor">
            <Mod data={handsOn} modName={'handsOn'} modCount={modCount} setData={setModCount}/>
            <Mod data={ashesToAssets} modName={'ashesToAssets'} modCount={modCount} setData={setModCount}/>
            <Mod data={dynamo} modName={'dynamo'} modCount={modCount} setData={setModCount}/>
        </div>
    );
}
  
export default Helmet;
  