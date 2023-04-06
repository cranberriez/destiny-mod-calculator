import React, {useState, useEffect, useMemo} from 'react';
import Totals from './models/breakdownTotals.js';
// import Tabs from './modules/breakdownTabs.js';
import './css/breakdown.css';
import TabsComponent from "./modules/breakdownTabs";

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
        use: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        },
    };
}

function createOrbData() {
    return {
        pickup: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
            'least-charged': 0,
        }
    }
}

function createClassData() {
    return {
        use: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        }
    }
}

function Breakdown(props) {
    const { helmetMods, legMods, armMods, classMods, armorCharge, charClass } = props;
    const [ grenadeTotals, setGrenadeTotals ] = useState(createData())
    const [ meleeTotals, setMeleeTotals ] = useState(createData())
    const [ classTotals, setClassTotals ] = useState(createClassData())
    const [ orbTotals, setOrbTotals ] = useState(createOrbData())

    // console.log('Class Totals')
    // console.table(classTotals)

    const allMods = useMemo(() => {
        return { ...helmetMods, ...legMods, ...armMods, ...classMods };
    }, [helmetMods, legMods, armMods, classMods])

    useEffect(() => {
        const checkData = (data) => {
            for (const key in data) {
                addToBreakdown(data[key])
            }
        }

        // assign temporary values to a new instance of totals class
        // in an array to iterate over it / direct access
        // these are the 'sources' of ability energy, caused by ability, or picking up orb
        let tempTotals = {
            'grenade': createData(),
            'melee': createData(),
            'class': createClassData(),
            'orb': createOrbData(),
        }

        const addToBreakdown = (data) => {
            const count = data.count
            const stacks = data.stacks[charClass]
            const [ability, use] = data.type.split('-')
            const kickstart = data.kickstart ?? false
            const generates = data.generates

            // Pull tempData for current ability
            let tempGeneratesTotals = tempTotals[ability]

            // Gets the total generated % of ability from current mod
            // If it's a kickstart mod, add armor charge to stacks (should only work if count != 0)
            let generatedAmount;
            if (kickstart && count > 0) {
                generatedAmount = stacks[count + armorCharge.charge]
            }
            else {
                generatedAmount = stacks[count]
            }

            let newGeneratedValue = 0;
            if (!(generates === 'all'))
                newGeneratedValue = tempGeneratesTotals[use][generates]

            newGeneratedValue += generatedAmount

            // Update the temp value
            // if (generates === 'least-charged') return

            if (generates === 'all') {
                console.log(ability)
                tempGeneratesTotals[use]['grenade'] += newGeneratedValue
                tempGeneratesTotals[use]['melee'] += newGeneratedValue
                tempGeneratesTotals[use]['class'] += newGeneratedValue
                tempGeneratesTotals[use]['super'] += newGeneratedValue
            }
            else {
                tempGeneratesTotals[use][generates] += newGeneratedValue
            }
        }

        checkData(allMods)

        const stateSetters = {
            'grenade': setGrenadeTotals,
            'melee': setMeleeTotals,
            'class': setClassTotals,
            'orb': setOrbTotals,
        };

        const stateValues = {
            'grenade': grenadeTotals,
            'melee': meleeTotals,
            'class': classTotals,
            'orb': orbTotals,
        };

        // Update the corresponding states
        for (let ability in tempTotals) {
            const stateSetter = stateSetters[ability];
            let newTotal = tempTotals[ability]
            stateSetter(newTotal);
        }

    }, [ allMods, armorCharge ])

    return (
        <div className='Breakdown'>
            <TabsComponent
                grenadeTotals={grenadeTotals}
                meleeTotals={meleeTotals}
                classTotals={classTotals}
                orbTotals={orbTotals}
            />
        </div>
    )
}

export default Breakdown;