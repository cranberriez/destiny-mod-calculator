import React, {useState, useEffect} from 'react';

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function TabsComponent(props) {
	const { grenadeTotals, meleeTotals, classTotals, superTotals } = props;
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	const tabData = [grenadeTotals, meleeTotals, classTotals, superTotals];

	return (
		<div>
			<div className="tab-buttons">
				<button onClick={() => handleTabChange(0)}>Tab 1</button>
				<button onClick={() => handleTabChange(1)}>Tab 2</button>
				<button onClick={() => handleTabChange(2)}>Tab 3</button>
				<button onClick={() => handleTabChange(3)}>Tab 4</button>
			</div>

			<TabContent
				data={tabData[activeTab]}
				index={activeTab}
			/>
		</div>
	);
}

function TabContent({ data, index }) {
	console.table(data)
	const dataNames = ['grenade', 'melee', 'class', 'super']

	return (
		<div className="tab-content">
			{/* Render your layout using the received data */}
			{dataNames[index]}


		</div>
	);
}

export default TabsComponent;