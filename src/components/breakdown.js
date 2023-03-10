import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/breakdown.css';

function Breakdown(props) {
    const { helmetMods } = props;
    console.log(helmetMods)
    return (
        <div className='breakdown'>
            <div>
                <h4>Super Energy</h4>
            </div>
        </div>
    )
}

export default Breakdown;