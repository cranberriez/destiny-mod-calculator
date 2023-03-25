import React from 'react';
import './css/mod.css';
import Stacks from './modules/stacks.js';
import ModButton from './modules/modButton.js';

function capFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function Mod(props) {
    const { modID, modData, handleModCountChange, slotted, setSlotted, armorCharge } = props;
    const [ability, activation] = modData.type.split('-')
    const generates = modData.generates;
    const cooldown = modData.cooldown || null

    const setModCount = (change) => {
        handleModCountChange(modID, modData.count + change)
    }

    let kickstart = ""
    if (modData.kickstart) {kickstart = 'kickstart'}

    const buttonList = Array(3)
        .fill()
        .map((_, i) => (
            <ModButton
                key={modID + "" + i}
                i={i}
                slotted={slotted}
                setSlotted={setSlotted}
                setModCount={setModCount}
                count={modData[modID]}
                url={modData.url}
                generates={generates}
                modID={modID}
            />
        ));

    return (
        <div className={"Mod " + kickstart}>
            <div className='mod-header'>
                <img className='mod-img' src={modData.url} alt='Mod'></img>
                <div className='mod-heading'>
                    <h1>{modData.name}</h1>
                    {/* Outputs sentence as: Regains (generates) on (ability) (activation) */}
                    <p> %
                        <span className={generates}>{capFirst(generates)}</span> energy on
                        <span className={ability}> {capFirst(ability)} {capFirst(activation)} </span>
                        {cooldown ? `${cooldown} cooldown` : ''}
                    </p>
                </div>
            </div>
            <div className='mod-stacks-cont'>
                <Stacks
                    modName={modData.name}
                    stacks={modData.stacks}
                    count={modData.count}
                    armorCharge={armorCharge}
                    kickstart={kickstart}
                />
                {/* <p>Mods Allocated (Stacks)</p> */}
            </div>
            <div className='mod-buttons'>
                { buttonList }
                {modData.kickstart &&
                    <p className='kickstart-info'>
                        Mod Count is added to total amount of Armor Charges to determine 'stacks' when using this ability.
                    </p>
                }
            </div>
        </div>
    );
}

export default Mod;