import React from 'react';
import './css/navbar.css';
import { NavLink } from 'react-router-dom';

import { ReactComponent as HelmetIcon } from './svgs/helmet.svg';
import { ReactComponent as ArmIcon } from './svgs/arm.svg';
import { ReactComponent as LegIcon } from './svgs/leg.svg';
import { ReactComponent as ClassIcon } from './svgs/class.svg';
import { ReactComponent as SettingsIcon } from './svgs/settings.svg';

const icons = {
    'helmet': HelmetIcon,
    'arm': ArmIcon,
    'leg': LegIcon,
    'class': ClassIcon
};

function getSlottedCount(slottedStates) {
    let count = 0;
    slottedStates.forEach(element => {
        if (element !== '') count++;        
    });
    return count;
}

function Navbar(props) {
    const { slottedStates } = props;

    return (
        <nav>
            {/* <NavLink to='/' className='basic-nav'>
                <p>Home</p>
            </NavLink> */}

            {Object.keys(slottedStates).map(key => (
                <NavLink to={key} className='armor-nav'  id={key + '-link'} key={key + '-link'}>

                    <div className='nav-label'>
                        <div className='nav-icon'>
                            {React.createElement(icons[key])}
                        </div>
                        <p>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                    </div>
                    <div className='nav-mod-count'>
                        <div id={key + '-mod-1'} className={getSlottedCount(slottedStates[key]) >= 3 ? "active" : ""}><div></div></div>
                        <div id={key + '-mod-2'} className={getSlottedCount(slottedStates[key]) >= 2  ? "active" : ""}><div></div></div>
                        <div id={key + '-mod-3'} className={getSlottedCount(slottedStates[key]) >= 1  ? "active" : ""}><div></div></div>
                    </div>
                </NavLink>
            ))}

            <NavLink to='/settings' className='basic-nav'>
                <div className='nav-label'>
                    <div className='nav-icon'>
                        {React.createElement(SettingsIcon)}
                    </div>
                    <p>Settings</p>
                </div>
            </NavLink>

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
