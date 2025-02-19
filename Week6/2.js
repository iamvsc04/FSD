//Write a Node.js server that parses query parameters from a GET request. For example, if the request is /greet?name=John, the server should respond with "Hello, John!".

const http = require("http");
const server = http.createServer((req, res) => {
  const arr = req.url.split("?");
  console.log(arr);
  if (arr[0] === "/greet" && arr[1].startsWith("user=")) {
    res.write(`Hello ! ${arr[1].split("=")[1]}`);
    res.end();
  }
});

server.listen(9398, () => {
  console.log("server lisitneing at 9398");
});
