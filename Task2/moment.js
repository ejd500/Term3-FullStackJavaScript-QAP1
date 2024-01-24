// Require the moment package
const moment = require('moment');

// Get the current date and time
const currentDate = moment();

// Format and display the current date and time
console.log('Current Date and Time:', currentDate.format('DD-MMM-YYYY, h:mm a'));

// Add 7 days to the current date
const futureDate = currentDate.add(7, 'days');

// Format and display the future date
console.log('Future Date (7 days later):', futureDate.format('DD-MMM-YYYY, h:mm a'));
