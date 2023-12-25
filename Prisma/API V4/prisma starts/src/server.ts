import express from "express";
// initialize app
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello " });
});

export default app;
