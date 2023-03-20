import React from 'react';
import './css/navbar.css';
import { NavLink } from 'react-router-dom';

import { ReactComponent as HelmetIcon } from './svgs/helmet.svg';
import { ReactComponent as ArmIcon } from './svgs/arm.svg';
import { ReactComponent as LegIcon } from './svgs/leg.svg';
import { ReactComponent as ClassIcon } from './svgs/class.svg';

const icons = {
    'helmet': HelmetIcon,
    'arm': ArmIcon,
    'leg': LegIcon,
    'class': ClassIcon
  };

function Navbar(props) {
    const { modTotals } = props;

    return (
        <nav>
            {Object.keys(modTotals).map(key => (
                <NavLink to={'/' + key} className=''  id={key} key={key}>
                    <div className='nav-label'>
                        <div className='nav-icon'>
                            {React.createElement(icons[key])}
                        </div>
                        <p>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                    </div>
                    <div className='nav-mod-count'>
                        <div id={modTotals[key] + '-mod-1'} className={modTotals[key].total >= 1 ? "active" : ""}><div></div></div>
                        <div id={modTotals[key] + '-mod-2'} className={modTotals[key].total >= 2 ? "active" : ""}><div></div></div>
                        <div id={modTotals[key] + '-mod-3'} className={modTotals[key].total >= 3 ? "active" : ""}><div></div></div>
                    </div>
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar;
