const os = require("os");

let time = 0;
setInterval(() => {
  let freemem = os.freemem() / (1024 * 1024);
  let totalmem = os.totalmem() / (1024 * 1024);
  let percen = Math.round((freemem / totalmem) * 100, 2);
  console.log(
    `Percentage of free Mem is : ${percen} % at time ${time} Seconds`
  );
  time += 5;
}, 5000);
