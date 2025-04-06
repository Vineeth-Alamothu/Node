const fs = require('fs');

const myRead = fs.createReadStream('input.txt', 'utf8');
// built in event listener
myRead.on('open', () => {
  console.log('file opened');
});

// custom listener
const event = require('events');
const eventEmitter = new event.EventEmitter();

eventEmitter.on('play', (data) => {
  console.log(`I'm playing ${data}`);
});

eventEmitter.emit('play', 'fun game');