const EventEmitter = require('events');

const customEmitter =  new EventEmitter();
customEmitter.on('response',()=>{
  console.log('data', 'received')
})

customEmitter.on('response',(name, id)=>{
  console.log('Other Logic implemented user '  + name + id)
})


customEmitter.emit('response','John', 34);