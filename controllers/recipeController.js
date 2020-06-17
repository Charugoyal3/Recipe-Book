const Recipe = require("../models/recipe");
const Category = require("../models/category");

const getAllRecipes = async (req, res) => {
  try {
    let recipes = await Recipe.find();
    if (recipes) res.send({ error: false, recipes: recipes });
  } catch (error) {
    res.send({ error: true, message: error });
  }
};

const getRecipe = async (req, res) => {
  try {
    let recipeId = req.params.recipeId;
    let recipe = await Recipe.findOne({ _id: recipeId });
    if (recipe) res.send({ error: false, recipe: recipe });
  } catch (error) {
    res.send({ error: true, message: error });
  }
};

const postRecipe = async (req, res) => {
  try {
    let recipe = {
      recipeName: req.body.recipeName,
      picture: req.body.picture,
      description: req.body.description,
    };
    if (!recipe) {
      res.send({ error: true, message: "No recipe found!" });
    } else {
      let category = await Category.findOne({ categoryName: req.body.categoryName });

      let newRecipe = await Recipe.create(recipe);
      // push - append
      // unshift - starting
      await category.recipes.unshift(newRecipe);
      await category.save();

      console.log("new recipe created: ", newRecipe);
      res.send({ error: false, recipe: newRecipe });
    }
  } catch (error) {
    res.send({ error: true, message: error });
  }
};

const updateRecipe = async (req, res) => {
  try {
    let recipe = {
        recipeName: req.body.recipeName,
        picture: req.body.picture,
        description: req.body.description,
      };
      if (!recipe) {
        res.send({ error: true, message: "No recipe details found!" });
      } else {
        let recipeId = req.params.recipeId;
        
        let updatedRecipe = await Recipe.findById(recipeId, (err, doc)=>{
            if (!err && doc) {
              // updated values
                doc = recipe;
                // interaction with db
                await doc.save(); 
            }
        });
  
        console.log("recipe updated: ", updatedRecipe);
        res.send({ error: false, recipe: updatedRecipe });
      }
  } catch (error) {
    res.send({ error: true, message: error });
  }
};


const deleteRecipe = async (req,res) =>{
    const categoryId = req.params.categoryId;
    const recipeId = req.body.recipeId;

    try {
        await Recipe.findByIdAndDelete(recipeId, (err, recipe) => {
            if (!err) res.redirect("/" + categoryId + "/recipes");
        });
    } catch (err) {
        res.send("Couldn't delete Recipe");
    }
}


exports.getAllRecipes =  getAllRecipes
exports.getRecipe =  getRecipe
exports.postRecipe =  postRecipe
exports.updateRecipe =  updateRecipe
exports.deleteRecipe =  deleteRecipe