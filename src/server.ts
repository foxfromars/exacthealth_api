import express from "express";

const app = express();

app.get("/test", (req, res) => {
  console.log("we are listening");
  res.send("hello");
})

app.listen(8000, () => {
  console.log("server initialize");
})
