import React from 'react';
import './css/settings.css';
import { gradients } from './utils/changeGradient';

function GradientViewer(props) {
	const { gradients, gradientIndex, setGradientIndex } = props;

	return (
		<div>
			{gradients.map((gradient, index) => (
				<div key={index} className={`settings-gradient-cont ${gradientIndex === index ? 'active' : ''}`}>
					<div
						className='settings-gradient-button'
						style={{
							background: gradient || 'blue',
							width: "80px",
							height: "80px",
							cursor: "pointer",
						}}
						onClick={() => setGradientIndex(index)}
					></div>
				</div>
			))}
		</div>
	);
}

function Settings(props) {
	const { gradientIndex, setGradientIndex, showCharSelector, setShowCharSelector } = props;

	return (
		<div className='Settings'>
			<h1>Background</h1>
			<GradientViewer
				gradients={gradients}
				gradientIndex={gradientIndex}
				setGradientIndex={setGradientIndex}
			/>
			<div className='divider'></div>
			<h1>Show/Hide Class Selector</h1>
			<button
				className={showCharSelector ? 'active' : ''}
				onClick={() => setShowCharSelector(true)}>
				Show
			</button>
			<button
				className={showCharSelector ? '' : 'active'}
				onClick={() => setShowCharSelector(false)}>
				Hide
			</button>
			<div className='divider'></div>
		</div>
	)
}

export default Settings;