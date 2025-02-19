// Create a simple routing system within the Node.js http module that handles different paths (e.g., /home, /about, /contact).
//  Send a different response for each route, such as "Welcome to Home," "About Us,"etc.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/HOME" || req.url === "/home") {
    res.write("Welcome to Home");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is About Us page");
    res.end();
  } else if (req.url === "/contact") {
    res.write("This is contact us page");
    res.end();
  } else {
    res.write("Access valid endpoints as such /home or /about or /contact ");
    res.end();
  }
});

server.listen(4040, () => {
  console.log("Server listening at port 4040");
});
