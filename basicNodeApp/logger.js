const EventEmitter = require('events');

class Logger extends EventEmitter{
    log() {
        console.log(new Date(), ...arguments);
        // Raise Event
    this.emit('messageLogged', {info: "Something about this event"})
    }
}


//export only the items needed by other modules
// module.exports.log = log // exports as object with log function, allows multiple exports
// module.exports = log // exports only log function
module.exports = Logger