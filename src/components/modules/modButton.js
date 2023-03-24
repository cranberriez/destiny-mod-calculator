import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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

export default ModButton;