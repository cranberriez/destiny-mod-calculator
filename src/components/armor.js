import React from 'react';
import Mod from './mod.js'
import './css/armor.css';

function Arm(props) {
    const { modCount, setModCount, armorCharge } = props;

    console.log(modCount)

    Object.keys(modCount).map(mod => (
        console.log(mod)
    ))

    return (
        <div className="Arm Armor">
            {/* {Object.keys(modCount).map(mod => (
                
            ))} */}
        </div>
    );
}
  
export default Arm;
