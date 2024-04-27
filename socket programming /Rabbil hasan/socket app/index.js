const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("new user connected");
  // setTimeout(() => {
  //   socket.send("lol i have sent you some thing");
  // }, 10 * 1000);
  // setInterval(() => {
  //   let d = new Date();
  //   let t = d.getTime();
  //   // socket.send(t);
  //   console.log("data sent");
  //   socket.emit("myevent", t);
  // }, 5000);

  // listen data
  socket.on("message", (msg) => {
    console.log(`Message received: ${msg}`);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/submit", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
