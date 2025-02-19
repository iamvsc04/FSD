//Implement a file server using the http module that serves a static HTML file when a client requests a GET/index.html.

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if ((req.url = "index.html")) {
    const data = fs.readFileSync(__dirname + "/index.html", "utf-8");
    res.write(data);
    res.end();
  }
});

server.listen(5898, () => {
  console.log("this is the 5898");
});
