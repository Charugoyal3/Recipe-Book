const express = require("express");

const app = express();

const recipeRoutes = require("./router/recipeRouter");

// for recipe
app.use("/user/:userId/category/", recipeRoutes);

app.get("*", (req, res) => {
  res.send("app started!");
});

app.listen(3000, () => {
  console.log("app started @" + 3000);
});
