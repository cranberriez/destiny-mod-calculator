import React, {useState} from 'react';
import './css/settings.css';

function GradientViewer(props) {
	const { gradients, gradientIndex, setGradientIndex } = props;

}

function Settings(props) {
	const [gradientIndex, setGradientIndex] = useState(0)
	const gradients = [
		'linear-gradient(111.45deg, rgba(67, 198, 172, 0.4) 7.7%, rgba(25, 22, 84, 0.4) 93.74%);',
		'linear-gradient(111.45deg, rgba(191, 233, 255, 0.8) 7.7%, rgba(255, 110, 127, 0.8) 93.74%)',
		'linear-gradient(111.45deg, rgba(204, 43, 94, 0.4) 7.7%, rgba(117, 58, 136, 0.4) 93.74%)',
		'linear-gradient(111.45deg, rgba(0, 0, 0, 1) 7.7%, rgba(236, 0, 140, 1) 193.74%)'
	]

	return (
		<>
			<h1>Gradient</h1>

			<div className='divider'></div>
		</>

	)
}

export default Settings;