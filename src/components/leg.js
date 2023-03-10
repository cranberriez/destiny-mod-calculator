import React from 'react';
import './css/legs.css';

function Mod(props) {
    return (
        <div className="Mod">
            Hi
        </div>
    )
}

function Leg() {
    return (
        <div className="Leg">
            <Mod/>
        </div>
    )
}

export default Leg;
