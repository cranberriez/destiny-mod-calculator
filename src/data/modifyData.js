// Script is run using `node modifyData.js`

const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, jsonString) => {
	if (err) {
		console.log('Error reading the JSON file:', err);
		return;
	}

	// Parse the JSON string
	const data = JSON.parse(jsonString);

	// Iterate over the properties of data and modify the stacks property
	Object.keys(data).forEach(item => {
		Object.keys(data[item]).forEach(subItem => {
			const stacksArray = data[item][subItem]['stacks'];
			data[item][subItem]['stacks'] = {
				warlock: [...stacksArray], // You may populate these arrays with data if needed
				titan: [...stacksArray],
				hunter: [...stacksArray],
			};
		});
	});

	// Save the modified data to a new JSON file
	fs.writeFile('modifiedData.json', JSON.stringify(data, null, 2), err => {
		if (err) {
			console.log('Error writing modified JSON data to a file:', err);
			return;
		}

		console.log('Modified JSON data saved to modifiedData.json');
	});
});