// Require the 'events' module to create an EventEmitter
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Attach a listener function to the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event with the name 'Peter'
myEmitter.emit('greet', 'Peter');