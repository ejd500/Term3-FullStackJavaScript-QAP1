// Require the 'fs' module to work with the file system
const fs = require('fs');

// Example # 1 ...asynchronously reading the contents of a file

// Asynchronously read the contents of a file called filesystem.txt
// Since the file contains text and I want to work with it as a string, 
// I specify the encoding (e.g., 'utf8') to automatically convert the 
// data from a Buffer object to a string.
// fs.readFile also accepts a callback function as an argument. 
// These callbacks are executed once the asynchronous operation is complete.
fs.readFile('filesystem.txt', 'utf8', (err, data) => {
    // Check if there's an error during the file read operation
    if (err) {
        // If an error occurs, log an error message with details
        console.error('Error reading the file:', err);
    } else {
        // If the file read operation is successful, log the file contents
        console.log('Contents of filesystem.txt:', data);
    }
});

// Example # 2 ...asynchronously writing data to a file 

// Define a file path.
const filePath = 'filesystem2.txt';
// Specify content to write
const contentToWrite = 'I am now writing data to a text file called filesystem2.txt!';

// Asynchronously writing data to a file (this creates the file if it doesn't exist)
// While specifying the encoding is optional for strings, 
// it becomes crucial when dealing with binary data or when you want to ensure that the data is treated as text in a specific encoding. 
fs.writeFile(filePath, contentToWrite, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log(`${contentToWrite} File has been written successfully using the fs module in Node.js!`);
    }
});
