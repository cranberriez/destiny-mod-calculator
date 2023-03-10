import React from 'react';
import Mod from './mod.js'
import './css/class.css';

function Class(props) {
    const { modCount, setModCount } = props;

    const uk = {
        name: "Utility Kickstart",
        description: "When your class ability energy is fully expended, you gain class ability energy.",
        stacks: modCount.uk.stacks
    };
    
    const o = {
        name: "Outreach",
        description: "Reduces melee cooldown when using your class ability.",
        stacks: modCount.o.stacks
    };

    const b = {
        name: "Bomber",
        description:"Reduces grenade cooldown when using your class ability.",
        stacks: modCount.b.stacks
    };
    
    const d = {
        name: "Distribution",
        description: "Reduces all cooldown when using your class ability near targets.",
        stacks: modCount.d.stacks
    };
  
    return (
        <div className="Class Armor">
            <Mod data={uk} modName={'uk'} modCount={modCount} setData={setModCount}/>
            <Mod data={o} modName={'o'} modCount={modCount} setData={setModCount}/>
            <Mod data={b} modName={'b'} modCount={modCount} setData={setModCount}/>
            <Mod data={d} modName={'d'} modCount={modCount} setData={setModCount}/>
        </div>
    );
}
  
export default Class;