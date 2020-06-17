const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryModel = Schema({
  categoryName: String,
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

module.exports = mongoose.model("Category", categoryModel);
