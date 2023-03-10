import React from 'react';
import Mod from './mod.js'
import './css/legs.css';

function Arm(props) {
    const { modCount, setModCount, armorCharge } = props;

    const gk = {
        name: "Grenade Kickstart",
        description: "Grenade-Kickstart refunds cooldown whenever your grenade energy is fully depleted. (Works with multiple charges)",
        stacks: modCount.gk.stacks
    };

    const mk = {
        name: "Melee Kickstart",
        description: "Melee-Kickstart refunds cooldown whenever your melee energy is fully depleted. (DOESN'T works with multiple charges)",
        stacks: modCount.mk.stacks
    };
    
    const mt = {
        name: "Momentum Transfer",
        description: "Causing damage with a grenade reduces your melee cooldown. (7 Second Cooldown)",
        stacks: modCount.mt.stacks
    };

    const ii = {
        name: "Impact Induction",
        description:"Causing damage with a melee attack reduces your grenade cooldown. (7 Second Cooldown)",
        stacks: modCount.ii.stacks
    };
    
    const fs = {
        name: "Focusing Strike",
        description: "Grants class ability energy when you cause damage with a melee attack. (7 Second Cooldown)",
        stacks: modCount.fs.stacks
    };

    const bd = {
        name: "Bolstering Detonation",
        description: "Grants class ability energy when you cause damage with a grenade. (7 Second Cooldown)",
        stacks: modCount.bd.stacks
    };

  
    return (
        <div className="Arm Armor">
            <Mod data={gk} modName={'gk'} modCount={modCount} setData={setModCount} armorCharge={armorCharge}/>
            <Mod data={mk} modName={'mk'} modCount={modCount} setData={setModCount} armorCharge={armorCharge}/>
            <Mod data={mt} modName={'mt'} modCount={modCount} setData={setModCount}/>
            <Mod data={ii} modName={'ii'} modCount={modCount} setData={setModCount}/>
            <Mod data={fs} modName={'fs'} modCount={modCount} setData={setModCount}/>
            <Mod data={bd} modName={'bd'} modCount={modCount} setData={setModCount}/>
            {/* <p>Total Mods: {modCount.totalMods}</p> */}
        </div>
    );
}
  
export default Arm;
