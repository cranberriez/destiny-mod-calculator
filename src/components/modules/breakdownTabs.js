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
	const { grenadeTotals, meleeTotals, classTotals, superTotals } = props;
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	const tabData = [grenadeTotals, meleeTotals, classTotals, superTotals];

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
				index={activeTab}
			/>
		</>
	);
}

function TabContent(props) {
	const { data, classData, index } = props
	const dataNames = ['grenade', 'melee', 'class', 'super']

	const AbilityData = data.data

	const kill = sumObjects([AbilityData.kill, AbilityData.hit, AbilityData.use])
	const hit = sumObjects([AbilityData.hit, AbilityData.use])
	const use = AbilityData.use // technically throw but throw keyword is already defined

	// console.log(AbilityData)
	// console.log(kill)
	// return (<p>Nopes</p>)
	const onClassUse = classData.data.use[dataNames[index]]

	const abilityName = dataNames[index]
	if (index === 0 || index === 1) return (
		<div className="tab-content">
			{sumValues(kill) > 0 &&
			<div className="ability-section">
				<h3>{capitalizeFirstLetter(abilityName)} Kill</h3>
				<ul>
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

		</div>
	)
	else return (
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

		</div>
	)
}

export default TabsComponent;