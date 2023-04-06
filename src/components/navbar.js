import React, { useState } from 'react';
import './css/navbar.css';
import { NavLink } from 'react-router-dom';
import Popup from "./modules/popup";

import { ReactComponent as HelmetIcon } from './svgs/helmet.svg';
import { ReactComponent as ArmIcon } from './svgs/arm.svg';
import { ReactComponent as LegIcon } from './svgs/leg.svg';
import { ReactComponent as ClassIcon } from './svgs/class.svg';
import { ReactComponent as SettingsIcon } from './svgs/settings.svg';

import { ReactComponent as WarlockIcon } from './svgs/class-warlock.svg';
import { ReactComponent as TitanIcon } from './svgs/class-titan.svg';
import { ReactComponent as HunterIcon } from './svgs/class-hunter.svg';

const icons = {
    'helmet': HelmetIcon,
    'arm': ArmIcon,
    'leg': LegIcon,
    'class': ClassIcon
};

const classIcons = {
    'warlock': WarlockIcon,
    'titan': TitanIcon,
    'hunter': HunterIcon,
}

function getSlottedCount(slottedStates) {
    let count = 0;
    slottedStates.forEach(element => {
        if (element !== '') count++;        
    });
    return count;
}


function Navbar(props) {
    const { slottedStates, charClass, setCharClass, showCharSelector } = props;
    const [popupStatus, setPopupStatus] = useState(false)

    const handleCharClassSelect = (newCharClass) => {
        setCharClass(newCharClass);
        setPopupStatus(false);
    }

    return (
        <>
            <Popup
                popupStatus={popupStatus}
                setPopupStatus={setPopupStatus}
            >
                <div className={'popup-label'}>
                    Select Character Class
                </div>

                <div onClick={() => handleCharClassSelect('warlock')} className={'class-picker-char warlock'}>
                    {React.createElement(classIcons['warlock']) }
                </div>
                <div onClick={() => handleCharClassSelect('titan')} className={'class-picker-char titan'}>
                    {React.createElement(classIcons['titan'])}
                </div>
                <div onClick={() => handleCharClassSelect('hunter')} className={'class-picker-char hunter'}>
                    {React.createElement(classIcons['hunter'])}
                </div>
            </Popup>

            <nav>
                {/* <NavLink to='/' className='basic-nav'>
                    <p>Home</p>
                </NavLink> */}

                {showCharSelector &&
                <div className='custom-nav class-selector-button' onClick={() => (setPopupStatus(true))}>
                    <div className='custom-nav-label'>
                        <div className='custom-nav-icon'>
                            {React.createElement(classIcons[charClass])}
                        </div>
                        {/*<p>*/}
                        {/*    {capitalizeFirstLetter(charClass)}*/}
                        {/*</p>*/}
                    </div>
                </div>}

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

                <div className='small-cont first-small-cont'>
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

                <NavLink to='/settings' className='basic-nav'>
                    <div className='nav-label'>
                        <div className='nav-icon'>
                            {React.createElement(SettingsIcon)}
                        </div>
                        <p>Settings</p>
                    </div>
                </NavLink>

            </nav>
        </>
    )
}

export default Navbar;
