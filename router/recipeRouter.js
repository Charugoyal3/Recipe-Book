const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipe,
  postRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

// get ALL
router.get("/", getAllRecipes);

// get One
router.get("/", getRecipe);

// post
router.get("/", postRecipe);

// update
router.get("/", updateRecipe);

// delete
router.get("/", deleteRecipe);

module.exports = router;
