const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeModel = Schema({
  recipeName: String,
  picture: String,
  description: String,
  likes: Number,
  comments: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Recipe", recipeModel);
