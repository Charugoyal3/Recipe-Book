const express = require("express");
const app = express();

const PORT = process.env.port || 5000;

require("./database/database");

const userRouter = require("./router/userRouter");
const categoryRouter = require("./router/categoryRouter");
const recipeRouter = require("./router/recipeRouter");

//for category
app.use("/category", categoryRouter);

//for users
app.use("/users", userRouter);

// for recipe
app.use("/", recipeRouter);

app.get("*", (req, res) => {
  res.send("App started!");
});

app.listen(PORT, () => {
  console.log("app started @" + PORT);
});
