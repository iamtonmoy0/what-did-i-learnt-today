const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<p>Hello World!</p>");
    res.statusCode = 200;
    res.end();
  } else {
    res.write("invalid route");
    res.statusCode = 400;
    res.end();
  }
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
