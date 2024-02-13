const express = require("express");

const app = express();
// middleware
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

module.exports = app;
