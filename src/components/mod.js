import React from 'react';
import './css/mod.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function capFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function Stacks(props) {
    const { modName, stacks, count } = props;
    const listItems = [];

    for (let i = 0; i < stacks.length; i++) {
        if (stacks[i] === 0) continue

        listItems.push(
            <li  className={(i === count ? 'active' : '')} key={modName + '-' + i}>
                <p><span>%</span>{(stacks[i] * 100).toFixed(1)}</p>
                <p>{i}</p>
            </li>
        )
    }

    return <ul className='mod-stacks'>{listItems}</ul>
}

function ModButton(props) {
    const { i, slotted, setSlotted, setModCount, url, generates, modID} = props;

    function placeMod(countChange) {
        setModCount(countChange);
        const newSlotted = [...slotted]; // Create a new copy of the array
        if (countChange > 0) {
            newSlotted[i] = modID;
        } else {
            newSlotted[i] = '';
        }
        setSlotted(newSlotted);

    }


    let slotStatus;
    if (slotted[i] === '') slotStatus = 'open'
    else if (slotted[i] === modID) slotStatus = 'slotted'
    else slotStatus = 'disabled'

    if (slotStatus === 'open') {
        return (
            <button
                onClick={() => placeMod(1)}
                className={slotStatus}
            >
                {<FontAwesomeIcon icon={faPlus} />}
            </button>
        )
    }
    else if (slotStatus === 'slotted') {
        return (
            <button
                onClick={() => placeMod(-1)}
                className={slotStatus + ' ' + generates}
            >
                <img src={url} alt='Mod'></img>
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

function Mod(props) {
    const { modID, modData, handleModCountChange, slotted, setSlotted, armorCharge } = props;
    const [ability, activation] = modData.type.split('-')
    const generates = modData.generates;

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