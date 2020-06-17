const express = require("express");

const app = express();

app.get("*", (req, res) => {
  res.send("app started!");
});

app.listen(3000, () => {
  console.log("app started @" + 3000);
});
