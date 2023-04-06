const gradients = [
	'linear-gradient(111.45deg, rgba(67, 198, 172, 0.4) 7.7%, rgba(25, 22, 84, 0.4) 93.74%)',
	'linear-gradient(111.45deg, rgba(191, 233, 255, 0.4) 7.7%, rgba(255, 110, 127, 0.4) 93.74%)',
	'linear-gradient(111.45deg, rgba(204, 43, 94, 0.4) 7.7%, rgba(117, 58, 136, 0.4) 93.74%)',
	'linear-gradient(111.45deg, rgba(20, 20, 20, 1) 7.7%, rgba(236, 0, 140, 0.6) 193.74%)',
	'linear-gradient(111.45deg, rgba(0, 0, 0, 1) 7.7%, rgba(43, 43, 43, 1) 93.74%)',
	'linear-gradient(111.45deg, rgba(253, 187, 45, 0.4), rgba(178, 31, 31, 0.6), rgba(26, 42, 108, 0.8)',
]


const primaryColors = [
	'67, 198, 172',
	'191, 233, 255',
	'204, 43, 94',
	'20, 20, 20',
	'0, 0, 0',
	'253, 187, 45',
]

export function changeBackgroundGradient(i) {
	document.documentElement.style.setProperty(
		"--background-gradient",
		gradients[i]
	);

	document.documentElement.style.setProperty(
		"--primary-color",
		primaryColors[i]
	);
}