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
        class: {
            grenade: 0,
            melee: 0,
            class: 0,
            super: 0,
        },
        orb: {
            pickup: 0,
        }
    };
}

function Breakdown(props) {
    const { helmetMods, legMods, armMods, classMods, armorCharge, charClass } = props;
    const [ grenadeTotals, setGrenadeTotals ] = useState(new Totals(createData()))
    const [ meleeTotals, setMeleeTotals ] = useState(new Totals(createData()))
    const [ classTotals, setClassTotals ] = useState(new Totals(createData()))
    const [ superTotals, setSuperTotals ] = useState(new Totals(createData()))

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
        let tempTotals = {
            'grenade': new Totals(createData()),
            'melee': new Totals(createData()),
            'super': new Totals(createData()),
            'class': new Totals(createData()),
        }

        const addToBreakdown = (data) => {
            const count = data.count
            const stacks = data.stacks[charClass]
            const [ability, use] = data.type.split('-')
            const kickstart = data.kickstart ?? false
            const generates = data.generates

            if (ability === 'orb') {
                // console.log(`Ability: ${ability}  Generates ${generates}  Use ${use}`)
                return
            }

            // Pull tempData for current ability
            let tempGeneratesTotals = tempTotals[ability]

            // Gets the total generated % of ability from current mod
            // If its a kickstart mod, add armor charge to stacks (should only work if count != 0)
            let generatedAmount = 0;
            if (kickstart && count > 0) {
                generatedAmount = stacks[count + armorCharge.charge]
            }
            else {
                generatedAmount = stacks[count]
            }


            let newGeneratedValue = tempGeneratesTotals.getValue(use, generates)
            newGeneratedValue += generatedAmount
            // Update the temp value

            if (generates === 'all') {
                // console.log(generates)
                // console.log(data.name)
                // tempGeneratesTotals.updateValue(use, generates, newGeneratedValue)
                // tempGeneratesTotals.updateValue(use, generates, newGeneratedValue)
                // tempGeneratesTotals.updateValue(use, generates, newGeneratedValue)
            }
            else {
                tempGeneratesTotals.updateValue(use, generates, newGeneratedValue)
            }
        }

        checkData(allMods)

        const stateSetters = {
            'grenade': setGrenadeTotals,
            'melee': setMeleeTotals,
            'class': setClassTotals,
            'super': setSuperTotals,
        };

        const stateValues = {
            'grenade': grenadeTotals,
            'melee': meleeTotals,
            'class': classTotals,
            'super': superTotals,
        };

        // Update the corresponding states
        for (let ability in tempTotals) {
            const stateSetter = stateSetters[ability];
            let newTotal = tempTotals[ability]

            if (stateSetter && !stateValues[ability].isEqual(newTotal)) {
                stateSetter(newTotal);
            }
        }

    }, [allMods, armorCharge ])

    return (
        <div className='Breakdown'>
            <TabsComponent
                grenadeTotals={grenadeTotals}
                meleeTotals={meleeTotals}
                classTotals={classTotals}
                superTotals={superTotals}
            />
        </div>
    )
}

export default Breakdown;