import React from 'react';
import './css/breakdown.css';

function Breakdown(props) {
    const { helmetMods } = props;
    let superEnergy = {
        grenade: {
            description: "On Grenade Kill",
            energy: (helmetMods.ashesToAssets.stacks[helmetMods.ashesToAssets.count] * 100)
        },
        melee: {
            description: "On Melee Kill",
            energy: (helmetMods.handsOn.stacks[helmetMods.handsOn.count] * 100)
        }
    }

    return (
        <div className='Breakdown'>
            <div>
                <h4>Super Energy</h4>
                {Object.keys(superEnergy).map(key => (
                    <p key={key}>
                        {superEnergy[key].description}: {superEnergy[key].energy}
                    </p>
                ))}
            </div>
            <div>
                <h4>Grenade Energy</h4>
            </div>
            <div>
                <h4>Melee Energy</h4>
            </div>
            <div>
                <h4>Class Energy</h4>
            </div>
        </div>
    )
}

export default Breakdown;