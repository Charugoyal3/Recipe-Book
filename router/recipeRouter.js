const router = require("express").Router();
const {
  getAllRecipes,
  getRecipe,
  postRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

// post
router.post("/recipe", postRecipe);

// get ALL
router.get("/recipe", getAllRecipes);

// get One
router.get("/recipe/:recipeId", getRecipe);

// update
router.put("/recipe/:recipeId", updateRecipe);

// delete
router.delete("/recipe/:recipeId", deleteRecipe);

module.exports = router;
