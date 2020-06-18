const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const recipeRoutes = require("./router/recipeRouter");

// for recipe
app.use("/:userId/", recipeRoutes);

//for users
app.use("/users/",userRouter);

app.get("*", (req, res) => {
  res.send("app started!");
});

app.listen(PORT, () => {
  console.log("app started @" + PORT);
});
