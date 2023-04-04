import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ModButton(props) {
    const { i, slotted, setSlotted, setModCount, url, generates, modID} = props;
    const [hovered, setHovered] = useState(false);
    let timer = null;

    function handleMouseEnter() {
        clearTimeout(timer);
        setHovered(true);
        timer = setTimeout(() => {
            setHovered(false);
        }, 1000);
    }

    function handleMouseLeave() {
        setHovered(false);
        clearTimeout(timer);
    }

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    function placeMod(countChange) {
        setModCount(countChange);
        const newSlotted = [...slotted]; // Create a new copy of the array
        if (countChange > 0) {
            handleMouseEnter()
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
                className={`${slotStatus} ${hovered ? 'hover' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {<FontAwesomeIcon icon={faPlus} />}
            </button>
        )
    }
    else if (slotStatus === 'slotted') {
        return (
            <button
                onClick={() => placeMod(-1)}
                className={`${slotStatus} ${generates} ${hovered ? 'hover' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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