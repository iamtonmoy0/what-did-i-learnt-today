import express from "express";
import router from "./router";
// initialize app
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello " });
});
// initialize router
app.use("/api", router);

export default app;
