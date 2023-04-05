import React, { useState } from 'react';
import './css/armorcharge.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function ChargeBoxes(props) {
    const {armorCharge, setCharge, hoveredButtonIndex, setHoveredButtonIndex} = props;
    const boxList = []
    let timer = null;
    function handleMouseEnter(i) {
        clearTimeout(timer);
        setHoveredButtonIndex(i)
    }

    function handleMouseLeave() {
        timer = setTimeout(() => {
            setHoveredButtonIndex(null);
        }, 200);
    }

    for (let i = 0; i < 6; i++) {
        let buttonState = (
            i < armorCharge || i < hoveredButtonIndex ?
            (
              hoveredButtonIndex != null && i > hoveredButtonIndex ?
              'remove' :
              'active'
            ) :
            ''
        );

        boxList.push(
            <button 
                key={`charge-box-${i}`} 
                className={
                    `charge-box 
                    ${buttonState}`
                }
                onClick={() => setCharge(i + 1)}
                onMouseOver={() => handleMouseEnter(i)}
                onMouseOut={() => handleMouseLeave(null)}>
                    <div>
                        {buttonState === 'active' ? (
                        <FontAwesomeIcon icon={faPlus} />
                        ) : buttonState === 'remove' ? (
                        <FontAwesomeIcon icon={faMinus} />
                        ) : (
                        <FontAwesomeIcon icon={faPlus} />
                        )}
                    </div>
            </button>
        )
    }

    return boxList
}

function ArmorCharge(props) {
    const {armorCharge, setArmorCharge} = props;
    const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

    const setCharge = (newCharge) => {
        if (armorCharge.charge < 0 || armorCharge.charge > 6) return
        setArmorCharge((prevState) => ({
            ...prevState, 
            charge: newCharge}
        ))
    }

    const clearCharge = () => {
        setCharge(0)
    }

    return (
        <div className="ArmorCharge">
            <div className='armor-charge-header'>
                <h2>Armor Charge</h2>
                <button 
                    className={`armor-charge-clear 
                                ${armorCharge.charge <= 0 ? 'inactive' : ''}`} 
                    onClick={(clearCharge)}
                    onMouseOver={() => setHoveredButtonIndex(-1)}
                    onMouseOut={() => setHoveredButtonIndex(null)}>
                    Clear
                </button>
            </div>
            <div className='charge-box-cont'>
                <ChargeBoxes 
                    armorCharge={armorCharge.charge} 
                    setCharge={setCharge}
                    hoveredButtonIndex={hoveredButtonIndex}
                    setHoveredButtonIndex={setHoveredButtonIndex}
                />
            </div>
        </div>
    )
}

export default ArmorCharge;
