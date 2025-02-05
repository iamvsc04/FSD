const os = require("os");
let days = Math.floor(os.uptime() / 60 / 60 / 24);
let hrs = Math.floor(os.uptime() / 60 / 60) % 24;
let minutes = Math.floor(os.uptime() / 60) % 60;
let sec = Math.floor(os.uptime()) % 60;
console.log(`Uptime of the system : ${days}:${hrs}:${minutes}:${sec}`);
