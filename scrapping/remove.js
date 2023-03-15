const fs = require('fs');

// Read the JSON file into a JavaScript object
let data = JSON.parse(fs.readFileSync('/rest.json', 'utf-8'));

// Identify the item to remove
let itemToRemove = { id: 2 };

// Find the index of the item to remove
let indexToRemove = data.findIndex(function(item) {
    return JSON.stringify(item) === JSON.stringify(itemToRemove);
});

// Remove the item from the JavaScript object
if (indexToRemove !== -1) {
    data.splice(indexToRemove, 1);
}

// Save the modified JavaScript object back to the JSON file
fs.writeFileSync('rest.json', JSON.stringify(data), 'utf-8');
