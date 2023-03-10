import React from 'react';
import './css/armorcharge.css';


function ChargeBox(props) {
    const {charge, setArmorCharge} = props;

    // Using a for loop to create an array of JSX elements
    var itemsList = [];
    itemsList.push(
        <li
            key={7}
            onClick={() => {
                setArmorCharge(0)
            }}
            className={"box remove"}
        >
            x
        </li>
    );
    for (let i = 0; i < 6; i++) {
        itemsList.push(
            <li
                key={i}
                onClick={() => {
                    setArmorCharge(i + 1)
                }}
                className={"box " + (i < charge ? "active" : "inactive")}
            >
            </li>
        );
    }

    return (
        <ul className="ChargeBoxes">
            {itemsList}
        </ul>
    )
}

function ArmorCharge(props) {
    const {armorCharge, setArmorCharge} = props;

    // const addCharge = () => {
    //     if (armorCharge.charge >= 6) return
    //     const newCharge = armorCharge.charge + 1
    //     setArmorCharge((prevState) => ({
    //         ...prevState, 
    //         charge: newCharge}
    //     ))
    // }
    
    // const removeCharge = () => {
    //     if (armorCharge.charge <= 0) return
    //     const newCharge = armorCharge.charge - 1
    //     setArmorCharge((prevState) => ({
    //         ...prevState, 
    //         charge: newCharge}
    //     ))
    // }

    const setCharge = (newCharge) => {
        if (armorCharge.charge < 0 || armorCharge.charge > 6) return
        setArmorCharge((prevState) => ({
            ...prevState, 
            charge: newCharge}
        ))
    }

    return (
        <div className="ArmorCharge">
            <h2>Armor Charge</h2>
            {/* <button onClick={addCharge}>
                Add Charge
            </button>
            <button onClick={removeCharge}>
                Remove Charge
            </button>
            <p>Charges: {armorCharge.charge}</p> */}
            <ChargeBox charge={armorCharge.charge} setArmorCharge={setCharge}/>
            
        </div>
    )
}

export default ArmorCharge;
