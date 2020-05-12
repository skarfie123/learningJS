// import modules
const Logger = require('./logger');
const logger = new Logger();

function sayHello(name){
    logger.log("Hello", name);
}

console.log(module);

sayHello("Rahul");

const path = require('path');
let filename = path.parse(__filename)
console.log(filename);

const os = require('os');
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);
// in general, always use the asynchronous alternative
fs.readdir('./', function(err, files){
    if (err) logger.log("Error", err);
    else logger.log("Result", files);
});


// Events
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register listener
emitter.on('message', (eventArg) => {
    logger.log("Listener called");
});

// Raise Event
emitter.emit('message', {info: "Something about this event"})

logger.on('messageLogged', (eventArg) => {
    console.log("Logger called");
});


//HTTP
const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/numbers'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
logger.log("Listening on port 3000")