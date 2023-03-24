import React from 'react';

function Stacks(props) {
    const { modName, stacks, count, armorCharge, kickstart } = props;
    const listItems = [];
    const charge = count && kickstart ? armorCharge : 0

    for (let i = 0; i < stacks.length; i++) {
        if (stacks[i] === 0) continue

        listItems.push(
            <li  className={(i === count + charge ? 'active' : '')} key={modName + '-' + i}>
                <p><span>%</span>{(stacks[i] * 100).toFixed(1)}</p>
                <p>{i}</p>
            </li>
        )
    }

    return <ul className='mod-stacks'>{listItems}</ul>
}

export default Stacks;