// Require the url module to work with a url.
const url = require('url');

// Example URL string
const urlString = 'https://www.example.com:8080/path?name=John#section1';

// Example #1 ...Parsing the URL from a url String
const parsedUrl = url.parse(urlString, true); // The second parameter 'true' parses the query string
console.log('');
console.log('Accessing components of the parsed URL: ')
console.log('- Protocol:', parsedUrl.protocol); // 'https:'
console.log('- Hostname:', parsedUrl.hostname); // 'www.example.com'
console.log('- Port:', parsedUrl.port);         // '8080'
console.log('- Pathname:', parsedUrl.pathname); // '/path'
console.log('- Query:', parsedUrl.query.name);  // 'John'
console.log('- Hash:', parsedUrl.hash);         // '#section1'
console.log('');

// Example #2 ...Formatting the URL from components

// Components of a URL
const urlComponents = {
    protocol: 'https:',
    hostname: 'www.example2.com',
    port: 3000,
    pathname: '/about',
    query: { name: 'Ellen' },
    hash: 'section1'
};
  
// Format the URL from components
const formattedUrl = url.format(urlComponents);

console.log('Formatted URL:', formattedUrl);
console.log('');
