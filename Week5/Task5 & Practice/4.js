const event = require("events");
let eventEmitter = new event();

eventEmitter.once("listen", (n, a) => {
  console.log("So Here Are the User details ");
  let name = n;
  let age = a;
  console.log(`Hello, ${name}! You are ${age} years old`);
});

eventEmitter.emit("listen", "VSC", "19");
eventEmitter.emit("listen", "VSC", "19");
eventEmitter.emit("listen", "VSC", "19");
