const Category = require("../models/category");

const getAllCategory = async (req, res) => {
  try {
    let category = await Category.find();
    if (category)
      res.send({
        error: false,
        category: category,
      });
  } catch (error) {
    res.send({
      error: true,
      message: error,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    let categoryId = req.params.id;
    let category = await Recipe.findOne({
      _id: categoryId,
    });
    if (category)
      res.send({
        error: false,
        category: category,
      });
  } catch (error) {
    res.send({
      error: true,
      message: error,
    });
  }
};

const postCategory = async (req, res) => {
  try {
    console.log("here", req.body);

    let category = {
      categoryName: req.body.categoryName,
    };
    console.log("here");

    if (!category) {
      res.send({ error: true, message: "No category found!" });
    }
    console.log("here");
    let newCategory = await Category.create(category);

    console.log("new category created: ", newCategory);
    res.send({ error: false, category: newCategory });
  } catch (error) {
    res.send({ error: true, message: error });
  }
};

const updateCategory = async (req, res) => {
  try {
    let category = {
      categoryName: req.body.categoryName,
    };
    if (!category) {
      res.send({
        error: true,
        message: "No Category found!",
      });
    } else {
      let categoryId = req.params.categoryId;

      let updatedCategory = await Category.findById(categoryId,async (err, response) => {
          if (!err && response) {
            // updated values
            response = recipe;
            // interaction with db
            await response.save();
          }
        }
      );

      console.log("Category updated: ", updatedCategory);
      res.send({
        error: false,
        category: updatedCategory,
      });
    }
  } catch (error) {
    res.send({
      error: true,
      message: error,
    });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    await Category.findByIdAndDelete(categoryId, (err, category) => {
      if (!err) res.redirect("/" + categoryId);
    });
  } catch (err) {
    res.send("Couldn't delete Category");
  }
};

exports.getAllCategory = getAllCategory;
exports.getCategory = getCategory;
exports.postCategory = postCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
