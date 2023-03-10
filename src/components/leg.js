import React from 'react';
import Mod from './mod.js'
import './css/legs.css';

function Leg(props) {
    const { modCount, setModCount } = props;

    const invigoration = {
        name: "Invigoration",
        description: "Reduces melee cooldown each time you pick up an Orb of Power.",
        stacks: modCount.invigoration.stacks
    };
    
    const innervation = {
        name: "Innervation",
        description: "Reduces grenade cooldown each time you pick up an Orb of Power.",
        stacks: modCount.innervation.stacks
    };

    const insulation = {
        name: "Insulation",
        description:"Reduces class ability cooldown each time you pick up an Orb of Power.",
        stacks: modCount.insulation.stacks
    };
    
    const absolution = {
        name: "Absolution",
        description: "Reduces all ability cooldowns each time you pick up an Orb of Power.",
        stacks: modCount.absolution.stacks
    };

    const orbsOfRestoration = {
        name: "Orbs Of Restoration",
        description: "Picking up an Orb of Power grants a small amount of energy to your ability with the least energy.",
        stacks: modCount.absolution.stacks
    };

  
    return (
        <div className="Leg Armor">
            <ul>

            </ul>
            <Mod data={invigoration} modName={'invigoration'} modCount={modCount} setData={setModCount}/>
            <Mod data={innervation} modName={'innervation'} modCount={modCount} setData={setModCount}/>
            <Mod data={insulation} modName={'insulation'} modCount={modCount} setData={setModCount}/>
            <Mod data={absolution} modName={'absolution'} modCount={modCount} setData={setModCount}/>
            <Mod data={orbsOfRestoration} modName={'orbsOfRestoration'} modCount={modCount} setData={setModCount}/>
            {/* <p>Total Mods: {modCount.totalMods}</p> */}
        </div>
    );
}
  
export default Leg;
