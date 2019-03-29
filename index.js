const http = require("http");
const port = process.env.PORT || 3000;

// Creating new HTTP server.
http
  .createServer((req, res) => {
    const ip =
      (req.headers["x-forwarded-for"] || "").split(",").shift() ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(ip);
  })
  .listen(port, () => {
    console.log("listen on port " + port);
  });
