const express = require("express");
const app = express();

//Declare routes

app.get("/", (req, res) => {
  res.send("Hello node api");
});

app.listen(3000, () => {
  console.log("Node api is running");
});
