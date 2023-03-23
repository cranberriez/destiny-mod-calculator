import React from 'react';
import './css/armorcharge.css';


function ChargeBox(props) {
    const boxList = []

    for (let i = 0; i < 6; i++) {
        boxList.push(
            <div key={`charge-box-${i}`} className='charge-box'>

            </div>
        )
    }

    return boxList
}

function ArmorCharge(props) {
    const {armorCharge, setArmorCharge} = props;

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
                <button className='armor-charge-clear' onClick={(clearCharge)}>
                    Clear
                </button>
            </div>
            <div className='charge-box-cont'>
                <ChargeBox charge={armorCharge.charge} setArmorCharge={setCharge}/>
            </div>
        </div>
    )
}

export default ArmorCharge;
