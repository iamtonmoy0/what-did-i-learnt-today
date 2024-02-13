const http = require("http");
const app = require("./app/app");

const server = http.createServer(app);

server.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on port ${process.env.PORT || "3001"}`);
});
