const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/api/data") {
    const data = fs.readFileSync(__dirname + "/package.json", "utf-8");
    res.writeHead(200, { "content-type": "application/json" });
    res.write(data);
    res.end();
  }
});

server.listen(1234);
