const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.write("hello");
    res.end();
  }
});
// server
server.listen(8000, () => {
  console.log("server is running");
});
