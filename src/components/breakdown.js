import {React, useState, useEffect} from 'react';
import Totals from './models/breakdownTotals.js';
import './css/breakdown.css';

function createData() {
    return {
        kill: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        },
        hit: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        },
        throw: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        },
        class: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        },
        orb: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        }
    };
}

function Ability(props) {
    const { data, type } = props;

    return (
        <div className="AbilityBreakdown">
            {Object.keys(data).map(key => (
            <div key={key}>
                <h4>On {type} {key}</h4>
                {Object.keys(data[key]).map(subkey => (
                <div key={subkey}>
                    <p>{subkey}: %{(data[key][subkey] * 100).toFixed(2)}</p>
                </div>
                ))}
            </div>
            ))}
        </div>
    )
}

function Breakdown(props) {
    const { helmetMods, legMods, armMods, classMods, armorCharge } = props;
    const [ grenadeTotals, setGrenadeTotals ] = useState(new Totals(createData()))

    useEffect(() => {
        const checkData = (data) => {
            for (const key in data) {
                addToBreakdown(data[key])
            }
        }

        // assign temporary values to a new instance of totals class
        // in an array to iterate over it / direct access
        let tempTotals = {
            'grenade': new Totals(createData()),
            'melee': new Totals(createData()),
            'super': new Totals(createData()),
            'class': new Totals(createData()),
        }

        const addToBreakdown = (data) => {
            const count = data.count
            const stacks = data.stacks
            const [ability, use] = data.type.split('-')
            const kickstart = data.kickstart ?? false
            const generates = data.generates

            if (ability === 'orb') return

            let tempGeneratesTotals = tempTotals[ability]
            let generateAmount = kickstart ? stacks[count + armorCharge.charge] : stacks[count]

            tempGeneratesTotals.updateValue(use, generates, generateAmount)

            console.table(tempGeneratesTotals)
        }

        checkData(helmetMods)
        checkData(legMods)
        checkData(armMods)
        checkData(classMods)
    }, [helmetMods, legMods, armMods, classMods, armorCharge])

    return (
        <div className='Breakdown'>
            
        </div>
    )
}

export default Breakdown;