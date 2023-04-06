import React, {useState} from 'react';
import { capitalizeFirstLetter } from "../utils/capitilizeFirst";
import '../css/breakdown.css';

function sumObjects(objects) {
	const result = {
		grenade: 0,
		melee: 0,
		class: 0,
		super: 0,
	};

	objects.forEach((obj) => {
		result.grenade += obj.grenade;
		result.melee += obj.melee;
		result.class += obj.class;
		result.super += obj.super;
	});

	return result;
}

function sumValues(object) {
	let resultSum = 0

	for (const [key, value] of Object.entries(object)) {
		resultSum += value
	}

	return resultSum
}

function TabsComponent(props) {
	const { grenadeTotals, meleeTotals, classTotals, orbTotals } = props;
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	const tabData = [grenadeTotals, meleeTotals, classTotals, orbTotals];

	return (
		<>
			<div className="tab-buttons">
				<button className={`${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabChange(0)}>Grenade</button>
				<button className={`${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabChange(1)}>Melee</button>
				<button className={`${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabChange(2)}>Class</button>
			</div>

			<TabContent
				data={tabData[activeTab]}
				classData={classTotals}
				orbData={orbTotals}
				index={activeTab}
			/>
		</>
	);
}

function TabContent(props) {
	const { data, classData, orbData, index } = props
	const dataNames = ['grenade', 'melee', 'class', 'orb']

	const AbilityData = data

	const kill = index < 2 ? sumObjects([AbilityData.kill, AbilityData.hit, AbilityData.use]) : {}
	const hit = index < 2 ? sumObjects([AbilityData.hit, AbilityData.use]) : {}
	const use = AbilityData.use // technically throw but throw keyword is already defined const pickup = AbilityData.pickup || null

	const onClassUse = classData.use[dataNames[index]]
	const onOrbPickup = orbData.pickup[dataNames[index]]
	const onOrbPickupLeastCharged = orbData.pickup['least-charged']

	const abilityName = dataNames[index]
	if (index === 0 || index === 1) return (
		<div className="tab-content">
			{sumValues(kill) > 0 &&
			<div className="ability-section">
				<h3>{capitalizeFirstLetter(abilityName)} Kill</h3>
				<ul>
					{ (onOrbPickup > 0 || onOrbPickupLeastCharged > 0) &&
						<li className='kill-total-orb'>
						<div className='kill-total'>
							<p>+Orb Pickup</p>
							<p><span className='bd-pct'>%</span><span className='bd-val'>{((onOrbPickup + kill[dataNames[index]]) * 100).toFixed(1)}</span></p>
						</div>
						{ (onOrbPickupLeastCharged + onOrbPickup > onOrbPickup) &&
						<div className='kill-total'>
							<p>+If Least-Charged</p>
							<p><span className='bd-pct'>%</span><span className='bd-val'>{((onOrbPickupLeastCharged + onOrbPickup + kill[dataNames[index]]) * 100).toFixed(1)}</span></p>
						</div>}
					</li>}
					{Object.entries(kill).map(([prop, value]) => (
						<li key={prop} className={value <= 0 ? 'disabled' : ''}>
							<p><span className='bd-pct'>%</span><span className='bd-val'>{(value * 100).toFixed(1)}</span></p>
							<p>{prop}</p>
						</li>
					))}
				</ul>
			</div>}

			<div className="ability-section">
				<h3>{capitalizeFirstLetter(abilityName)} Hit</h3>
				<ul>
					{Object.entries(hit).map(([prop, value]) => (
						<li key={prop} className={value <= 0 ? 'disabled' : ''}>
							<p><span className='bd-pct'>%</span><span className='bd-val'>{(value * 100).toFixed(1)}</span></p>
							<p>{prop}</p>
						</li>
					))}
				</ul>
			</div>

			<div className="ability-section">
				<h3>{capitalizeFirstLetter(abilityName)} Use</h3>
				<ul>
					{Object.entries(use).map(([prop, value]) => (
						<li key={prop} className={value <= 0 ? 'disabled' : ''}>
							<p><span className='bd-pct'>%</span><span className='bd-val'>{(value * 100).toFixed(1)}</span></p>
							<p>{prop}</p>
						</li>
					))}
				</ul>
			</div>

			<div className="ability-section">
				<h3>Class Use</h3>
				<ul>
					<li className={onClassUse <= 0 ? 'disabled' : ''}>
						<p><span className='bd-pct'>%</span><span className='bd-val'>{(onClassUse * 100).toFixed(1)}</span></p>
						<p>{dataNames[index]}</p>
					</li>
				</ul>
			</div>

			<div className="ability-section">
				<h3>Orb Pickup</h3>
				<ul>
					<li className={onOrbPickup <= 0 ? 'disabled' : ''}>
						<p><span className='bd-pct'>%</span><span className='bd-val'>{(onOrbPickup * 100).toFixed(1)}</span></p>
						<p>{dataNames[index]}</p>
					</li>
					<li className={onOrbPickupLeastCharged <= 0 ? 'disabled' : ''}>
						<p><span className='bd-pct'>%</span><span className='bd-val'>{(onOrbPickupLeastCharged * 100).toFixed(1)}</span></p>
						<p>if least-charged</p>
					</li>
				</ul>
			</div>

		</div>
	)
	else {
		return (
		<div className="tab-content">

			<div className="ability-section">
				<h3>Class Use</h3>
				<ul>
					{Object.entries(use).map(([prop, value]) => (
						<li key={prop} className={value <= 0 ? 'disabled' : ''}>
							<p><span className='bd-pct'>%</span><span className='bd-val'>{(value * 100).toFixed(1)}</span></p>
							<p>{prop}</p>
						</li>
					))}
				</ul>
			</div>

			<div className="ability-section">
				<h3>Orb Pickup</h3>
				<ul>
					<li className={onOrbPickup <= 0 ? 'disabled' : ''}>
						<p><span className='bd-pct'>%</span><span className='bd-val'>{(onOrbPickup * 100).toFixed(1)}</span></p>
						<p>{dataNames[index]}</p>
					</li>
					<li className={onOrbPickupLeastCharged <= 0 ? 'disabled' : ''}>
						<p><span className='bd-pct'>%</span><span className='bd-val'>{(onOrbPickupLeastCharged * 100).toFixed(1)}</span></p>
						<p>if least-charged</p>
					</li>
				</ul>
			</div>

		</div>
	)}
}

export default TabsComponent;