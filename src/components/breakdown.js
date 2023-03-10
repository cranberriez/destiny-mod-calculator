import {React, useState, useEffect} from 'react';
import './css/breakdown.css';

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

function Orb(props) {
    const {data} = props;

    return (
        <div className="AbilityBreakdown">
            <h4>On Orb Pickup</h4>
            {Object.keys(data.pickup).map(subkey => (
            <div key={subkey}>
                <p>{subkey}: %{(data.pickup[subkey] * 100).toFixed(2)}</p>
            </div>
            ))}
        </div>
    )
}

function Breakdown(props) {
    const { helmetMods, legMods } = props;

    const [breakdown, setBreakdown] = useState({
        grenade: {
            kill: {},
            hit: {},
            use: {},
        },
        melee: {
            kill: {},
            hit: {},
            use: {},
        },
        class: {
            use: {},
        },
        orb: {
            pickup: {}
        }
    })

    const checkData = (data) => {
        for (const key in data) {
            if (typeof data[key] === "object") {
                addToBreakdown(data[key])
            }
        }
    }

    const addToBreakdown = (data) => {
        const count = data.count
        const stacks = data.stacks
        const [ability, type] = data.type.split('-')
        const generates = data.generates

        if (count === undefined || count < 0 || count >= stacks.length) {
            console.log('Invalid count:', count)
            return
        }

        setBreakdown(prevBreakdown => {
            const updatedBreakdown = { ...prevBreakdown }
            // const existingValue = updatedBreakdown[ability][type][generates] ?? 0
            // updatedBreakdown[ability][type][generates] = Number(existingValue) + stacks[count]
            updatedBreakdown[ability][type][generates] = stacks[count]
            return updatedBreakdown
        })
    }

    useEffect(() => {
        checkData(helmetMods)
        checkData(legMods)
    }, [helmetMods, legMods])

    return (
        <div className='Breakdown'>
            <Ability data={breakdown.grenade} type="Grenade"/>
            <Ability data={breakdown.melee} type="Melee"/>
            <Ability data={breakdown.class} type="Class Ability"/>
            <Orb data={breakdown.orb}/>
        </div>
    )
}

export default Breakdown;