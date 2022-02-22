// Event Driven Programming -> Flow of the program is determined by events

const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response", ()=>{
  console.log("An response Event was emitted");
})

customEmitter.on("noResponse", ()=>{
  console.log("A noResponse event was emitted");
})

if(false){
  customEmitter.emit("response")
} else{
  customEmitter.emit("noResponse")
}