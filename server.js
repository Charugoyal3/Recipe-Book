const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const userRouter = require("./router/userRouter");

const categoryRouter = require("./router/categoryRouter");

const recipeRouter = require("./router/recipeRouter");


// for recipe
app.use("/:userId/", recipeRouter);

//for users
app.use("/users/", userRouter);

//for category
app.use("/category/", categoryRouter);


app.get("*", (req, res) => {
  res.send("App started!");
});

app.listen(PORT, () => {
  console.log("app started @" + PORT);
});