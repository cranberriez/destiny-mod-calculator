import React from 'react';
import './css/settings.css';

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
	const { gradientIndex, setGradientIndex } = props;
	const gradients = [
		'linear-gradient(111.45deg, rgba(67, 198, 172, 0.4) 7.7%, rgba(25, 22, 84, 0.4) 93.74%)',
		'linear-gradient(111.45deg, rgba(191, 233, 255, 0.4) 7.7%, rgba(255, 110, 127, 0.4) 93.74%)',
		'linear-gradient(111.45deg, rgba(204, 43, 94, 0.4) 7.7%, rgba(117, 58, 136, 0.4) 93.74%)',
		'linear-gradient(111.45deg, rgba(20, 20, 20, 1) 7.7%, rgba(236, 0, 140, 1) 193.74%)',
		'linear-gradient(111.45deg, rgba(0, 0, 0, 1) 7.7%, rgba(43, 43, 43, 1) 193.74%)',
		'linear-gradient(111.45deg, rgba(253, 187, 45, 0.4), rgba(178, 31, 31, 0.6), rgba(26, 42, 108, 0.8)',

	]

	return (
		<div className='Settings'>
			<h1>Background</h1>
			<GradientViewer
				gradients={gradients}
				gradientIndex={gradientIndex}
				setGradientIndex={setGradientIndex}
			/>
			<div className='divider'></div>
		</div>
	)
}

export default Settings;