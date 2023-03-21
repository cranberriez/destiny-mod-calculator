import React from 'react';
import './css/mod.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function capFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function ModButton(props) {
    const { i, imageUrl, ability, count, setModCount, totalCount} = props;

    var slotStatus = 'open'

    // Disable slot
    if (i >= (4 - (totalCount - count))) slotStatus = 'disabled'

    // Set slot to Modname
    else if (i <= count) slotStatus = 'slotted'

    if (slotStatus === 'open') {
        return (
            <button
                onClick={() => setModCount(i)}
                className={slotStatus}
            >
                {<FontAwesomeIcon icon={faPlus} />}
            </button>
        )
    }
    else if (slotStatus === 'slotted') {
        return (
            <button
                onClick={() => setModCount(i - 1)}
                className={slotStatus + ' ' + ability}
            >
                <img src={imageUrl} alt='Mod'></img>
                {<FontAwesomeIcon icon={faPlus} />}
            </button>
        )
    }
    else {
        return (
            <button
                className={slotStatus}
            >
                {<FontAwesomeIcon icon={faPlus} />}
            </button>
        )
    }
}

function Stacks(props) {
    const { modName, stacks, count } = props;
    const listItems = []

    for (let i = 0; i < stacks.length; i++) {
        listItems.push(
            <li  className={(i === count ? 'active' : '')} key={modName + '-' + i}>
                <p><span>%</span>{(stacks[i] * 100).toFixed(1)}</p>
                <p>{i}</p>
            </li>
        )
    }

    return <ul className='mod-stacks'>{listItems}</ul>
}

function Mod(props) {
    const { modID, modData, handleModCountChange, totalCount, armorCharge } = props;

    const [ability, activation] = modData.type.split('-')
    const generates = modData.generates;

    const setModCount = (count) => {
        console.log("Mod I: " + count)
        handleModCountChange(modID, count)
    }

    var kickstart = ""
    if (modData.kickstart) {kickstart = 'kickstart'}

    return (
        <div className={"Mod " + kickstart}>
            <div className='mod-header'>
                <img className='mod-img' src={modData.url} alt='Mod'></img>
                <div className='mod-heading'>
                    <h1>{modData.name}</h1>
                    {/* Outputs sentence as: Regains (generates) on (ability) (activation) */}
                    <p> %
                        <span className={generates}>{capFirst(generates)}</span> energy on
                        <span className={ability}> {capFirst(ability)} {capFirst(activation)}</span>
                    </p>
                </div>
            </div>
            <div className='mod-stacks-cont'>
                <Stacks
                    modName={modData.name}
                    stacks={modData.stacks}
                    count={modData.count}
                />
                {/* <p>Mods Allocated (Stacks)</p> */}
            </div>
            <div className='mod-buttons'>
                <ModButton 
                    i={1}
                    imageUrl={modData.url}
                    ability={ability}
                    count={modData.count}
                    setModCount={setModCount}
                    totalCount={totalCount}
                />
                <ModButton 
                    i={2}
                    imageUrl={modData.url}
                    ability={ability}
                    count={modData.count}
                    setModCount={setModCount}
                    totalCount={totalCount}
                />
                <ModButton 
                    i={3}
                    imageUrl={modData.url}
                    ability={ability}
                    count={modData.count}
                    setModCount={setModCount}
                    totalCount={totalCount}
                />

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