const express = require("express");
const morgan = require("morgan");
const { createItem } = require("../controller/controller");
const app = express();
// middleware
app.use(express.json());
app.use(morgan("dev"));
// app.use("api/v1", require("../routes/crud.router"));
// root route

app.post("/items", (req, res) => {
  const { name, description } = req.body;
  createItem(name, description, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.status(201).send(`items added .id:${data.id}`);
    }
  });
});
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

module.exports = app;
