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
                <NavLink to={'/destiny-mod-calculator/' + key} className=''  id={key + '-link'} key={key + '-link'}>

                    <div className='nav-label'>
                        <div className='nav-icon'>
                            {React.createElement(icons[key])}
                        </div>
                        <p>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                    </div>
                    <div className='nav-mod-count'>
                        <div id={key + '-mod-1'} className={modTotals[key] >= 1 ? "active" : ""}><div></div></div>
                        <div id={key + '-mod-2'} className={modTotals[key] >= 2 ? "active" : ""}><div></div></div>
                        <div id={key + '-mod-3'} className={modTotals[key] >= 3 ? "active" : ""}><div></div></div>
                    </div>
                </NavLink>
            ))}

            <div className='small-cont'> 
                <a  className='small'
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.reddit.com/r/DestinyTheGame/comments/11m05tz/full_breakdown_of_all_ability_related_armormods/'>
                        Source
                </a>
            </div>
            <div className='small-cont'> 
                <a  className='small'
                    target="_blank"
                    rel="noreferrer"
                    href='https://github.com/cranberriez/destiny-mod-calculator'>
                        Github
                </a>
            </div>

        </nav>
    )
}

export default Navbar;
